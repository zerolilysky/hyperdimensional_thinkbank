// src/types/user.ts

/**
 * 定义用户相关的类型
 */

export type UserType = 'academic' | 'industry' | 'investor';

export interface VerificationStatus {
  academic: boolean;
  industry: boolean;
  investor: boolean;
}

export interface AcademicProfile {
  orcid?: string;
  hIndex?: number;
  publications?: string[];
}

export interface IndustryProfile {
  company?: string;
  position?: string;
  patents?: string[];
}

export interface InvestorProfile {
  firm?: string;
  portfolioKeywords?: string[];
}

export interface ContributionMetrics {
  academicImpact: number;
  industryPredictionAccuracy: number;
  riskSensingScore: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  userType: UserType;
  verificationStatus: VerificationStatus;
  academicProfile?: AcademicProfile;
  industryProfile?: IndustryProfile;
  investorProfile?: InvestorProfile;
  cognitiveFlexibilityScore?: number;
  badges: string[];
  contributionMetrics: ContributionMetrics;
  createdAt: Date;
  updatedAt: Date;
}
