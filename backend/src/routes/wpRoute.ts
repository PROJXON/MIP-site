import { Router } from 'express';
import axios from 'axios';

export default function wpRoute(baseURL: string, path: `/${string}`) {
  const router = Router();
  const api = axios.create({
    baseURL: baseURL,
  });

  router.get('/', async (req, res) => {
    try {
      const hasFilter = Object.keys(req.query || {}).length > 0;

      if (hasFilter) {
        const response = await api.get(path, { params: { ...req.query } });
        return res.status(200).json(response.data);
      }

      const allItems: any[] = [];
      let page = 1;
      let hasMoreItems = true;

      while (hasMoreItems) {
        const response = await api.get(path, {
          params: {
            page,
            per_page: 10,
          },
        });
        allItems.push(...(response.data as any[]));

        const items = response.data as any[];
        if (items.length < 10) hasMoreItems = false;
        else page++;
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
