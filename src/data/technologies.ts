export interface TechCategory {
  title: string;
  description: string;
  items: {
    name: string;
    level: 'CORE' | 'ADVANCED' | 'FLUENT';
    focus: string;
  }[];
}

export const TECHNOLOGIES: TechCategory[] = [
  {
    title: 'Languages & Core Systems',
    description: 'Low-level memory control, systems programming, and high-concurrency runtimes.',
    items: [
      { name: 'Java', level: 'CORE', focus: 'Multithreading, Java Streams API, Concurrency Utilities (Executors, Locks), JVM Memory Model' },
      { name: 'Python', level: 'CORE', focus: 'AsyncIO, NumPy, Pandas, PyTorch / ML Pipelines, Backend Scripting & Automation' },
      { name: 'C++', level: 'CORE', focus: 'C++20, STL, Lock-free Concurrency, SIMD Intrinsics, Memory Arenas' },
      { name: 'SQL', level: 'CORE', focus: 'Complex Queries, Index Optimization, CTEs, ACID Transactions, MVCC & Query Plans' },
      { name: 'Go (Golang)', level: 'ADVANCED', focus: 'Goroutines, Channels, gRPC, Network I/O, Distributed Actors' },
      { name: 'TypeScript / Node.js', level: 'ADVANCED', focus: 'Async Runtimes, Event Loops, Modern Full-Stack Systems' }
    ]
  },
  {
    title: 'Distributed Systems & Data Infrastructure',
    description: 'High-throughput pipelines, stream processing, message queues, and custom storage engines.',
    items: [
      { name: 'Apache Kafka', level: 'CORE', focus: 'Partitioning, Consumer Groups, Replication, Exactly-Once Semantics' },
      { name: 'Time-Series Engines (TSDB)', level: 'CORE', focus: 'Gorilla Compression, Skiplist MemTables, WAL, Inverted Index' },
      { name: 'Redis Cluster', level: 'CORE', focus: 'Geospatial Indexing, Pub/Sub, Distributed Caching, Memory Policies' },
      { name: 'PostgreSQL', level: 'ADVANCED', focus: 'Schema Design, Connection Pooling, Partitioning, Query Execution Plans' },
      { name: 'gRPC & Protocol Buffers', level: 'CORE', focus: 'Zero-Copy Streaming, Binary Serialization, Multiplexed Transport' }
    ]
  },
  {
    title: 'AI Infrastructure & High-Performance Compute',
    description: 'Vector embeddings, nearest neighbor search algorithms, and LLM serving runtime mechanics.',
    items: [
      { name: 'HNSW Graph Indexing', level: 'CORE', focus: 'Hierarchical Navigable Small World, Heuristic Pruning, Recall Opt' },
      { name: 'Product Quantization (PQ)', level: 'CORE', focus: 'Sub-space Vector Compression, Asymmetric Distance Tables' },
      { name: 'SIMD AVX-512 / AVX2', level: 'CORE', focus: 'Vectorized Cosine Similarity, Bit-packing, Vector Math Acceleration' },
      { name: 'PagedAttention & Continuous Batching', level: 'ADVANCED', focus: 'Virtual Memory KV Cache, Iteration-Level Scheduling' },
      { name: 'CUDA & GPU Compute Concepts', level: 'ADVANCED', focus: 'Memory Bandwidth Bottlenecks, Kernel Launch, Warp Divergence' }
    ]
  },
  {
    title: 'Cloud, Reliability & Developer Tooling',
    description: 'Containerization, chaos testing, cloud infrastructure, and CI/CD pipelines.',
    items: [
      { name: 'Google Cloud Platform (GCP)', level: 'CORE', focus: 'Cloud Run, VPC, IAM Least-Privilege, Pub/Sub, Cloud Storage' },
      { name: 'Docker & Containers', level: 'CORE', focus: 'Multi-stage Builds, Minimal Distroless Containers, Resource Limits' },
      { name: 'Git & Linux Internals', level: 'CORE', focus: 'POSIX APIs, Async I/O (epoll/io_uring), Process Lifecycle, Profiling' },
      { name: 'Chaos Engineering', level: 'ADVANCED', focus: 'Network Partition Sim, Node Kill Drills, Leader Election Resilience' }
    ]
  }
];
