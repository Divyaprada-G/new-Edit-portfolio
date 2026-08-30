import { TechStackDnaItem } from '../types';

export const TECH_STACK_DNA: TechStackDnaItem[] = [
  {
    name: 'Java (Multithreading, Streams, Concurrency)',
    category: 'LANGUAGES',
    level: 'Core Mastery',
    purpose: 'Concurrent system workflows, executor thread pools, functional stream transformations, and JVM memory modeling.',
    connectedProjects: [
      { slug: 'traffic-system', name: 'Adaptive Traffic Stream', implementationRole: 'Concurrent sliding-window metrics pipeline, parallel stream transformations, and synchronized worker pools' },
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'Benchmark ingestion harnesses, thread-safe ingestion queues, and JVM-to-native benchmark bridges' }
    ],
    verification: 'Delivered college-level coursework in Java Concurrency and multithreaded design patterns to 60+ engineering students.'
  },
  {
    name: 'Python & AI/DS Pipelines',
    category: 'LANGUAGES',
    level: 'Core Mastery',
    purpose: 'Machine learning runtimes, vector arithmetic evaluation, asynchronous I/O (asyncio), and high-throughput data processing.',
    connectedProjects: [
      { slug: 'vector-inference', name: 'Vector & LLM Runtime', implementationRole: 'PyTorch embedding pipeline evaluation, FastAPI async orchestration, NumPy vector baseline comparisons' }
    ],
    verification: 'Engineered automated embedding validation harnesses comparing SIMD kernels with NumPy/PyTorch baselines.'
  },
  {
    name: 'C++ / Low-Level Systems',
    category: 'LANGUAGES',
    level: 'Core Mastery',
    purpose: 'Zero-allocation storage engines, lock-free data structures, and SIMD-vectorized arithmetic kernels.',
    connectedProjects: [
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'Lock-free skiplist MemTable, custom Arena memory slabs, Gorilla XOR bitstream encoder' },
      { slug: 'vector-inference', name: 'Vector & LLM Runtime', implementationRole: 'AVX-512 vector distance kernels, HNSW skip-graph memory layout, 64-byte Product Quantization' }
    ],
    verification: 'Zero heap churn on write paths; 1.2M+ writes/sec on 8 vCPUs.'
  },
  {
    name: 'SQL & Relational DBMS Internals',
    category: 'SYSTEMS & STORAGE',
    level: 'Core Mastery',
    purpose: 'ACID transaction semantics, query execution plan optimization, indexing strategies (B-Tree/GIN), and CTEs.',
    connectedProjects: [
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'SQL-like declarative time-series dialect parser, time-bucketed aggregation plans, tag indexing' },
      { slug: 'traffic-system', name: 'Adaptive Traffic Stream', implementationRole: 'Relational spatial schemas, metadata indexing, cut backend query latencies by 35%' }
    ],
    verification: 'Taught Relational DBMS, query execution tuning, and normal forms at HMS Polytechnic.'
  },
  {
    name: 'Go (Golang)',
    category: 'LANGUAGES',
    level: 'High Proficiency',
    purpose: 'Concurrent high-throughput microservices, distributed stream workers, and telemetry proxies.',
    connectedProjects: [
      { slug: 'traffic-system', name: 'Adaptive Traffic Stream', implementationRole: 'Distributed Kafka consumer workers, sliding-window spatial aggregations, WebSocket push servers' },
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'gRPC ingestion gateway, distributed query coordinator, cluster metadata management' }
    ],
    verification: 'Maintained 99.9% packet delivery across 10,000+ continuous GPS emitters.'
  },
  {
    name: 'SIMD Vectorization (AVX-512 / FMA)',
    category: 'ALGORITHMS & OPT',
    level: 'Advanced',
    purpose: 'Hardware-accelerated parallel float arithmetic and high-density metric aggregations.',
    connectedProjects: [
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'AVX-512 scan loops executing sum/rate/p99 aggregations directly over compressed chunks' },
      { slug: 'vector-inference', name: 'Vector & LLM Runtime', implementationRole: '16-float parallel FMA cosine & Euclidean distance kernels for 1536-dim embeddings' }
    ],
    verification: '1.08ms P99 retrieval on 10M embeddings; 6.2x faster range scans.'
  },
  {
    name: 'Apache Kafka & Event Streaming',
    category: 'DISTRIBUTED & CLOUD',
    level: 'Production-Grade',
    purpose: 'Partitioned pub-sub messaging, backpressure handling, and fault-tolerant stream topologies.',
    connectedProjects: [
      { slug: 'traffic-system', name: 'Adaptive Traffic Stream', implementationRole: 'Geohash spatial partition keying, idempotent producer semantics, min.insync.replicas=2' }
    ],
    verification: 'Sub-2s automated broker partition failover during chaos engineering drills.'
  },
  {
    name: 'Redis Cluster & In-Memory Geospatial',
    category: 'SYSTEMS & STORAGE',
    level: 'High Proficiency',
    purpose: 'Sub-millisecond state caching, geospatial coordinate indexing, and atomic rate limiting.',
    connectedProjects: [
      { slug: 'traffic-system', name: 'Adaptive Traffic Stream', implementationRole: 'Atomic GEOADD and GEORADIUS proximity lookups for live vehicle tracking' }
    ],
    verification: 'Sub-millisecond proximity queries across 10,000 active vehicle coordinates.'
  },
  {
    name: 'gRPC & Protocol Buffers',
    category: 'DISTRIBUTED & CLOUD',
    level: 'High Proficiency',
    purpose: 'Low-overhead inter-service communication with strongly-typed binary serialization.',
    connectedProjects: [
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'Streaming ingestion RPCs and multi-node query federation protocols' },
      { slug: 'vector-inference', name: 'Vector & LLM Runtime', implementationRole: 'Streaming token generation and batch vector query endpoints' }
    ],
    verification: 'Reduced serialization latency by 70% compared to JSON/REST baselines.'
  },
  {
    name: 'CUDA & PagedAttention GPU Kernels',
    category: 'SYSTEMS & STORAGE',
    level: 'Working Knowledge & Application',
    purpose: 'Non-contiguous GPU virtual memory allocation and parallel matrix attention computation.',
    connectedProjects: [
      { slug: 'vector-inference', name: 'Vector & LLM Runtime', implementationRole: 'Virtual block table translation for KV cache tensors and speculative draft verification' }
    ],
    verification: '94.2% VRAM utilization vs 32% under contiguous pre-allocation.'
  },
  {
    name: 'Algorithms & Advanced Data Structures',
    category: 'ALGORITHMS & OPT',
    level: 'Competitive Top Tier',
    purpose: 'First-principles complexity optimization, lock-free skiplists, spatial indexing, and graph traversal.',
    connectedProjects: [
      { slug: 'titan-tsdb', name: 'Titan TSDB', implementationRole: 'CAS lock-free skiplist with hazard pointers, roaring bitmaps for tag inverted indexing' },
      { slug: 'vector-inference', name: 'Vector & LLM Runtime', implementationRole: 'Multi-layer HNSW graph construction with heuristic edge pruning' }
    ],
    verification: 'LeetCode Global Rank 600+, 2750+ Solved, 630+ Hard problems.'
  }
];
