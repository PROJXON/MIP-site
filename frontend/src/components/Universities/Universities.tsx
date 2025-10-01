import React from 'react';
import japaneseFight from '/assets/images/japanese-fight.jpg';

export const Universities: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 flex items-center justify-center mb-10"
        style={{
          backgroundImage: `url(${japaneseFight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2 text-center drop-shadow-lg">
            Industry-integrated learning that works
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-1 text-center">
            Bring applied experience to your students
          </h2>
        </div>
      </div>

      {/* Anchor Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="#benefits"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          University Benefits
        </a>
        <a
          href="#journey"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Intern Journey
        </a>
        <a
          href="#stories"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Sample Success Stories
        </a>
        <a
          href="#faq"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          FAQ for Universities
        </a>
        <a
          href="#cta"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Become A Partner
        </a>
      </nav>

      {/* Sections */}
      <section id="benefits" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">University Benefits</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Enhance student employability with real-world projects</li>
          <li>Strengthen university-industry partnerships</li>
          <li>Boost student engagement and retention</li>
          <li>Access to exclusive industry insights and mentors</li>
          <li>Showcase your institution as a leader in applied learning</li>
        </ul>
      </section>
      <section id="journey" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Intern Journey</h3>
        <p className="text-gray-300">
          Students participate in hands-on projects, collaborate with industry professionals, and
          receive mentorship throughout their internship. The journey includes onboarding, project
          work, regular feedback, and a final showcase of achievements.
        </p>
      </section>
      <section id="stories" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Sample Success Stories</h3>
        <p className="text-gray-300">
          "Our students gained invaluable experience and landed top jobs after graduation thanks to
          the Momentum Internship Program." <br />
          <span className="text-yellow-300">– University Partner</span>
        </p>
      </section>
      <section id="faq" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">FAQ for Universities</h3>
        <p className="text-gray-300">
          Have questions? Check out our FAQ or contact us for more information about partnering with
          Momentum.
        </p>
      </section>
      <section id="cta" className="max-w-3xl mx-auto mb-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">
          Ready to bring Momentum to your campus?
        </h3>
        <a href="/contact" className="inline-block mt-4 gold-button">
          Become a University Partner
        </a>
      </section>
    </div>
  );
};
