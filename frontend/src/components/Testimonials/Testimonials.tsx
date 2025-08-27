import type { Testimonial } from '../../types.ts';
import useWPFetch from '../../hooks/useWPFetch.ts';

export default function Testimonials() {
  const [testimonials, loading] = useWPFetch<Testimonial>('testimonials');

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <p>"This service is fantastic! Highly recommend to everyone."</p>
      <p>"A game-changer in the industry. Exceptional quality and support."</p>
      <p>"I've never been more satisfied with a purchase. Five stars!"</p>
    </div>
  );
}
