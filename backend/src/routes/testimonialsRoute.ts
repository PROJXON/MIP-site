import { Router } from 'express';
const router = Router();
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.WORDPRESS_CUSTOM_API_URL,
});

router.get('/', async (_req, res) => {
  try {
    const allTestimonials = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await api.get('/clients', {
        params: {
          page, // Specify the current page
          per_page: 10, // Number of posts per page
        },
      });
      allTestimonials.push(...response.data); // Append posts to the result array

      // If the number of posts is less than the per_page limit, we've reached the end
      if (response.data.length < 10) hasMore = false;
      else page++; // Move to the next page
    }

    res.status(200).json(allTestimonials);
  } catch (error: Error | any) {
    res.status(error.response?.status || 500).json({
      message: 'Error fetching blogs',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

export default router;
