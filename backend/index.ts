import express from 'express';
import dotenv from 'dotenv';
import login from './controllers/login';
import cors from 'cors';
import cookieSession from 'cookie-session';
dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000
    }))

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', login);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});