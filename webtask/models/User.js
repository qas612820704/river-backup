import { model, Schema } from 'mongoose';

const User = Schema({
  id: String,
  email: String,
  name: String,
  picture: String,
})

export default model('User', User);
