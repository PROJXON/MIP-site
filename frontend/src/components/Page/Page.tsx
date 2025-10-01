import type { PageSection } from '../../types';
import type { ImageLink } from '../../types';
import PageContent from './PageContent';

export default function Page({
  hero,
  sections,
}: {
  hero: {
    pic: ImageLink;
    h1?: string;
    h2?: string;
    p?: string;
  };
  sections: (PageSection | PageSection[])[];
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 flex items-center justify-center mb-10"
        style={{
          backgroundImage: `url(${hero.pic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {hero.h1 && (
            <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2 text-center drop-shadow-lg">
              {hero.h1}
            </h1>
          )}
          {hero.h2 && (
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-1 text-center">
              {hero.h2}
            </h2>
          )}
          {hero.p && <p className="text-md md:text-lg text-gray-200 text-center">{hero.p}</p>}
        </div>
      </div>

      {/* Anchor Navigation */}
      {/* <nav className="flex flex-wrap justify-center gap-4 mb-10">
        {sections.map((section, i) => (
          <a
            key={i}
            href={`#${section.id}`}
            className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            {section.heading}
          </a>
        ))}
      </nav> */}

      {sections.map((sectionOrGroup, i) =>
        Array.isArray(sectionOrGroup) ? (
          <div key={i} className={`grid grid-cols-${sectionOrGroup.length} gap-6`}>
            {sectionOrGroup.map((section, j) => (
              <PageContent section={section} key={j} />
            ))}
          </div>
        ) : (
          <PageContent section={sectionOrGroup} key={i} />
        )
      )}
    </div>
  );
}
