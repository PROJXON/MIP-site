import React, { useEffect, useMemo, useState } from 'react';

export const Main: React.FC = () => {
  // For animated impact numbers
  const metrics = useMemo(() => [
    { label: "100+ Interns Trained" },
    { label: "92% Conversion" },
    { label: "15 Partner Campuses" },
    { label: "9 Industries" },
  ], []);
  const [showMetrics, setShowMetrics] = useState([false, false, false, false]);

  useEffect(() => {
    // Animate metrics one after another
    metrics.forEach((_, i) => {
      setTimeout(() => {
        setShowMetrics(prev => {
          const updated = [...prev];
          updated[i] = true;
          return updated;
        });
      }, 400 * i);
    });
  }, [metrics]);

  return (
    <main className="flex-1 bg-black">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-12 bg-black px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Accelerate Talent. Elevate Impact</h2>
        <p className="mb-6 text-gray-300 max-w-xl text-center">
          Custom-designed internship programs that create future-ready leaders.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#companies"
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-base font-semibold hover:bg-yellow-400 transition text-center"
          >
            Design a MIP for My Company
          </a>
          <a
            href="#universities"
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-base font-semibold hover:bg-yellow-400 transition text-center"
          >
            Become a University Partner
          </a>
          <a
            href="#interns"
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-base font-semibold hover:bg-yellow-400 transition text-center"
          >
            Apply for An Internship
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-black px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* For Companies */}
          <div className="group">
            <h3 className="text-xl font-bold mb-2 text-white">
              For Companies
            </h3>
            <p className="text-gray-400 transition-opacity duration-1000 delay-300 opacity-100">
              Talent pipeline, innovation, intern ROI
            </p>
          </div>
          {/* For Universities */}
          <div className="group">
            <h3 className="text-xl font-bold mb-2 text-white">
              For Universities
            </h3>
            <p className="text-gray-400 transition-opacity duration-1000 delay-500 opacity-100">
              Experiential learning, career readiness
            </p>
          </div>
          {/* For Interns */}
          <div className="group">
            <h3 className="text-xl font-bold mb-2 text-white">
              For Interns
            </h3>
            <p className="text-gray-400 transition-opacity duration-1000 delay-700 opacity-100">
              Real-world growth, leadership, skill stacking
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-16 flex flex-col items-center bg-black px-4">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {metrics.map((metric, i) => (
            <span
              key={metric.label}
              className={`text-2xl md:text-3xl font-bold text-yellow-400 transition-opacity duration-700 ${showMetrics[i] ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 300}ms` }}
            >
              {metric.label}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}