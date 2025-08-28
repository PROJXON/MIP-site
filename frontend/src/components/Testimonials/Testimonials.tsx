import type { Testimonial } from '../../types.ts';
import useWPFetch from '../../hooks/useWPFetch.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';

export default function Testimonials() {
  const [testimonials, loading] = useWPFetch<Testimonial>('testimonials');

  return (
    <div className="mb-2">
      {loading ? (
        <LoadingSpinner />
      ) : testimonials.length > 0 ? (
        <ul className="blog-list list-unstyled flex flex-wrap justify-center gap-6 my-5 px-6 max-w-7xl mx-auto">
          {testimonials.map((test) => (
            <li key={test.id}>
              <div className="mb-4 flex">
                <img
                  src={test.image}
                  alt={test.name}
                  className="rounded-full border w-[65px] h-[65px]"
                />
                <div className="flex-1 m-auto">
                  <h4 className="mb-0 text-[#ffd700] font-bold text-lg">{test.name}</h4>
                  <p className="mb-0 small text-sm text-gray-400">{test.title}</p>
                </div>
              </div>
              <p className="gray-opacity text-gray">{test.quote}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center my-5">
          <p>No testimonials at the moment.</p>
        </div>
      )}
    </div>
  );
}
