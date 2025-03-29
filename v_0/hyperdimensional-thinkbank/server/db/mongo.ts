// server/db/mongo.ts

import mongoose from 'mongoose';
import { MONGODB_URI } from '../config/server';

export const connectDatabase = async (): Promise<void> => {
  try {
    // 适配新版本 Mongoose 的一些警告处理
    mongoose.set('strictQuery', false);

    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};
