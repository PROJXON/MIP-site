import express from 'express';
import 'dotenv/config';

//middleware that enables CORS (Cross-Origin Resource Sharing)
//allowing frontend to make requests to the backend
import cors from 'cors';
import emailRoute from './routes/emailRoute';
import blogRoute from './routes/blogRoute';
import testimonialsRoute from './routes/testimonialsRoute';

const app = express();
const PORT = process.env.PORT || 5050;

//adds middleware to the express app
app.use(cors());

//adds middleware to parse JSON bodies
app.use(express.json());

app.use('/api/email', emailRoute);
app.use('/api/blogs', blogRoute);
app.use('/api/testimonials', testimonialsRoute);
// defines GET route for the root path http://localhost:5000/
app.get('/', (_req, res) => {
  res.send('Backend server is running!');
});

// Starts the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
