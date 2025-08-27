import type { WPBlogPost } from '../../../types.ts';
import { useState, useEffect } from 'react';

const API_BASE_URL =
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5050'
    : 'https://api.momentuminternshipprogram.com';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<WPBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/testimonials`);
        console.log(`${API_BASE_URL}/api/testimonials`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setTestimonials(data);
      } catch (err) {
        console.error(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <p>"This service is fantastic! Highly recommend to everyone."</p>
      <p>"A game-changer in the industry. Exceptional quality and support."</p>
      <p>"I've never been more satisfied with a purchase. Five stars!"</p>
    </div>
  );
}
