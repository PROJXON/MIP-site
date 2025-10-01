import React, { useEffect, useMemo, useState } from 'react';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from '../Blogs/Blogs';
import mipHome from '/assets/images/mip-home.jpg';

export const Main: React.FC = () => {
  // For animated impact numbers
  const metrics = useMemo(
    () => [
      { label: '100+ Interns Trained' },
      { label: '92% Conversion' },
      { label: '15 Partner Campuses' },
      { label: '9 Industries' },
    ],
    []
  );
  const [showMetrics, setShowMetrics] = useState([false, false, false, false]);

  useEffect(() => {
    // Animate metrics one after another
    metrics.forEach((_, i) => {
      setTimeout(() => {
        setShowMetrics((prev) => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 400 * i);
    });
  }, [metrics]);

  const features = [
    {
      heading: 'Candidates',
      p: 'Real-world growth, leadership, skill stacking',
    },
    {
      heading: 'Universities',
      p: 'Experiential learning, career readiness',
    },
    {
      heading: 'Companies',
      p: 'Talent pipeline, innovation, intern ROI',
    },
  ];

  const goldButtons = [
    {
      text: 'Apply for An Internship',
      link: '/candidates',
    },
    {
      text: 'Become a University Partner',
      link: '/universities',
    },
    {
      text: 'Design a MIP for My Company',
      link: '/companies',
    },
  ];

  return (
    <main className="flex-1 bg-black">
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-12 bg-black px-4 relative min-h-[320px]"
        style={{
          backgroundImage: `url(${mipHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center text-yellow-500">
            Accelerate Talent, Elevate Impact
          </h2>
          <p className="mb-6 text-white max-w-xl text-center">
            Custom-designed internship programs that create future-ready leaders
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {goldButtons.map((btn, i) => (
              <a href={btn.link} className="gold-button" key={i}>
                {btn.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-black px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, i) => (
            <div className="group" key={i}>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.heading}</h3>
              <p className="text-gray-400 transition-opacity duration-1000 delay-300 opacity-100">
                {feature.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-5 flex flex-col items-center bg-black px-4">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {metrics.map((metric, i) => (
            <span
              key={metric.label}
              className={`text-lg md:text-lg font-bold text-yellow-500 transition-opacity duration-700 ${showMetrics[i] ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 300}ms` }}
            >
              {metric.label}
            </span>
          ))}
        </div>
      </section>

      <Testimonials />

      <Blogs />
    </main>
  );
};
