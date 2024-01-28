import mongoose from 'mongoose';

const connectDB = async () => {
  const uri = process.env.DB_URI;
  try {
    await mongoose.connect(uri, {
      //useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database is connected...');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
