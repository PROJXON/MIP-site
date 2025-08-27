import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import emailRoute from './routes/emailRoute';
import wpRoute from './routes/wpRoute';

const app = express();
const PORT = process.env.PORT || 5050;

//adds middleware to the express app
app.use(cors());

//adds middleware to parse JSON bodies
app.use(express.json());

app.use('/api/email', emailRoute);
app.use('/api/blogs', wpRoute(process.env.WORDPRESS_API_URL!, '/posts?_embed'));
app.use('/api/testimonials', wpRoute(process.env.WORDPRESS_CUSTOM_API_URL!, '/clients'));
// defines GET route for the root path http://localhost:5000/
app.get('/', (_req, res) => {
  res.send('Backend server is running!');
});

// Starts the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
