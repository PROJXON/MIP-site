import React from 'react';

export const About: React.FC = () => {
  const team = [
    {
      name: 'Mark W. Phelan',
      title: 'Founder & CEO',
      image: '/assets/images/team/phelan.webp',
    },
    {
      name: 'Meet the Team',
    },
    {
      name: 'Javier Avila',
      title: 'Program Director',
      image: '/assets/images/team/javier.webp',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-black text-white">
      {/* Our Approach Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Approach</h2>
        <p className="text-gray-300">
          We believe in hands-on, project-based learning. Our Momentum Internship Program (MIP) is
          built on collaboration, mentorship, and real consulting projects. We partner with
          companies and universities to ensure every participant gains practical skills, industry
          insights, and the confidence to excel in their careers. Our approach is flexible,
          remote-friendly, and tailored to the needs of both interns and organizations.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center"
            >
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
              )}
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              {member.title && <p className="text-gray-400">{member.title}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Story</h2>
        <p className="text-gray-300">
          PROJXON was founded with a vision to bridge the gap between academic learning and
          real-world experience. Our journey began when a group of passionate professionals
          recognized the need for a platform that empowers young talent and organizations alike.
          Since then, we've been dedicated to designing innovative internship programs that create
          future-ready leaders and deliver measurable impact for our partners.
        </p>
      </section>
    </div>
  );
};
