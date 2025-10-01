import './BlogCard.css';
import type { WPBlogPost } from '../../types.ts';

const BlogCard = ({ blog, blogStyle }: { blog: WPBlogPost; blogStyle?: string }) => {
  const formatDate = (date: Date, monthOpt: 'long' | 'short') => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: monthOpt,
      day: 'numeric',
    });
  };

  return (
    <li key={blog.id} data-aos="fade-up" className="max-w-lg w-[400px] mx-auto">
      <div
        className={`overflow-hidden blog-card h-full border border-yellow-500 ${blogStyle === 'dark' ? 'bg-black' : 'bg-light'}`}
      >
        <div className={`d-flex flex-column blog-card-body p-3 ${blogStyle === 'dark' && 'px-0'}`}>
          <a
            href={`/internships/${blog.slug}`}
            className={`blog-card-title ${blogStyle === 'dark' ? 'text-yellow-500' : 'text-black'}`}
          >
            <h2 className="mb-0 font-bold text-yellow-500 text-base">{blog.title.rendered}</h2>
          </a>

          <div className="d-flex align-items-center gap-2 mt-1">
            <span className={blogStyle === 'dark' ? 'text-gray-400' : 'text-muted'}>MIP</span>
            <span
              className={`${blogStyle === 'dark' ? 'text-gray-600' : 'text-muted'} dot-seperator fs-6`}
            >
              &nbsp;•&nbsp;
            </span>
            <span className={blogStyle === 'dark' ? 'text-gray' : 'text-muted'}>
              {formatDate(blog.date, 'short')}
            </span>
          </div>

          <div className="clamped-container py-2 flex-grow-1">
            <div
              dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
              className={`card-excerpt ${blogStyle === 'dark' ? 'text-gray' : 'text-muted '}`}
            />
          </div>

          <a href={`/internships/${blog.slug}`} className="mt-auto">
            <button className="blog-button bg-yellow-500 text-xs py-1 px-3">Read More</button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
