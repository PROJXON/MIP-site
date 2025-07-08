import React from 'react';

export const Main: React.FC = () => {
  return (
    <main className="flex-1 bg-gray-100">
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
          <div>
            <h3 className="text-xl font-bold mb-2">What We Offer:</h3>
            <p className="text-gray-400">
              Professional Development: Work closely with professional coaches to develop skills in Project Management, AI innovation and implementation, and achieve your career goals with personalized 1:1 coaching. Autonomy and Impact: Enjoy the freedom to work on projects that deliver direct results, in a remote and autonomous role.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Collaborative Environment</h3>
            <p className="text-gray-400">
              Engage with a dynamic team, working individually and collectively on diverse projects, ensuring you gain comprehensive experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Strategic Impact</h3>
            <p className="text-gray-400">
              Discover the power of tailored strategies and make your mark with PROJXON. As part of our team, you'll contribute to strategies that drive sustainable growth for our clients. This is your opportunity to forge long-lasting partnerships and be part of a team that values growth, productivity, and commercialization.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 flex flex-col items-center bg-black px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Ready to boost your productivity?</h2>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-200 hover:text-black transition"
        >
          Join PROJXON Now
        </a>
      </section>
    </main>
  );
}