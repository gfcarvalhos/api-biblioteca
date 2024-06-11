import mongoose, { mongo } from 'mongoose';
import { dbPassword } from './config.js';

async function conectaBanco() {
  mongoose.connect(
    `mongodb+srv://gabrielfelipecarvalho1:${dbPassword}@gabriel.08wliku.mongodb.net/livraria?retryWrites=true&w=majority&appName=Gabriel`,
  );

  return mongoose.connection;
}

export default conectaBanco;
