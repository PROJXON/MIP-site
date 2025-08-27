import blogDefaultImg from '../../../public/assets/images/default-blog-img.webp';
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

  const featuredMedia = blog._embedded?.['wp:featuredmedia'];
  const sourceUrl = featuredMedia?.[0]?.source_url || blogDefaultImg;

  return (
    <li key={blog.id} data-aos="fade-up">
      <div
        className={`overflow-hidden blog-card h-100 ${blogStyle === 'dark' ? 'bg-black' : 'bg-light'}`}
      >
        <a href={`/internships/${blog.slug}`}>
          <img
            className="blog-img w-100 object-fit-cover"
            src={sourceUrl}
            alt={blog.title.rendered}
          />
        </a>

        <div className={`d-flex flex-column blog-card-body ${blogStyle === 'dark' && 'px-0'}`}>
          <a
            href={`/internships/${blog.slug}`}
            className={`blog-card-title ${blogStyle === 'dark' ? 'text-white' : 'text-black'}`}
          >
            <h2 className="mb-0 font-bold text-xl">{blog.title.rendered}</h2>
          </a>

          <div className="d-flex align-items-center gap-2 mt-1">
            <span className={blogStyle === 'dark' ? 'text-gray' : 'text-muted'}>
              {blog._embedded?.author?.[0]?.name}
            </span>
            <span
              className={`${blogStyle === 'dark' ? 'text-gray' : 'text-muted'} dot-seperator fs-6`}
            >
              &nbsp;•&nbsp;
            </span>
            <span className={blogStyle === 'dark' ? 'text-gray' : 'text-muted'}>
              {formatDate(blog.date, 'short')}
            </span>
          </div>

          <div className="clamped-container py-4 flex-grow-1">
            <div
              dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
              className={`card-excerpt ${blogStyle === 'dark' ? 'text-gray' : 'text-muted '}`}
            />
          </div>

          <a href={`/internships/${blog.slug}`} className="mt-auto">
            <button className="blog-button">Read More</button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
