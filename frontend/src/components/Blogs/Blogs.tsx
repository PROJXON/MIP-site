import useWPFetch from '../../hooks/useWPFetch.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';
import type { WPBlogPost } from '../../types.ts';
import BlogCard from './BlogCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Blogs() {
  // const [visibleBlogs, setVisibleBlogs] = useState(6);
  // const handleLoadMore = () => setVisibleBlogs(prev => prev + 6);
  const [blogs, loading] = useWPFetch<WPBlogPost>('blogs');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">Get to Know 
        PROJXON's Momentum Internship Program
      </h2>
      {loading ? (
        <LoadingSpinner />
      ) : blogs.length > 0 ? (
        <>
          <ul className="flex flex-col gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </ul>
          {/* <Swiper
  spaceBetween={16}
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
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper> */}
          {/* {visibleBlogs < blogs.length && (
              <div className="text-center mt-4">
                <Button onClick={handleLoadMore} className="fs-5 px-4 black-button">
                  Load More
                </Button>
              </div>
            )} */}
        </>
      ) : (
        <div className="text-center my-5">
          <p>No blog posts at the moment.</p>
        </div>
      )}
    </div>
  );
}
