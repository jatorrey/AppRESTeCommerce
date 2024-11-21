// database.config.js

import mongoose from 'mongoose';
import config from './config.js';

export async function connectDB() {
  try {
    const db = await mongoose.connect(config.CONNECTION_STRING, {
      dbName: config.DATABASE
    });
    console.log('Database is connected to: ' + db.connection.name);
  } catch (error) {
    console.log('Error: ', error);
  }
}