import { connectToDatabase } from '@/lib/database/mongodb';

export default async function handler(req:any, res:any) {
  try {
    await connectToDatabase();
    res.status(200).json({ message: '✅ Connected to MongoDB' });
  } catch (error) {
    res.status(500).json({ error: '❌ MongoDB connection failed' });
  }
}
