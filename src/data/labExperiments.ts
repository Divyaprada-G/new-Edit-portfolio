export interface LabExperiment {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  learningGoal: string;
  parameters: {
    key: string;
    label: string;
    type: 'slider' | 'select' | 'toggle';
    min?: number;
    max?: number;
    step?: number;
    options?: { label: string; value: string }[];
    defaultValue: number | string | boolean;
  }[];
}

export const LAB_EXPERIMENTS: LabExperiment[] = [
  {
    id: 'cache-replacement',
    name: 'Cache Eviction Heuristics (LRU vs LFU vs ARC)',
    category: 'Memory & Storage Systems',
    badge: 'INTERACTIVE SIMULATION',
    description:
      'Simulate memory page hits, misses, and eviction policies under bursty zipfian and sequential scan memory access patterns.',
    learningGoal:
      'Understand how scan-resistance in Adaptive Replacement Cache (ARC) outperforms naive Least Recently Used (LRU) during heavy batch analytics.',
    parameters: [
      {
        key: 'algorithm',
        label: 'Eviction Algorithm',
        type: 'select',
        options: [
          { label: 'LRU (Least Recently Used)', value: 'LRU' },
          { label: 'LFU (Least Frequently Used)', value: 'LFU' },
          { label: 'ARC (Adaptive Replacement)', value: 'ARC' },
          { label: 'FIFO (First In First Out)', value: 'FIFO' }
        ],
        defaultValue: 'LRU'
      },
      {
        key: 'cacheCapacity',
        label: 'Cache Slot Capacity',
        type: 'slider',
        min: 4,
        max: 16,
        step: 1,
        defaultValue: 8
      },
      {
        key: 'workload',
        label: 'Access Pattern Workload',
        type: 'select',
        options: [
          { label: 'Zipfian (80/20 Hot-Key Skew)', value: 'ZIPFIAN' },
          { label: 'Sequential Scan (Database Table Scan)', value: 'SCAN' },
          { label: 'Temporal Loop (Repeated Sequence)', value: 'LOOP' }
        ],
        defaultValue: 'ZIPFIAN'
      }
    ]
  },
  {
    id: 'rate-limiter',
    name: 'Distributed Rate Limiting (Token Bucket vs Leaky Bucket)',
    category: 'Network & API Ingress',
    badge: 'INTERACTIVE CONCEPT',
    description:
      'Visualize burst tolerance, token refill rates, and request dropping behaviors under high-velocity incoming traffic spikes.',
    learningGoal:
      'Explore the trade-offs between instantaneous burst handling (Token Bucket) vs smooth steady output pacing (Leaky Bucket).',
    parameters: [
      {
        key: 'algorithm',
        label: 'Limiter Algorithm',
        type: 'select',
        options: [
          { label: 'Token Bucket (Burst Tolerant)', value: 'TOKEN_BUCKET' },
          { label: 'Leaky Bucket (Constant Rate)', value: 'LEAKY_BUCKET' },
          { label: 'Fixed Window Counter', value: 'FIXED_WINDOW' }
        ],
        defaultValue: 'TOKEN_BUCKET'
      },
      {
        key: 'bucketCapacity',
        label: 'Burst Capacity (Tokens)',
        type: 'slider',
        min: 5,
        max: 30,
        step: 1,
        defaultValue: 15
      },
      {
        key: 'refillRate',
        label: 'Refill Rate (tokens/sec)',
        type: 'slider',
        min: 1,
        max: 10,
        step: 1,
        defaultValue: 4
      }
    ]
  },
  {
    id: 'dynamic-batching',
    name: 'Continuous Dynamic Batching & GPU Queue Scheduling',
    category: 'AI Infrastructure',
    badge: 'INTERACTIVE CONCEPT',
    description:
      'Model request arrival distributions, token latency penalties, and GPU memory saturation when scheduling variable-length LLM generation tasks.',
    learningGoal:
      'Observe why iteration-level continuous batching eliminates idle GPU cores compared to naive static batching.',
    parameters: [
      {
        key: 'schedulingMode',
        label: 'Batching Strategy',
        type: 'select',
        options: [
          { label: 'Continuous Dynamic Batching', value: 'CONTINUOUS' },
          { label: 'Static Batching (Wait for Full Batch)', value: 'STATIC' },
          { label: 'Naive First-Come First-Served', value: 'FCFS' }
        ],
        defaultValue: 'CONTINUOUS'
      },
      {
        key: 'maxBatchSize',
        label: 'Max GPU Batch Slots',
        type: 'slider',
        min: 4,
        max: 16,
        step: 2,
        defaultValue: 8
      },
      {
        key: 'arrivalRate',
        label: 'Request Arrival Rate',
        type: 'slider',
        min: 1,
        max: 8,
        step: 1,
        defaultValue: 4
      }
    ]
  }
];
