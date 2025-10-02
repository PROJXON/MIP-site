import useWPFetch from '../../hooks/useWPFetch.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';
import type { WPBlogPost } from '../../types.ts';
import BlogCard from './BlogCard';

export default function Blogs() {
  // const [visibleBlogs, setVisibleBlogs] = useState(6);
  // const handleLoadMore = () => setVisibleBlogs(prev => prev + 6);
  const [blogs, loading] = useWPFetch<WPBlogPost>('blogs');

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : blogs.length > 0 ? (
        <>
          <ul className="blog-list list-unstyled flex flex-wrap justify-center gap-6 my-10 px-6 max-w-7xl mx-auto">
            {/* {blogs.slice(0, visibleBlogs).map((blog, index) => (
                <BlogCard blog={blog} key={index} />
              ))} */}
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </ul>
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