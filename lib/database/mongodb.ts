import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Global is used here to maintain a cached connection across hot reloads in development.
let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('✅ Using existing MongoDB connection');
    return mongoose.connection;
  }

  if (!MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is missing');
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: 'Event'
    });

    isConnected = db.connections[0].readyState === 1;
    console.log('🚀 Connected to MongoDB');

    return db;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw new Error('MongoDB connection failed');
  }
};
