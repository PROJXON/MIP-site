import React from 'react';
import goldNotecard from '/assets/images/gold-notecard.jpg';

export const Candidates: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 flex items-center justify-center mb-10"
        style={{
          backgroundImage: `url(${goldNotecard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2 text-center drop-shadow-lg">
            Launch your career with Momentum
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-1 text-center">
            More than an Internship
          </h2>
          <p className="text-md md:text-lg text-gray-200 text-center">
            Real clients, Real projects, Real growth
          </p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="#who"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Who It's For
        </a>
        <a
          href="#benefits"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Program Benefits
        </a>
        <a
          href="#learn"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          What You'll Learn
        </a>
        <a
          href="#voices"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Intern Voices
        </a>
        <a
          href="#faq"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          FAQ for Interns
        </a>
        <a
          href="#apply"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          How To Apply
        </a>
      </nav>

      {/* Sections */}
      <section id="who" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Who It's For</h3>
        <p className="text-gray-300">
          This program is designed for ambitious students and recent graduates who want to gain
          real-world experience, build their professional network, and make a tangible impact.
        </p>
      </section>
      <section id="benefits" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Program Benefits</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Work with real clients and projects</li>
          <li>Mentorship from industry professionals</li>
          <li>Remote and flexible work environment</li>
          <li>Build your resume and portfolio</li>
          <li>Networking opportunities</li>
          <li>Personal and professional growth</li>
        </ul>
      </section>
      <section id="learn" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">What You'll Learn</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Project management and teamwork</li>
          <li>Client communication and consulting</li>
          <li>Problem-solving and critical thinking</li>
          <li>Industry-specific skills</li>
          <li>Professionalism and leadership</li>
        </ul>
      </section>
      <section id="voices" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Intern Voices</h3>
        <p className="text-gray-300">
          "Momentum gave me the confidence and skills to succeed in my first job after graduation."{' '}
          <br />
          <span className="text-yellow-300">– Former Intern</span>
        </p>
      </section>

      <section id="faq" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">FAQ for Interns</h3>
        <p className="text-gray-300">
          Have questions? Check out our FAQ or contact us for more information.
        </p>
      </section>
      <section id="apply" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">How To Apply</h3>
        <p className="text-gray-300">
          Ready to launch your career? Click the button below to start your application!
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};
