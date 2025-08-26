import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import type { WPBlogPost } from '../../../types.ts';
import BlogCard from './BlogCard';

const API_BASE_URL =
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5050'
    : 'https://api.momentuminternshipprogram.com';

export default function Blogs() {
  const [blogs, setBlogs] = useState<WPBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  // const [visibleBlogs, setVisibleBlogs] = useState(6);

  // const handleLoadMore = () => setVisibleBlogs(prev => prev + 6);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h2 className="mb-5 text-yellow">
        Internship Graduate Blogs <span className="blog-heading-border mt-2"></span>
      </h2>

      {loading ? (
        <div className="text-center my-5">
          <LoadingSpinner /> {/* Show loading spinner while fetching data */}
        </div>
      ) : blogs.length > 0 ? (
        <>
          <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
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
