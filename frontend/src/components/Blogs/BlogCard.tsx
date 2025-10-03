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

  const sourceUrl = '/assets/images/projxon-mip-logo.png';

  return (
    <li key={blog.id} data-aos="fade-up" className="max-w-lg w-[400px] mx-auto">
      <div
        className={`overflow-hidden blog-card h-full border border-yellow-500 ${blogStyle === 'dark' ? 'bg-[#0a0a08]' : 'bg-light'}`}
      >
        <a href={`/blogs/${blog.id}`}>
          <img
            className="blog-img w-100 object-fit-cover"
            src={sourceUrl}
            alt={blog.title.rendered}
          />
        </a>

        <div className={`d-flex flex-column blog-card-body p-3 ${blogStyle === 'dark' && 'px-0'}`}>
          <a
            href={`/blogs/${blog.id}`}
            className={`blog-card-title ${blogStyle === 'dark' ? 'text-yellow-500' : 'text-black'}`}
          >
            <h2 className="mb-0 font-bold text-yellow-500 text-base">{blog.title.rendered}</h2>
          </a>

          <div className="d-flex align-items-center gap-2 mt-1">
            <span className={blogStyle === 'dark' ? 'text-gray-400' : 'text-muted'}>
              {formatDate(blog.date, 'short')}
            </span>
          </div>

          <div className="clamped-container py-2 flex-grow-1">
            <div
              dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
              className={`card-excerpt ${blogStyle === 'dark' ? 'text-gray' : 'text-muted '}`}
            />
          </div>

          <a href={`/blogs/${blog.id}`} className="mt-auto">
            <button className="blog-button bg-yellow-500 text-xs py-1 px-3">Read More</button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
