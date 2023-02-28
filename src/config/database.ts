import mongoose from 'mongoose';
import config from 'config';
export const connectDb = async () => {
  mongoose.set('strictQuery', false);

  await mongoose.connect(config.get('database'));
  // await mongoose.connect('mongodb://localhost/virtualEscape');
  console.log('Db Connected');
};
