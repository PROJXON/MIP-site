import type { PageSection } from '../../types';

export default function PageContent({ section }: { section: PageSection }) {
  return (
    <section id={section.id} className="max-w-3xl mx-auto mb-12 px-4">
      <h3 className="text-2xl font-bold text-yellow-400 mb-2">{section.heading}</h3>
      {typeof section.content === 'string' ? (
        <p className="text-gray-300">{section.content}</p>
      ) : Array.isArray(section.content) ? (
        <ul className="list-disc list-inside text-gray-300 text-left">
          {section.content.map((bullet, ind) => (
            <li key={ind}>{bullet}</li>
          ))}
        </ul>
      ) : section.content &&
        typeof section.content === 'object' &&
        'quote' in section.content &&
        'name' in section.content ? (
        <p className="text-gray-300">
          "{section.content.quote}"
          <br />
          <span className="text-yellow-300">– {section.content.name}</span>
        </p>
      ) : (
        <p className="text-gray-300">section.content</p>
      )}
    </section>
  );
}
