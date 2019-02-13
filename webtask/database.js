import mongoose from 'mongoose';
import { MONGODB } from '../config';

export default function connect(callback) {
  const weasels = mongoose.connect(MONGODB.uri, {
    useNewUrlParser: true
  });

  mongoose.connection.once('open', callback);

  return weasels;
}
