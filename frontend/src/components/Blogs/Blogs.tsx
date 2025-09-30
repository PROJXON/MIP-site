import useWPFetch from '../../hooks/useWPFetch.ts';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.tsx';
import type { WPBlogPost } from '../../types.ts';
import BlogCard from './BlogCard';

export default function Blogs() {
  const [blogs, loading] = useWPFetch<WPBlogPost>('blogs');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500">
        Get to Know PROJXON's Momentum Internship Program
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
        </>
      ) : (
        <div className="text-center my-5">
          <p>No blog posts at the moment.</p>
        </div>
      )}
    </div>
  );
}
