import mongoose, { mongo } from 'mongoose';

async function conectaBanco() {
  mongoose.connect(process.env.DB_CONNECTION);

  return mongoose.connection;
}

export default conectaBanco;
