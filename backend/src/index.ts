import express from 'express';
import 'dotenv/config';

//middleware that enables CORS (Cross-Origin Resource Sharing)
//allowing frontend to make requests to the backend
import cors from 'cors';
import emailRoute from './routes/emailRoute';
import testimonialsRoute from './routes/testimonialsRoute';

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("OAUTH_CLIENT_ID:", process.env.OAUTH_CLIENT_ID);
console.log("OAUTH_CLIENT_SECRET:", process.env.OAUTH_CLIENT_SECRET);
console.log("OAUTH_REFRESH_TOKEN:", process.env.OAUTH_REFRESH_TOKEN);
console.log("OAUTH_REDIRECT_URI:", process.env.OAUTH_REDIRECT_URI);

//
const app = express();
const PORT = process.env.PORT || 5050;

//adds middleware to the express app
app.use(cors());

//adds middleware to parse JSON bodies
app.use(express.json());

app.use('/api/email', emailRoute);
// defines GET route for the root path http://localhost:5000/
app.get('/', (_req, res) => {
  res.send('Backend server is running!');
});



// Starts the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

