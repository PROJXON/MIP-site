import type { Testimonial } from '../../types.ts';
import useWPFetch from '../../hooks/useWPFetch.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function Testimonials() {
  const [testimonials, loading] = useWPFetch<Testimonial>('testimonials');

  return (
    <div className="mb-2">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">Our Trusted Interns</h2>
      {loading ? (
        <LoadingSpinner />
      ) : testimonials.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          modules={[Navigation]}
          navigation
        >
          {testimonials.map((test) => (
            <SwiperSlide key={test.id}>
              <div className="mb-4 flex flex-col items-center mx-auto p-4 rounded shadow max-w-xs">
                <img
                  src={test.image}
                  alt={test.name}
                  className="rounded-full border w-24 h-24 mb-2"
                />
                <h4 className="mb-0 text-yellow-500 font-bold text-lg text-center">{test.name}</h4>
                <p className="mb-0 small text-sm text-gray-500 text-center">{test.title}</p>
                <p className="gray-opacity text-sm text-white text-center mt-2">{test.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center my-5">
          <p>No testimonials at the moment.</p>
        </div>
      )}
    </div>
  );
}
