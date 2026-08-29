import { SystemProject } from '../types';

export const SYSTEM_PROJECTS: SystemProject[] = [
  {
    id: 'titan-tsdb',
    slug: 'titan-tsdb',
    systemId: 'SYS-01',
    name: 'Titan TSDB',
    tagline: 'Custom Distributed Time-Series Database Engine with Sub-Millisecond Aggregation',
    status: 'PRODUCTION',
    technologies: ['C++', 'Go', 'Gorilla Compression', 'Lock-Free Skiplist', 'SIMD', 'WAL', 'gRPC'],
    metrics: [
      { label: 'Ingestion Throughput', value: '1.2M+ pts/sec', detail: 'Single node sustained write' },
      { label: 'Compression Ratio', value: '11.4x', detail: 'Gorilla XOR + Delta-of-Delta' },
      { label: 'Query P99 Latency', value: '< 2.4ms', detail: 'Aggregating 10M metrics' },
      { label: 'Storage Footprint', value: '1.37 bytes/pt', detail: 'Down from 16 bytes raw' }
    ],
    problem:
      'Off-the-shelf general purpose databases incur prohibitive memory and disk I/O overheads when ingesting high-frequency metric streams (1M+ events/sec) while simultaneously serving real-time multi-dimensional range aggregation queries with strict SLAs.',
    architectureOverview:
      'LSM-inspired write path decoupling high-concurrency ingestion from disk writes via lock-free memtable skiplists, double-buffered WAL with group commits, and columnar chunk blocks compressed via Gorilla/XOR algorithms with SIMD-vectorized scan kernels.',
    keyResult:
      'Achieved 1.2M+ writes/sec on 8 vCPUs with 11.4x compression ratio and sub-3ms P99 latency on 10-million point aggregate windows.',
    route: '/systems/titan-tsdb',
    colorScheme: {
      primary: '#3B82F6',
      secondary: '#60A5FA',
      glow: 'rgba(59, 130, 246, 0.15)',
      badge: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    deepDive: {
      overview:
        'Titan TSDB is a high-throughput, low-latency distributed time-series engine purpose-built for telemetry and infrastructure metric ingestion. It replaces traditional B-Tree index structures with timestamp-partitioned chunk files and lock-free memory skiplists.',
      architectureDiagram: {
        nodes: [
          { id: 'client', name: 'Ingestion Clients', type: 'Ingress', description: 'High-volume telemetry collectors sending batch metrics over gRPC / Protobuf streams', latency: '0.2ms' },
          { id: 'wal', name: 'Append-Only WAL', type: 'Durability', description: 'Sequential circular disk buffer with async fsync group commit ensuring zero data loss', latency: '0.4ms' },
          { id: 'memtable', name: 'Lock-Free Skiplist MemTable', type: 'Memory Engine', description: 'CAS-based concurrent skiplist accepting concurrent out-of-order points without mutex contention', latency: '0.1ms' },
          { id: 'compressor', name: 'Gorilla Compression Engine', type: 'Storage Engine', description: 'Delta-of-delta timestamp encoding + IEEE 754 XOR floating point bit-packing', latency: '0.6ms' },
          { id: 'chunks', name: 'Immutable Block Storage', type: 'Persistence', description: '2-hour partitioned columnar chunk files indexed by series fingerprint with sparse block index', latency: '1.2ms' },
          { id: 'queryEngine', name: 'SIMD Query & Aggregator', type: 'Execution', description: 'Vectorized AVX-512 scan loops executing sum/rate/p99 aggregations directly over compressed chunks', latency: '1.8ms' }
        ],
        connections: [
          { from: 'client', to: 'wal', label: 'Batch Write Stream' },
          { from: 'client', to: 'memtable', label: 'Concurrent Insert' },
          { from: 'memtable', to: 'compressor', label: 'Flush on 64MB limit' },
          { from: 'compressor', to: 'chunks', label: 'Immutable Write' },
          { from: 'chunks', to: 'queryEngine', label: 'Sparse Block Index Scan' },
          { from: 'memtable', to: 'queryEngine', label: 'Active Window Merge' }
        ]
      },
      sections: [
        {
          number: '01',
          title: 'System Overview & Ingestion Flow',
          content:
            'Titan TSDB separates write-heavy ingestion paths from read-heavy aggregation paths. Inbound metrics undergo series hashing (64-bit MurmurHash3) to route data directly into thread-local write queues. Metrics are written synchronously to an in-memory lock-free skiplist while an asynchronous background thread performs sequential batches to the Write-Ahead Log (WAL).',
          keyPoints: [
            'Zero-allocation fast-path memory arenas for metric decoding',
            'Dynamic time-window partitioning into discrete 2-hour immutable chunks',
            'Tag-based inverted indexing with roaring bitmaps for fast multi-dimensional series resolution'
          ]
        },
        {
          number: '02',
          title: 'Storage Engine & Gorilla Compression',
          content:
            'Raw metrics require 16 bytes per point (8-byte timestamp + 8-byte float64 value). Titan TSDB employs Facebook Gorilla compression algorithm optimizations. Timestamps use delta-of-delta encoding: identical sampling intervals compress down to a single 0-bit. Float values use IEEE 754 XOR compression against the previous value, discarding redundant leading and trailing zero bits.',
          keyPoints: [
            'Timestamps compressed from 64 bits to an average of 1.37 bits',
            'Floating-point values compressed from 64 bits to an average of 9.6 bits',
            'Overall average compression: 1.37 bytes per metric point (11.4x reduction)'
          ],
          codeSnippet: `// Gorilla Timestamp Delta-of-Delta Encoding Kernel
uint64_t delta = timestamp - prev_timestamp;
int64_t dod = (int64_t)delta - (int64_t)prev_delta;

if (dod == 0) {
    bit_writer.write_bit(0); // 1 bit for steady-interval stream
} else if (dod >= -63 && dod <= 64) {
    bit_writer.write_bits(0b10, 2);
    bit_writer.write_bits(dod + 63, 7); // 9 bits total
} else if (dod >= -255 && dod <= 256) {
    bit_writer.write_bits(0b110, 3);
    bit_writer.write_bits(dod + 255, 9); // 12 bits total
} else {
    bit_writer.write_bits(0b1110, 4);
    bit_writer.write_bits(dod + 2047, 12); // 16 bits total
}`,
          codeLang: 'cpp'
        },
        {
          number: '03',
          title: 'Vectorized Query Execution (SIMD)',
          content:
            'When evaluating range queries such as rate(), histogram_quantile(), or moving averages across millions of series, traditional tuple-at-a-time iterators suffer severe CPU cache misses and branch mispredictions. Titan uses columnar memory layouts and compiles aggregation pipelines into vectorized AVX2/AVX-512 kernels.',
          keyPoints: [
            'Processes 8 double-precision floats per CPU cycle per core',
            'Predicate pushdown skips entire 2-hour blocks using min/max chunk headers without decompression',
            'Multi-threaded query planner dynamically splits time slices across worker thread pools'
          ]
        },
        {
          number: '04',
          title: 'Concurrency, Memory & Durability',
          content:
            'Memory management uses custom fixed-size slab allocators to prevent heap fragmentation during massive churn. Skiplist operations use atomic Compare-And-Swap (CAS) pointers, eliminating global mutex bottlenecks on 32+ thread machines.',
          keyPoints: [
            'Lock-free skiplist implementation with hazard pointers for memory reclamation',
            'Group-commit WAL with ring buffers synchronizing every 5ms or 10,000 points',
            'Graceful recovery scanning block index headers in < 450ms on node restart'
          ]
        }
      ],
      benchmarks: [
        { name: 'Sustained Write Throughput', value: '1,240,000 pts/s', comparison: '3.8x faster than InfluxDB v1', unit: 'writes/sec' },
        { name: 'Compression Efficiency', value: '1.37 bytes/pt', comparison: '11.4x raw reduction', unit: 'bytes' },
        { name: 'P99 Query Latency (10M pts)', value: '2.38 ms', comparison: '6.2x faster than standard SQL TS extensions', unit: 'ms' },
        { name: 'Cold Crash Recovery Time', value: '410 ms', comparison: 'Zero data loss verified', unit: 'ms' }
      ],
      decisions: [
        {
          decision: 'Custom In-Memory Skiplist instead of LSM B-Tree',
          why: 'Time-series data is predominantly append-mostly with strict timestamp ordering; skiplists offer lock-free concurrent insertion without lock escalation.',
          tradeOff: 'Higher pointer memory overhead in RAM compared to compact arrays, mitigated by aggressive flushing to immutable compressed chunk blocks.'
        },
        {
          decision: 'Gorilla XOR Floating-Point Encoding over Generic GZIP/ZSTD',
          why: 'Gorilla operates at bit-level stream speed without full buffer decompression overhead, enabling direct sequential SIMD scans.',
          tradeOff: 'Less effective on purely random, high-entropy float noise; optimal on realistic physical/infrastructure telemetry.'
        },
        {
          decision: 'Immutable 2-Hour Chunk Files',
          why: 'Eliminates complex in-place file mutation, simplifies snapshotting, and allows direct OS page cache mapping (mmap).',
          tradeOff: 'Late-arriving data older than 2 hours requires secondary compaction merge passes.'
        }
      ]
    }
  },
  {
    id: 'vector-inference',
    slug: 'vector-inference',
    systemId: 'SYS-02',
    name: 'Distributed Vector & LLM Inference Engine',
    tagline: 'High-Throughput Vector Indexing with SIMD HNSW & Dynamic Batching LLM Server',
    status: 'ACTIVE_BENCHMARK',
    technologies: ['C++20', 'CUDA', 'SIMD AVX-512', 'HNSW', 'Product Quantization', 'PagedAttention', 'gRPC'],
    metrics: [
      { label: 'Vector Search Latency', value: '< 1.1ms P99', detail: '10M vectors @ 1536-dim' },
      { label: 'Recall @ Top-10', value: '98.7%', detail: 'Cosine similarity on HNSW graph' },
      { label: 'Token Generation Speed', value: '142 tok/sec', detail: 'Dynamic batch size 32' },
      { label: 'KV Cache Efficiency', value: '94.2%', detail: 'Zero fragmentation with PagedAttention' }
    ],
    problem:
      'High-dimensional vector similarity search and large language model inference suffer from extreme memory bandwidth bottlenecks, KV cache fragmentation, and inefficient GPU utilization under unpredictable multi-tenant request arrival distributions.',
    architectureOverview:
      'Dual-pipeline architecture: a low-latency approximate nearest neighbor (ANN) search engine implementing SIMD-accelerated Hierarchical Navigable Small World (HNSW) graphs with Product Quantization (PQ-64), paired with an asynchronous LLM serving runtime featuring dynamic continuous batching, PagedAttention virtual memory KV cache, and speculative decoding.',
    keyResult:
      'Delivered 1.1ms P99 vector retrieval across 10M 1536-dimensional embeddings with 98.7% recall, and tripled LLM serving throughput via paged KV cache allocation and continuous request batching.',
    route: '/systems/vector-inference',
    colorScheme: {
      primary: '#6366F1',
      secondary: '#818CF8',
      glow: 'rgba(99, 102, 241, 0.15)',
      badge: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10'
    },
    deepDive: {
      overview:
        'A unified high-performance AI infrastructure runtime designed for scalable retrieval-augmented generation (RAG) and dense vector indexing. Built entirely in modern C++20 and CUDA with zero-copy gRPC RPC layers.',
      architectureDiagram: {
        nodes: [
          { id: 'queryInflow', name: 'Inference & Query Gateway', type: 'Ingress', description: 'High-concurrency gRPC dispatch handling hybrid embedding search and token generation requests', latency: '0.3ms' },
          { id: 'hnswGraph', name: 'HNSW Hierarchical Graph', type: 'Vector Search', description: 'Multi-layer proximity graph with dynamic greedy routing and heuristic edge pruning', latency: '0.8ms' },
          { id: 'pqEngine', name: 'Product Quantization (PQ)', type: 'Compression', description: 'Compresses 1536-dim FP32 vectors to 64-byte codes with asymmetric distance tables', latency: '0.2ms' },
          { id: 'continuousBatcher', name: 'Continuous Batch Scheduler', type: 'Scheduling', description: 'Iteration-level dynamic batching injecting new prompts into running generation cycles', latency: '0.1ms' },
          { id: 'pagedKv', name: 'PagedAttention Virtual KV Cache', type: 'Memory Management', description: 'Virtual memory block manager allocating non-contiguous GPU KV pages to eliminate wasted VRAM', latency: '0.2ms' },
          { id: 'speculativeWorker', name: 'Speculative Decoding Engine', type: 'Compute Kernel', description: 'Draft model produces K candidate tokens validated in parallel by target model in single forward pass', latency: '1.4ms' }
        ],
        connections: [
          { from: 'queryInflow', to: 'hnswGraph', label: 'Dense Embedding Query' },
          { from: 'hnswGraph', to: 'pqEngine', label: 'Asymmetric Distance Computation' },
          { from: 'queryInflow', to: 'continuousBatcher', label: 'Prompt Generation Stream' },
          { from: 'continuousBatcher', to: 'pagedKv', label: 'Dynamic Page Allocation' },
          { from: 'pagedKv', to: 'speculativeWorker', label: 'Attention Matrix Lookup' },
          { from: 'speculativeWorker', to: 'queryInflow', label: 'Token Stream Response' }
        ]
      },
      sections: [
        {
          number: '01',
          title: 'SIMD-Accelerated HNSW Vector Index',
          content:
            'The vector index organizes embeddings into a multi-layered skip-graph where upper layers provide fast coarse navigation and the ground layer performs fine-grained localized nearest neighbor search. Distance calculations (Euclidean L2 and Cosine Similarity) are vectorized using AVX-512 FMA instructions, computing 16 float products per clock cycle.',
          keyPoints: [
            'Cache-aligned graph node memory layout minimizing TLB misses during graph hops',
            'Asymmetric Distance Computation (ADC) using precomputed lookup tables',
            'Concurrent lock-free edge updates supporting dynamic real-time index mutations'
          ]
        },
        {
          number: '02',
          title: 'Product Quantization (PQ) Compression',
          content:
            'Storing 10 million 1536-dimensional float32 vectors raw requires ~61.4 GB RAM. Using Product Quantization with 64 sub-vectors and 256 centroids per sub-space, each vector is compressed down to 64 bytes (a 96% reduction to ~2.4 GB), fitting entirely within L3 cache and host RAM.',
          keyPoints: [
            '64 sub-quantizers trained via mini-batch K-Means clustering',
            'Sub-millisecond asymmetric distance computation via pre-calculated query-to-centroid tables',
            '98.7% Recall@10 preserved with negligible loss in ranking accuracy'
          ],
          codeSnippet: `// SIMD AVX-512 Cosine Distance Kernel for 1536-dim vectors
inline float sim_avx512_cosine(const float* __restrict a, const float* __restrict b, size_t dim) {
    __m512 dot_acc = _mm512_setzero_ps();
    __m512 norm_a_acc = _mm512_setzero_ps();
    __m512 norm_b_acc = _mm512_setzero_ps();

    for (size_t i = 0; i < dim; i += 16) {
        __m512 va = _mm512_loadu_ps(a + i);
        __m512 vb = _mm512_loadu_ps(b + i);
        dot_acc = _mm512_fmadd_ps(va, vb, dot_acc);
        norm_a_acc = _mm512_fmadd_ps(va, va, norm_a_acc);
        norm_b_acc = _mm512_fmadd_ps(vb, vb, norm_b_acc);
    }
    float dot = _mm512_reduce_add_ps(dot_acc);
    float norm_a = std::sqrt(_mm512_reduce_add_ps(norm_a_acc));
    float norm_b = std::sqrt(_mm512_reduce_add_ps(norm_b_acc));
    return 1.0f - (dot / (norm_a * norm_b + 1e-9f));
}`,
          codeLang: 'cpp'
        },
        {
          number: '03',
          title: 'PagedAttention & Continuous Dynamic Batching',
          content:
            'Standard LLM inference pre-allocates maximum sequence length memory for Key-Value (KV) activations, wasting 60-80% of GPU memory due to internal and external fragmentation. Our runtime implements PagedAttention: KV cache tensors are partitioned into fixed-size physical memory pages (16 tokens per block) mapped via a virtual page table, allowing near 95% GPU memory utilization.',
          keyPoints: [
            'Dynamic prompt injection without waiting for earlier requests to complete generation',
            'Copy-on-Write KV page sharing for parallel beam search and multi-turn conversation caching',
            '2.8x increase in concurrency before hitting GPU VRAM limits'
          ]
        },
        {
          number: '04',
          title: 'Speculative Decoding Engine',
          content:
            'Autoregressive generation is memory-bandwidth bound. We implemented speculative decoding: a lightweight draft model rapidly guesses K candidate tokens. The primary large model validates all K tokens in a single parallel forward pass, achieving 2.1x speedup on general generation tasks without any degradation in output distribution.',
          keyPoints: [
            'Modified rejection sampling scheme guaranteeing mathematical equivalence to target model output',
            'Adaptive speculation window adjusting K based on token acceptance rate'
          ]
        }
      ],
      benchmarks: [
        { name: 'Vector Search P99 (10M vectors)', value: '1.08 ms', comparison: '4.1x faster than brute force SIMD', unit: 'ms' },
        { name: 'Vector Recall @ Top-10', value: '98.7%', comparison: 'Near-lossless accuracy', unit: '%' },
        { name: 'LLM Token Throughput', value: '142 tok/s', comparison: '2.9x throughput vs static batching', unit: 'tokens/s' },
        { name: 'VRAM Cache Utilization', value: '94.2%', comparison: 'Reduced memory waste from 68% to 5.8%', unit: '%' }
      ],
      decisions: [
        {
          decision: 'HNSW Graph Index over Inverted File Index (IVF-Flat)',
          why: 'HNSW provides logarithmically bounded search hops and higher recall at ultra-low latencies (<1ms) compared to list-scanning inverted indexes.',
          tradeOff: 'Higher index build time and memory overhead for graph edge lists.'
        },
        {
          decision: 'PagedAttention Virtual Memory Management',
          why: 'Eliminates memory pre-allocation waste and enables seamless multi-turn session prefix caching across concurrent users.',
          tradeOff: 'Introduces minor lookup overhead in custom CUDA attention kernels to dereference page tables.'
        }
      ]
    }
  },
  {
    id: 'traffic-system',
    slug: 'traffic-system',
    systemId: 'SYS-03',
    name: 'Adaptive Real-Time Traffic System',
    tagline: 'Distributed Event-Driven Telemetry Stream Engine with Fault-Tolerant Processing',
    status: 'PRODUCTION',
    technologies: ['Apache Kafka', 'Go', 'Distributed Actors', 'WebSockets', 'Redis Cluster', 'Docker'],
    metrics: [
      { label: 'Concurrent Vehicles', value: '10,000+', detail: 'Active real-time GPS telemetry' },
      { label: 'Delivery Stability', value: '99.9%', detail: 'Under 3-node cluster chaos partition' },
      { label: 'Latency Improvement', value: '60%', detail: 'Bottleneck incident detection' },
      { label: 'Chaos Recovery Time', value: '< 2.0s', detail: 'Automated leader re-election' }
    ],
    problem:
      'Metropolitan transportation networks generate massive velocity geospatial telemetry. Centralized polling architectures experience severe lag, dropped data packets during peak congestion spikes, and single points of failure when ingest nodes crash.',
    architectureOverview:
      'Distributed event-driven architecture streaming GPS telemetry from 10,000+ simulated vehicles through partitioned Apache Kafka topic brokers, processed by stateful Go stream consumer workers with geohash-based spatial indexing, real-time congestion heat calculation, and dynamic traffic signal phase adaptation.',
    keyResult:
      'Delivered 99.9% packet delivery reliability under simulated 3-node cluster failover, reduced traffic incident detection latency by 60%, and recovered within 1.8 seconds during chaos testing.',
    route: '/systems/traffic-system',
    colorScheme: {
      primary: '#0EA5E9',
      secondary: '#38BDF8',
      glow: 'rgba(14, 165, 233, 0.15)',
      badge: 'border-sky-500/30 text-sky-400 bg-sky-500/10'
    },
    deepDive: {
      overview:
        'A high-reliability distributed event processing platform designed for high-density vehicle telematics, congestion prediction, and automated traffic light optimization across complex urban grid topologies.',
      architectureDiagram: {
        nodes: [
          { id: 'vehicles', name: '10K+ Vehicle Telemetry Sim', type: 'Ingress', description: 'Simulated fleet emitting timestamped GPS, velocity, heading, and acceleration packets every 100ms', latency: '5ms' },
          { id: 'gateway', name: 'Edge Ingestion Gateway', type: 'Gateway', description: 'Load-balanced lightweight Go ingest proxies validating schema and routing to Kafka partitions', latency: '2ms' },
          { id: 'kafka', name: 'Kafka Topic Cluster', type: 'Message Broker', description: '3-broker partitioned topic cluster with replication factor 3 and min.insync.replicas=2', latency: '4ms' },
          { id: 'streamWorkers', name: 'Distributed Stream Workers', type: 'Processing', description: 'Stateful consumer group computing sliding-window speed anomalies and spatial geohash clusters', latency: '8ms' },
          { id: 'redisState', name: 'Redis Spatial Cache', type: 'State Store', description: 'Geospatial index storing active vehicle coordinates with sub-millisecond radius search', latency: '1ms' },
          { id: 'signalController', name: 'Adaptive Signal Actuator', type: 'Control Loop', description: 'Actuation service adjusting green-light phase durations based on real-time queue density', latency: '12ms' }
        ],
        connections: [
          { from: 'vehicles', to: 'gateway', label: '10K/s UDP/Protobuf Stream' },
          { from: 'gateway', to: 'kafka', label: 'Partitioned Produce (Geohash Key)' },
          { from: 'kafka', to: 'streamWorkers', label: 'Parallel Consumer Group' },
          { from: 'streamWorkers', to: 'redisState', label: 'Atomic GEOADD & Density Update' },
          { from: 'streamWorkers', to: 'signalController', label: 'Congestion Threshold Triggers' }
        ]
      },
      sections: [
        {
          number: '01',
          title: 'Event Streaming & Partitioning Topology',
          content:
            'To maintain causality without global synchronization bottlenecks, GPS telemetry events are keyed by high-resolution Geohash-6 prefixes. This guarantees that all telemetry for adjacent city intersections consistently hashes to the exact same Kafka partition, enabling local stateful stream processing without expensive cross-worker distributed locks.',
          keyPoints: [
            'Zero data loss with ack=all and transactional producer offsets',
            'Partition-level spatial sharding ensuring strict chronological event ordering per urban sector',
            'Backpressure mitigation using circular ring buffers during traffic surge spikes'
          ]
        },
        {
          number: '02',
          title: 'Real-Time Spatial Anomaly & Congestion Detection',
          content:
            'Stream workers maintain sliding time-window aggregations (30-second and 2-minute rolling buffers) per road segment. Sudden drops in mean velocity coupled with sudden surges in spatial density immediately trigger congestion state machines, notifying downstream routing services and dynamic signal controllers.',
          keyPoints: [
            '60% reduction in incident detection latency (from ~4.2 mins in legacy systems to 18 seconds)',
            'Dynamic velocity delta thresholds accounting for time-of-day baseline variations',
            'Spatial clustering algorithms grouping multi-vehicle telemetry to filter out isolated stopping events'
          ]
        },
        {
          number: '03',
          title: 'Chaos Testing & 3-Node Failure Recovery',
          content:
            'The system was subjected to rigorous chaos engineering drills: randomly killing worker pods, inducing artificial 200ms network partitions, and terminating Kafka broker leaders during peak 10,000 vehicle loads. Automated rebalance protocols and replication configurations guaranteed continuous delivery stability of 99.9% with complete recovery in under 2 seconds.',
          keyPoints: [
            'Automated Kafka partition leader failover completed in < 1.8 seconds',
            'Idempotent consumers preventing duplicate metric double-counting on network retries',
            'Graceful degradation: workers continue localized heuristics if global coordinate cache is partitioned'
          ]
        }
      ],
      benchmarks: [
        { name: 'Active Telemetry Streams', value: '10,000+ vehicles', comparison: 'Simulated continuous GPS emitters', unit: 'nodes' },
        { name: 'Message Delivery Stability', value: '99.9%', comparison: 'Maintained during active node kill chaos', unit: '%' },
        { name: 'Incident Detection SLA', value: '< 18 seconds', comparison: '60% faster than baseline', unit: 'sec' },
        { name: 'Failover Recovery Duration', value: '1.82 s', comparison: 'Automated leader failover', unit: 'sec' }
      ],
      decisions: [
        {
          decision: 'Spatial Geohash Keying for Kafka Partitions',
          why: 'Ensures vehicles within the same geographic grid tile are handled by the same worker instance, enabling in-memory spatial aggregation without inter-node RPCs.',
          tradeOff: 'Potential partition skew during downtown rush hours, mitigated by dynamic sub-partitioning on hotspot sectors.'
        },
        {
          decision: 'Redis Geospatial Indices for Ephemeral State',
          why: 'Provides sub-millisecond GEOADD and GEORADIUS lookups for live dispatch and vehicle proximity queries.',
          tradeOff: 'Requires strict TTL management and memory sizing to prevent memory exhaustion from stale vehicle disconnects.'
        }
      ]
    }
  }
];
