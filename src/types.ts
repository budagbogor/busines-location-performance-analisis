export type BranchStatus = 'Top' | 'Medium' | 'Attention Required';

export interface ReviewHighlight {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  tags: string[];
}

export interface BranchData {
  id: string;
  name: string;
  city: string;
  address?: string;
  rating: number;
  reviewCount: number;
  status: BranchStatus;
  positives: string[];
  negatives: string[];
  complaintCount: number;
  trendScore: 'improving' | 'stable' | 'declining';
  trendDetails?: string;
  recentReviews?: ReviewHighlight[];
}

export interface ComplaintCategoryBreakdown {
  category: string;
  percentage: number;
  count: number;
  severity: 'High' | 'Medium' | 'Low';
  sampleQuotes: string[];
}

export interface HourlyTraffic {
  hour: string;
  trafficLevel: number; // 0 to 100
  label: string;
}

export interface TrafficPattern {
  busyDays: string[];
  peakHours: string;
  quietHours: string;
  hourlyDistribution: HourlyTraffic[];
  summary: string;
  recommendations: string[];
}

export interface SocialChannelData {
  platform: 'Instagram' | 'TikTok' | 'YouTube' | 'News' | 'Facebook' | 'X/Twitter';
  mentionCount: number;
  sentimentScore: number; // 0 - 100%
  viralTopics: string[];
  recentHeadline: string;
}

export interface SocialSentimentData {
  overallPositivePercentage: number;
  overallNeutralPercentage: number;
  overallNegativePercentage: number;
  channels: SocialChannelData[];
  viralComplaints: string[];
  successfulCampaigns: string[];
  publicPerceptionSummary: string;
}

export interface StrategicRecommendation {
  id: string;
  priority: 'Critical' | 'High' | 'Medium';
  category: 'Operasional' | 'Pelatihan Staff' | 'Customer Experience' | 'Inventaris & Transparansi';
  title: string;
  description: string;
  targetBranches: string[];
  expectedImpact: string;
  completed?: boolean;
}

export interface FullIntelligenceReport {
  brandName: string;
  analysisDate: string;
  totalBranchesFound: number;
  avgNetworkRating: number;
  totalReviewsAnalyzed: number;
  executiveSummary: string;
  branches: BranchData[];
  redFlagBranchIds: string[];
  complaintCategories: ComplaintCategoryBreakdown[];
  trafficPattern: TrafficPattern;
  socialSentiment: SocialSentimentData;
  strategicRecommendations: StrategicRecommendation[];
  groundingSources?: Array<{ title: string; uri: string }>;
}

export interface SearchState {
  isLoading: boolean;
  step: 'idle' | 'mapping_network' | 'fetching_reviews' | 'analyzing_complaints' | 'tracking_social' | 'synthesizing' | 'completed' | 'error';
  errorMessage?: string;
  progressPercent: number;
}
