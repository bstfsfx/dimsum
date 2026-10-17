const mongoose = require('mongoose');

async function connectDB(uri) {
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[mongo] connected → ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error(`[mongo] connection error: ${err.message}`);
    console.warn('[mongo] starting without database — APIs will return fallback data');
  }
}

module.exports = connectDB;