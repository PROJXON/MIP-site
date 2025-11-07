import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import mipHome from '/assets/images/mip-home.jpg';
import GoldButton from '../GoldButton/GoldButton';

export const Main: React.FC = () => {
  const metrics = [
    '200+ Interns Trained',
    '25 Partner Campuses',
    '14 Industries',
  ];

  const features = [
    {
      heading: 'Candidates',
      p: 'Real-world growth, leadership, skill stacking',
      buttonText: "I'd Like to Apply!",
      buttonLink: 'https://app.dover.com/jobs/projxon',
    },
    {
      heading: 'Universities',
      p: 'Experiential learning, career readiness',
      buttonText: 'We Want to Partner',
      buttonLink:
        'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfFujqNvY_1kXTUCCqfNHLLQgu-W17oXtx8Yv3-hYcoXr6X_g/viewform',
    },
    {
      heading: 'Companies',
      p: 'Talent pipeline, innovation, intern ROI',
      buttonText: 'Design a Program for Us!',
      buttonLink: 'https://share.hsforms.com/1y8K29LT1QRa1VT1u2RoWTArx61e',
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-12 px-4 relative min-h-[320px]"
        style={{
          backgroundImage: `url(${mipHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-yellow-500">
            Accelerate Talent, Elevate Impact
          </h2>
          <p className="mb-6 text-white max-w-xl text-center">
            Custom-designed internship programs that create future-ready leaders
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, i) => (
            <div className="flex flex-col" key={i}>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.heading}</h3>
              <div className="flex flex-1 items-center">
                <GoldButton
                  key={i}
                  link={feature.buttonLink}
                  text={feature.buttonText}
                  additionalClasses="m-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sliding Metrics Section */}
      <section className="py-10 px-4 overflow-hidden">
        <div className="relative w-full">
          <div className="animate-marquee whitespace-nowrap flex gap-12">
            {metrics.map((metric, i) => (
              <span
                key={i}
                className="text-4xl md:text-5xl font-extrabold text-yellow-500"
              >
                {metric}
              </span>
            ))}
            {/* Duplicate for seamless looping */}
            {metrics.map((metric, i) => (
              <span
                key={`dup-${i}`}
                className="text-4xl md:text-5xl font-extrabold text-yellow-500"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Blogs />

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
};
