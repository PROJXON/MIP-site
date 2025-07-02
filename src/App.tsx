import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-full overflow-x-hidden">
      {/* Header */}
      <header className="py-8 text-center border-b border-gray-800 bg-black px-4">
      {/* logo */}
        <h1 className="text-4xl md:text-5xl text-yellow-500 font-bold tracking-wide">Momentum Internship Program</h1>
        <p className="mt-2 text-lg md:text-xl text-gray-400">Designed for Learning. Structured for Success.</p>
        <p className="mt-2 text-md md:text-lg text-gray-400">
          Empowering professionals with the tools, experience, and mentorship needed to thrive in fast-paced, real-world environments. This isn’t busy work, it’s a launchpad for high-performance careers.
        </p>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-12 bg-black px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Future-Proof Your Career</h2>
        <p className="mb-6 text-gray-300 max-w-xl text-center">
          At PROJXON, we help young professionals realize their full potential while building their personal brand and understanding their value. Are you ready to launch your career in strategic consulting and digital marketing?
          <br /><br />
          Our 180-day Momentum Internship Program offers passionate and innovative individuals the opportunity to work on real consulting projects and collaborate with participants from across the US in various industries, including Tech, Health + Wellness, E-commerce, Non-Profit, and Professional Services. You'll gain invaluable hands-on experience while making a tangible impact.
        </p>
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

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 bg-black px-4">
        &copy; 2025 PROJXON. All rights reserved.
      </footer>
    </div>
  )
}

export default App
