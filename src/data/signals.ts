import { EngineeringSignal, SignalEssay } from '../types';

export const ENGINEERING_SIGNALS: EngineeringSignal[] = [
  {
    id: 'sig-leetcode-rank',
    metric: 'Global Rank',
    value: '600+',
    sublabel: 'LeetCode Worldwide Competitive Standing',
    category: 'LEETCODE',
    verified: true,
    detail: 'Placed in the top tier globally among hundreds of thousands of active competitive programmers worldwide.'
  },
  {
    id: 'sig-problems-total',
    metric: 'Problems Solved',
    value: '2,750+',
    sublabel: 'Algorithmic & Data Structure Challenges',
    category: 'LEETCODE',
    verified: true,
    detail: 'Extensive algorithmic repertoire spanning dynamic programming, graph theory, trees, heaps, segment trees, and bit manipulation.'
  },
  {
    id: 'sig-hard-problems',
    metric: 'Hard Problems',
    value: '630+',
    sublabel: 'Complex Asymptotic & Mathematical Problems',
    category: 'LEETCODE',
    verified: true,
    detail: 'Mastery over advanced DP state transitions, max-flow/min-cut, monotonic queues, binary lifting, and Trie architectures.'
  },
  {
    id: 'sig-medium-problems',
    metric: 'Medium Problems',
    value: '1,400+',
    sublabel: 'Core System & Algorithmic Patterns',
    category: 'LEETCODE',
    verified: true,
    detail: 'Comprehensive fluency across two-pointers, sliding windows, topological sort, union-find, and BFS/DFS state search.'
  },
  {
    id: 'sig-sih-top10',
    metric: 'Hackathon Finish',
    value: 'Top 10',
    sublabel: 'Smart India Internal Hackathon 2025',
    category: 'HACKATHON',
    verified: true,
    detail: 'Engineered a fault-tolerant emergency telemetry and rescue coordination system under strict 36-hour sprint constraints.'
  },
  {
    id: 'sig-mentorship',
    metric: 'Engineers Mentored',
    value: '60+',
    sublabel: 'Classroom & Laboratory Instruction',
    category: 'MENTORSHIP',
    verified: true,
    detail: 'Taught foundational C++, data structures, object-oriented design, and complexity analysis at HMS Polytechnic.'
  },
  {
    id: 'sig-gsa-2026',
    metric: 'Leadership Track',
    value: 'GSA 2026',
    sublabel: 'Google Student Ambassador',
    category: 'LEADERSHIP',
    verified: true,
    detail: 'Selected to champion developer growth, cloud computing literacy, and open technology architectures across student cohorts.'
  },
  {
    id: 'sig-cloud-arcade',
    metric: 'Cloud Enablement',
    value: 'Arcade Facilitator',
    sublabel: 'Google Cloud Arcade Program',
    category: 'COMMUNITY',
    verified: true,
    detail: 'Guided 100+ peers through hands-on cloud labs covering Kubernetes, IAM security, VPC networks, and serverless runtimes.'
  },
  {
    id: 'sig-open-source',
    metric: 'Ecosystem',
    value: 'OS Connect 2026',
    sublabel: 'Open Source Connect India',
    category: 'COMMUNITY',
    verified: true,
    detail: 'Active contributor and speaker on low-latency systems, memory safety, and high-throughput data pipelines.'
  }
];

