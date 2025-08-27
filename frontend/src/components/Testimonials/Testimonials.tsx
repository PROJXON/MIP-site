import type { Testimonial } from '../../types.ts';
import useWPFetch from '../../hooks/useWPFetch.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';

export default function Testimonials() {
  const [testimonials, loading] = useWPFetch<Testimonial>('testimonials');

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : testimonials.length > 0 ? (
        <ul className="blog-list list-unstyled flex flex-wrap justify-center gap-6 my-5 px-6 max-w-7xl mx-auto">
          {testimonials.map((test) => (
            <li key={test.id}>
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 flex-shrink-0">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="rounded-circle border"
                    width={65}
                    height={65}
                  />
                </div>
                <div>
                  <h4 className="mb-0 fs-5 text-yellow">{test.name}</h4>
                  {/* <p className="mb-0 small text-gray">{test.title}</p> */}
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
