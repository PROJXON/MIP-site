import React from 'react';
import dreamBig from '/assets/images/dream-big.jpg';

export const Companies: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 flex items-center justify-center mb-10"
        style={{
          backgroundImage: `url(${dreamBig})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-2 text-center drop-shadow-lg">
            Future Leaders. Built for your business
          </h1>
        </div>
      </div>

      {/* Anchor Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="#why"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Why host a MIP
        </a>
        <a
          href="#how"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          How It Works
        </a>
        <a
          href="#what"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          What You Get
        </a>
        <a
          href="#case"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Case Study
        </a>
        <a
          href="#faq"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          FAQ for Clients
        </a>
        <a
          href="#cta"
          className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
        >
          Build your Business
        </a>
      </nav>

      {/* Sections */}
      <section id="why" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Why host a MIP</h3>
        <p className="text-gray-300">
          Hosting a Momentum Internship Program (MIP) connects your business with emerging talent,
          fresh perspectives, and innovative solutions. It's a unique way to build your future
          workforce and make a real impact.
        </p>
      </section>
      <section id="how" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">How It Works</h3>
        <p className="text-gray-300">
          We match your business needs with motivated interns, provide onboarding and support, and
          ensure a seamless experience from project kickoff to completion. Our team handles the
          logistics so you can focus on results.
        </p>
      </section>
      <section id="what" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">What You Get</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Access to top student talent</li>
          <li>Fresh ideas and perspectives</li>
          <li>Support from the Momentum team</li>
          <li>Brand visibility among future leaders</li>
          <li>Potential long-term hires</li>
        </ul>
      </section>
      <section id="case" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Case Study</h3>
        <p className="text-gray-300">
          "Our MIP interns delivered a new marketing strategy that increased our engagement by 40%.
          We hired two of them full-time after the program!"
          <br />
          <span className="text-yellow-300">– Satisfied Client</span>
        </p>
      </section>
      <section id="faq" className="max-w-3xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">FAQ for Clients</h3>
        <p className="text-gray-300">
          Have questions? Check out our FAQ or contact us for more information about hosting a MIP.
        </p>
      </section>
      <section id="cta" className="max-w-3xl mx-auto mb-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">
          Ready to build your future team?
        </h3>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Design a MIP Experience
        </a>
      </section>
    </div>
  );
};
