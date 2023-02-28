import express from 'express';
import serverRoutes from './routes/index.routes';
import { connectDb } from './config/database';
import config from 'config';

if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', serverRoutes);

app.listen(port, async () => {
  try {
    await connectDb();
    console.log(`Express is listening at http://localhost:${port}`);
  } catch (error) {
    console.error('Error Connecting Database', error);
  }
});
