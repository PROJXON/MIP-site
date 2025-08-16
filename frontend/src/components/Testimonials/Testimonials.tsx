// frontend/src/components/Testimonials/Testimonials.tsx
import React, { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  text: string;
  company: string;
};

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("http://YOUR_LIGHTSAIL_BACKEND_URL/api/testimonials")
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  return (
    <section>
      <h2>What Our Clients Say</h2>
      <div>
        {testimonials.map((t, i) => (
          <div key={i}>
            <p>"{t.text}"</p>
            <p>- {t.name}, {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};