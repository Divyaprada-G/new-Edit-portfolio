import { BuildingLogMilestone } from '../types';

export const BUILDING_LOG: BuildingLogMilestone[] = [
  {
    id: 'log-01',
    year: '2026',
    quarter: 'Q1',
    title: 'Titan TSDB: Gorilla XOR Bitstream Compression Kernel Optimized',
    category: 'SYSTEMS',
    technicalDetail:
      'Implemented custom bit-level IEEE 754 floating point XOR compressor with delta-of-delta timestamp encoding in C++20. Benchmark showed 11.4x compression ratio, reducing storage to 1.37 bytes/point with zero heap allocation per write.',
    evidence: '1.2M+ writes/sec sustained on 8 vCPUs with sub-2.4ms P99 query latency on 10M points.',
    projectSlug: 'titan-tsdb',
    tags: ['C++20', 'Gorilla Compression', 'SIMD', 'Low-Level Storage']
  },
  {
    id: 'log-02',
    year: '2026',
    quarter: 'Q1',
    title: 'Selected as Google Student Ambassador 2026',
    category: 'LEADERSHIP',
    technicalDetail:
      'Appointed to lead technical developer initiatives, delivering hands-on architecture labs across Google Cloud Platform, Gemini API multimodal integration, and modern web systems for over 400+ student engineers.',
    evidence: 'Facilitated 6+ technical workshops, cloud sprint bootcamps, and developer study jams.',
    tags: ['Google Cloud', 'GSA 2026', 'Technical Leadership', 'Mentorship']
  },
  {
    id: 'log-03',
    year: '2025',
    quarter: 'Q4',
    title: 'Adaptive Traffic Stream: Kafka Geospatial Partitioning & Chaos Testing',
    category: 'SYSTEMS',
    technicalDetail:
      'Engineered a distributed event-driven engine processing 10,000+ simulated GPS vehicles. Implemented geohash-based Kafka partitioning for zero-lock spatial consumer processing and verified 99.9% delivery under 3-node cluster chaos partition.',
    evidence: '60% faster incident detection; 1.8s automated leader failover verified under pod kill chaos.',
    projectSlug: 'traffic-system',
    tags: ['Apache Kafka', 'Go', 'Distributed Systems', 'Chaos Engineering']
  },
  {
    id: 'log-04',
    year: '2025',
    quarter: 'Q3',
    title: 'Algorithmic Milestone: LeetCode Global Rank 600+ & 630+ Hard Problems',
    category: 'ALGORITHMS',
    technicalDetail:
      'Solved 2,750+ algorithmic problems spanning segment trees, bit manipulation, Dinic network flows, lock-free concurrent queues, and dynamic programming optimization on LeetCode and CodeChef.',
    evidence: 'Global Rank 600+, 2750+ total solved, 630+ Hard problems verified.',
    tags: ['Algorithms', 'Data Structures', 'LeetCode', 'Competitive Programming']
  },
  {
    id: 'log-05',
    year: '2025',
    quarter: 'Q2',
    title: 'SIMD AVX-512 Vector Search & PagedAttention Virtual KV Cache Server',
    category: 'SYSTEMS',
    technicalDetail:
      'Built a low-latency vector retrieval index with Hierarchical Navigable Small World (HNSW) graphs and 64-byte Product Quantization (PQ), achieving 1.08ms P99 latency across 10M 1536-dimensional embeddings with 98.7% recall.',
    evidence: 'Boosted VRAM cache efficiency from 32% to 94.2% and achieved 142 tokens/sec throughput.',
    projectSlug: 'vector-inference',
    tags: ['C++20', 'CUDA', 'AVX-512', 'HNSW', 'PagedAttention']
  },
  {
    id: 'log-06',
    year: '2024',
    quarter: 'Q4',
    title: 'Smart India Hackathon (SIH) National Finalist (Top 10)',
    category: 'LEADERSHIP',
    technicalDetail:
      'Selected among top teams nationwide for designing an emergency telemetry routing system with resilient offline mesh sync and real-time incident coordination.',
    evidence: 'Presented architecture and live system demo to national panel of senior engineering jurors.',
    tags: ['Hackathon', 'System Design', 'Real-Time Telemetry', 'Finalist']
  },
  {
    id: 'log-07',
    year: '2024',
    quarter: 'Q3',
    title: 'SWE Instructor Appointment at HMS Polytechnic',
    category: 'LEADERSHIP',
    technicalDetail:
      'Authored hands-on curriculum and designed lab exercises on Advanced C++ Memory Management, Pointer Arithmetic, Concurrency, and Operating System primitives for undergraduate software engineering students.',
    evidence: 'Trained 120+ students in systems programming, data structures, and debugging with GDB/Valgrind.',
    tags: ['Education', 'C++', 'OS Primitives', 'Teaching']
  }
];
