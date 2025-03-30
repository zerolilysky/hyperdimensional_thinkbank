import mongoose, { Schema, Document } from 'mongoose';

/**
 * 用户模型
 * 包括用户名、邮箱、密码以及身份类型。
 * 后续扩展：添加认证状态、各领域验证信息、信誉评分等字段
 */
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  userType: 'academic' | 'industry' | 'investor';
  verificationStatus: {
    academic: boolean;
    industry: boolean;
    investor: boolean;
  };
  // 可选扩展字段
  academicProfile?: {
    orcid?: string;
    hIndex?: number;
    publications?: string[];
  };
  industryProfile?: {
    company?: string;
    position?: string;
    patents?: string[];
  };
  investorProfile?: {
    firm?: string;
    portfolioKeywords?: string[];
  };
  badges: string[];
  contributionMetrics: {
    academicImpact: number;
    industryPredictionAccuracy: number;
    riskSensingScore: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['academic', 'industry', 'investor'], required: true },
    verificationStatus: {
      academic: { type: Boolean, default: false },
      industry: { type: Boolean, default: false },
      investor: { type: Boolean, default: false },
    },
    badges: { type: [String], default: [] },
    contributionMetrics: {
      academicImpact: { type: Number, default: 0 },
      industryPredictionAccuracy: { type: Number, default: 0 },
      riskSensingScore: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
