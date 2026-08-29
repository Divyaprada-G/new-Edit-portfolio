export type RoutePath =
  | '/'
  | '/about'
  | '/systems'
  | '/systems/titan-tsdb'
  | '/systems/vector-inference'
  | '/systems/traffic-system'
  | '/architecture'
  | '/experience'
  | '/field-log'
  | '/lab'
  | '/signals'
  | '/resume'
  | '/contact';

export interface SystemProject {
  id: string;
  slug: string;
  systemId: string;
  name: string;
  tagline: string;
  status: 'PRODUCTION' | 'EXPERIMENTAL' | 'ACTIVE_BENCHMARK';
  technologies: string[];
  metrics: { label: string; value: string; detail?: string }[];
  problem: string;
  architectureOverview: string;
  keyResult: string;
  route: RoutePath;
  colorScheme: {
    primary: string;
    secondary: string;
    glow: string;
    badge: string;
  };
  deepDive: {
    overview: string;
    architectureDiagram: {
      nodes: { id: string; name: string; type: string; description: string; latency?: string }[];
      connections: { from: string; to: string; label: string }[];
    };
    sections: {
      number: string;
      title: string;
      content: string;
      keyPoints?: string[];
      codeSnippet?: string;
      codeLang?: string;
    }[];
    benchmarks: { name: string; value: string; comparison?: string; unit?: string }[];
    decisions: { decision: string; why: string; tradeOff: string }[];
  };
}

export interface EventPhoto {
  url: string;
  caption?: string;
  aspectRatio?: 'PORTRAIT' | 'LANDSCAPE' | 'SQUARE';
  isBadge?: boolean;
}

export interface FieldLogEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  year: string;
  location: string;
  category: 'GOOGLE' | 'MICROSOFT' | 'HACKATHON' | 'COMMUNITY' | 'MENTORSHIP' | 'OPEN SOURCE' | 'WORKSHOP';
  coverImage: string;
  images: string[];
  gallery: EventPhoto[];
  shortDescription: string;
  fullDescription: string;
  experienceStory: string;
  takeaway: string;
  tags: string[];
  role?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  category: string;
  organization?: string;
  location?: string;
  role?: string;
  description: string;
  highlights?: string[];
  images: string[];
  gallery?: EventPhoto[];
  credentialType?: 'BADGE' | 'CERTIFICATE' | 'PHOTO' | 'HYBRID';
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'WORK' | 'EDUCATION' | 'LEADERSHIP';
  summary: string;
  highlights: string[];
  technologies?: string[];
  images?: string[];
  gallery?: EventPhoto[];
}

export interface EngineeringSignal {
  id: string;
  metric: string;
  value: string;
  sublabel: string;
  category: 'LEETCODE' | 'HACKATHON' | 'COMMUNITY' | 'LEADERSHIP' | 'MENTORSHIP';
  verified: boolean;
  detail: string;
}

export interface SignalEssay {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
  keyTakeaways: string[];
  tags: string[];
}

export interface LabSimulation {
  id: string;
  name: string;
  category: string;
  description: string;
  type: 'FAILURE_SIMULATOR' | 'CACHE_ALGORITHM' | 'RATE_LIMITER' | 'DYNAMIC_BATCHING';
}
