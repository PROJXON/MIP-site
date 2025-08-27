import { Router } from 'express';
const router = Router();
import axios from 'axios';

export default function wpRoute(baseURL: string, path: `/${string}`) {
  const api = axios.create({
    baseURL: baseURL,
  });

  router.get('/', async (_req, res) => {
    try {
      const allItems = [];
      let page = 1;
      let hasMoreItems = true;

      while (hasMoreItems) {
        const response = await api.get(path, {
          params: {
            page, // Specify the current page
            per_page: 10, // Number of posts per page
          },
        });
        allItems.push(...response.data); // Append posts to the result array

        // If the number of posts is less than the per_page limit, we've reached the end
        if (response.data.length < 10) hasMoreItems = false;
        else page++; // Move to the next page
      }

      res.status(200).json(allItems);
    } catch (error: Error | any) {
      res.status(error.response?.status || 500).json({
        message: 'Error fetching blogs',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  });

  return router;
}