export const SIGNALS: SignalEssay[] = [
  {
    id: 'signal-tsdb-lockfree',
    title: 'Why High-Velocity Time-Series Storage Engines Favor Lock-Free Skiplists Over B-Trees',
    date: '2026',
    readTime: '6 min read',
    category: 'STORAGE SYSTEMS',
    summary:
      'Analyzing concurrency bottlenecks, CPU cache lines, and write amplification when absorbing 1,000,000+ metrics per second.',
    content:
      'When engineering storage engines for high-frequency telemetry streams, the fundamental mechanical constraint is write amplification and mutex contention. Standard B-Tree indices require structural node splits that traverse up the tree, necessitating coarse-grained page latching.\n\nUnder high-concurrency ingestion where 32 or 64 worker threads write simultaneous data points, mutex locks degrade throughput into CPU spin-locks. In contrast, an in-memory lock-free skiplist utilizes atomic Compare-And-Swap (CAS) pointers paired with hazard pointers or epoch-based memory reclamation.\n\nFurthermore, appending sequential points to an immutable chunk format with Gorilla bit-level compression allows memory bandwidth to become the only real bottleneck rather than disk I/O or lock contention. By designing around the mechanical sympathy of modern multicore architectures, we achieve predictable sub-millisecond latencies under sustained millions-of-writes-per-second load.',
    keyTakeaways: [
      'Lock-free skiplists eliminate mutex contention during multi-threaded writes',
      'Immutable columnar chunking avoids write amplification inherent to standard B-Trees',
      'Epoch-based memory reclamation ensures deterministic zero-pause memory cleanup'
    ],
    tags: ['Storage Engines', 'Lock-Free', 'C++20', 'Concurrency', 'TSDB']
  },
  {
    id: 'signal-simd-vector-search',
    title: 'Vector SIMD AVX-512 FMA: Accelerating Cosine Similarity to Sub-Millisecond Latencies',
    date: '2026',
    readTime: '5 min read',
    category: 'AI INFRASTRUCTURE',
    summary:
      'How 512-bit wide vector registers and hardware Fused Multiply-Add instructions eliminate the memory bus bottleneck in dense embedding search.',
    content:
      'Calculating cosine similarity or Euclidean distance across high-dimensional embeddings (e.g. 1536-dimensional float32 arrays) is computationally memory-bound when executed with scalar CPU instructions.\n\nWith AVX-512 FMA instructions (_mm512_fmadd_ps), a single CPU cycle executes 16 simultaneous floating-point multiply-accumulate operations per core. By unrolling loop iterations to process 64 floats per unrolled block, we saturate the CPU execution ports while eliminating instruction-cache misses.\n\nWhen combined with Product Quantization (PQ-64) lookup tables for coarse filtering, exact re-ranking across top candidate sets takes under 0.84ms on commodity hardware, matching or exceeding GPU throughput for smaller latency-critical batch sizes.',
    keyTakeaways: [
      'AVX-512 executes 16 float32 operations per clock cycle per vector register',
      'Manual loop unrolling maximizes CPU pipeline depth and branch predictor accuracy',
      'PQ-64 coarse filtering paired with SIMD exact re-ranking achieves sub-1.1ms P99 latency'
    ],
    tags: ['SIMD', 'AVX-512', 'Vector Search', 'C++', 'Hardware Acceleration']
  },
  {
    id: 'signal-paged-attention',
    title: 'Virtual Memory Paging in GPU KV Caches: How PagedAttention Eliminates VRAM Waste',
    date: '2025',
    readTime: '7 min read',
    category: 'LLM INFERENCE',
    summary:
      'Borrowing OS virtual memory concepts to solve the 60-80% memory fragmentation crisis in modern large language model serving runtimes.',
    content:
      'In naive LLM inference engines, the Key-Value (KV) cache for attention activations is pre-allocated as a continuous memory buffer scaled to the maximum context length (e.g., 4096 or 8192 tokens). Because user prompts vary dramatically in length, up to 80% of allocated GPU VRAM is completely wasted.\n\nPagedAttention borrows the classic operating system concept of virtual memory and page tables. It partitions the KV cache into fixed-size physical blocks (e.g. 16 tokens per page) that do not need to reside contiguously in VRAM.\n\nA dynamic block manager assigns physical blocks on-demand during token generation iterations. This eliminates external fragmentation, reduces internal fragmentation to within the last block, and enables Copy-on-Write sharing for identical prompt prefixes across parallel requests, tripling effective serving throughput.',
    keyTakeaways: [
      'Virtual memory page tables eliminate contiguous GPU memory pre-allocation waste',
      'Copy-on-Write KV sharing accelerates multi-turn conversations and shared system prompts',
      'Increases concurrent batch sizes by up to 3x within identical GPU hardware limits'
    ],
    tags: ['PagedAttention', 'LLM Serving', 'CUDA', 'Virtual Memory', 'VRAM Efficiency']
  },
  {
    id: 'signal-geospatial-kafka',
    title: 'Spatial Sharding in Apache Kafka: Zero-Lock Aggregations for High-Density Telemetry',
    date: '2025',
    readTime: '5 min read',
    category: 'DISTRIBUTED STREAMS',
    summary:
      'Using Geohash-6 partition keys to enforce spatial locality, enabling stateful stream processing without inter-node distributed locks.',
    content:
      'Streaming 10,000+ simultaneous vehicle telemetry feeds into a distributed event broker creates severe scalability bottlenecks if spatial proximity calculations require cross-partition or cross-node coordination.\n\nBy keying Kafka producer messages with Geohash-6 prefixes, all GPS emitters operating within the same geographical grid partition naturally route to the same dedicated broker partition and consumer thread.\n\nThis spatial affinity allows stream workers to maintain local in-memory sliding windows (computing rolling average velocities and localized congestion indices) without acquiring distributed Redis locks or issuing cross-worker RPCs, achieving 99.9% packet delivery stability.',
    keyTakeaways: [
      'Geohash partition keys ensure spatial locality directly on Kafka brokers',
      'Thread-local stateful windowing eliminates distributed locking overhead',
      'Provides predictable < 2s automated failover during node termination drills'
    ],
    tags: ['Apache Kafka', 'Distributed Systems', 'Go', 'Stream Processing', 'Geospatial']
  },
  {
    id: 'signal-algorithmic-intuition',
    title: 'Algorithmic Intuition: Key Insights From Solving 2,750+ Algorithmic Challenges',
    date: '2024 - 2025',
    readTime: '8 min read',
    category: 'ALGORITHMS & DATA STRUCTURES',
    summary:
      'Distilling patterns from 2,750+ problems solved (630+ Hard, 1,400+ Medium) and Global Rank 600+ into fundamental state space reduction frameworks.',
    content:
      'Solving 2,750+ algorithmic problems across LeetCode including 630+ Hard and 1,400+ Medium challenges (achieving a Global Rank of 600+) taught me that advanced competitive programming is rarely about memorizing individual solution tricks—it is about recognizing underlying invariant structures.\n\nEvery algorithmic problem reduces to either state space reduction (binary search, two pointers, greedy choice), search pruning (meet-in-the-middle, branch-and-bound, A*), or overlapping subproblem decomposition (dynamic programming, memoization tables).\n\nWhen you transition from writing algorithmic solutions to engineering real distributed systems, this mindset becomes invaluable: recognizing where state can be partitioned, where locks can be bypassed, and how data layouts can be organized to eliminate redundant work.',
    keyTakeaways: [
      'Master fundamental invariants: monotonic queues, segment trees, and topological states',
      'Think in state space reductions rather than surface-level problem syntax',
      'Algorithmic rigor directly translates into low-latency, zero-alloc systems architecture'
    ],
    tags: ['LeetCode', 'Competitive Programming', 'Algorithms', 'Data Structures', 'Rank 600+']
  }
];
