import { useParams } from 'react-router-dom';
import type { WPBlogPost } from '../../types.ts';
import useWPFetchOne from '../../hooks/useWPFetchOne';

import defaultImg from '../../../public/assets/images/projxon-mip-logo.png';

import './BlogPage.css';

const BlogPage = () => {
  const { blogId } = useParams();
  const [result, loading] = useWPFetchOne<WPBlogPost[] | WPBlogPost>(`blogs?include=${blogId}`);

  const stripAndFindFirstImage = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const figureImg = doc.querySelector('figure img');
    const imgSrc = figureImg?.getAttribute('src') || '';
    const sanitizedHtml = doc.body.innerHTML;
    return { sanitizedHtml, imgSrc };
  };

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading || !result) {
    return <div></div>;
  }

  const blog = Array.isArray(result) ? result[0] : result;
  if (!blog) {
    return <div></div>;
  }

  const { sanitizedHtml } = stripAndFindFirstImage(blog.content.rendered);
  const featuredMedia = blog._embedded?.['wp:featuredmedia'];
  const sourceUrl = featuredMedia && featuredMedia.length > 0 ? featuredMedia[0].source_url : '';

  return (
    <>
      <div className='mx-auto blog-container px-3'>
        <article className='my-5 py-2'>
          <header>
            <h1 className='font-bold'>{blog.title.rendered}</h1>

            <div className="flex items-center justify-content-between mb-3 blogpage-date mt-3">
              <p className="font-semibold text-base">Momentum Internship Program</p>
              <span className="mx-2" aria-hidden="true"></span>
              <div className="flex items-center text-gray-500 gap-1">
                <time dateTime={String(blog.date)} className='text-gray-500'>{formatDate(String(blog.date))}</time>
              </div>
            </div>
          </header>

          <img
            className="w-full blogpage-img"
            src={sourceUrl ? sourceUrl : (defaultImg as unknown as string)}
            alt={blog.title.rendered}
          />

          <div className='mt-5' dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </article>
      </div>
    </>
  );
};

export default BlogPage;