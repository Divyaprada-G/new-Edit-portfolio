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
    title: 'Languages',
    description: 'Core systems programming, object-oriented design, concurrency primitives, and query languages.',
    items: [
      { name: 'Java', level: 'CORE', focus: 'Multithreading, Concurrency Utilities (Locks, Executors), Java Streams API, JVM Memory Model, Netty' },
      { name: 'Python', level: 'CORE', focus: 'AsyncIO, NumPy, Vector Pipelines, Machine Learning Integration & Systems Scripting' },
      { name: 'C++', level: 'CORE', focus: 'Modern C++, STL, SIMD Intrinsics, Memory Arenas, Pointer Arithmetic & Optimization' },
      { name: 'SQL', level: 'CORE', focus: 'Complex Queries, Index Optimization, CTEs, ACID Transactions, MVCC & Query Plans' }
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'High-throughput server architectures, microservices, and reliable API contracts.',
    items: [
      { name: 'REST APIs', level: 'CORE', focus: 'Stateless API Design, HTTP/2 Semantics, Error Handling & Idempotency' },
      { name: 'Microservices', level: 'CORE', focus: 'Service Decomposition, Boundary Isolation, Contract-First Architecture' },
      { name: 'Concurrency', level: 'CORE', focus: 'Lock-Free Structures, Race Condition Prevention, Thread Pools, Mutexes' },
      { name: 'Rate Limiting', level: 'ADVANCED', focus: 'Token Bucket, Leaky Bucket, Sliding-Window Log Algorithms' },
      { name: 'API Design', level: 'CORE', focus: 'Predictable Resource Schemas, Pagination, Versioning & Filtering' }
    ]
  },
  {
    title: 'Distributed Systems',
    description: 'Scalable event streaming, cache partitioning, and distributed state coordination.',
    items: [
      { name: 'Redis', level: 'CORE', focus: 'In-Memory Caching, Geospatial Indexing, Pub/Sub, Eviction Policies' },
      { name: 'Apache Kafka', level: 'CORE', focus: 'Partition Keys, Consumer Groups, Dead-Letter Queues, Log Compaction' },
      { name: 'Real-Time Stream Processing', level: 'CORE', focus: 'Sliding Window Aggregation, Out-of-Order Events, State Recovery' },
      { name: 'Consistent Hashing', level: 'ADVANCED', focus: 'Virtual Nodes, Minimal Key Redistribution, Ring Topology' }
    ]
  },
  {
    title: 'AI Infrastructure',
    description: 'High-performance vector search, LLM inference acceleration, and retrieval runtimes.',
    items: [
      { name: 'LLM Integrations', level: 'CORE', focus: 'Streaming Tokens, Function Calling, Prompt Engineering & Guardrails' },
      { name: 'Gemini API & Vertex AI', level: 'CORE', focus: 'Server-Side Multimodal Workflows, Embeddings, Grounding' },
      { name: 'Claude API & OpenAI SDK', level: 'CORE', focus: 'Model Orchestration, Structured JSON Output, Retry Policies' },
      { name: 'LangChain', level: 'CORE', focus: 'Retrieval Chains, Prompt Templates, Custom Tool Interfacing' },
      { name: 'Custom RAG Systems', level: 'CORE', focus: 'Vector Ingestion, Hybrid Search, Chunking, Re-Ranking Pipelines' }
    ]
  },
  {
    title: 'Databases',
    description: 'Relational query optimization, document modeling, and big data analytical queries.',
    items: [
      { name: 'MySQL', level: 'CORE', focus: 'Composite B-Tree Indexes, N+1 Query Elimination, Join Optimization, EXPLAIN' },
      { name: 'MongoDB', level: 'ADVANCED', focus: 'Document Schemas, Compound Indexes, Aggregation Framework' },
      { name: 'BigQuery', level: 'ADVANCED', focus: 'Columnar Data Warehousing, Partitioned & Clustered Tables, Analytical SQL' }
    ]
  },
  {
    title: 'System Design',
    description: 'First-principles mechanical sympathy, high/low level design, and scalability trade-offs.',
    items: [
      { name: 'LLD & HLD', level: 'CORE', focus: 'Clean Architecture, Modular Component Boundaries, Sequence Diagrams' },
      { name: 'SOLID Principles', level: 'CORE', focus: 'Maintainable, Extensible & Decoupled Object-Oriented Code' },
      { name: 'Cache Locality', level: 'CORE', focus: 'Row-to-Columnar Memory Layouts, CPU L1/L2/L3 Cache Alignment' },
      { name: 'Scalability & CAP Theorem', level: 'CORE', focus: 'Horizontal Scaling, Consistency vs. Availability, Partition Tolerance' }
    ]
  },
  {
    title: 'Tools & DevOps',
    description: 'Containerization, Linux environment mastery, automated test validation, and CI/CD.',
    items: [
      { name: 'Docker', level: 'CORE', focus: 'Containerization, Multi-Stage Dockerfiles, Minimal Runtimes' },
      { name: 'Kubernetes', level: 'ADVANCED', focus: 'Pods, Deployments, Services, ConfigMaps, Container Orchestration' },
      { name: 'Git & GitHub Actions', level: 'CORE', focus: 'Version Control, Branching Strategies, Automated CI/CD Pipelines' },
      { name: 'Linux', level: 'CORE', focus: 'Shell Scripting, POSIX Commands, File Permissions, Process Diagnostics' },
      { name: 'Postman & CI/CD', level: 'CORE', focus: 'API Integration Testing, Regression Gates, Continuous Delivery' }
    ]
  }
];
