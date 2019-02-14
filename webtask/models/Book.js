import { model, Schema } from 'mongoose';
import User from './User';

const Book = new Schema({
  name: String,
  description: String,
  picture: String,
  createAt: {
    type: Date,
    default: Date.now
  },
  createById: String,
});

Book
  .virtual('createBy')
  .get(() => {
    return User.findOne({ id: this.createById });
  });

export default model('Book', Book);
