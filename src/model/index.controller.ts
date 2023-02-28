import mongoose, { mongo } from 'mongoose';

const tokenSchema = new mongoose.Schema({
  gameCode: { type: String, index: true, required: true },
});

export default mongoose.model('tokenTable', tokenSchema);
