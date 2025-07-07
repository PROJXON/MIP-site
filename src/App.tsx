import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-full overflow-x-hidden">
      {/* Header with Nav */}
      <header className="py-4 border-b border-gray-800 bg-black px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* Replace the src with your logo path if available */}
            <img
              src="/projxon-mip-logo.png"
              alt="Yellow and black PROJXON logo with stylized X, modern and bold, set against a dark background, conveying innovation and professionalism"
              className="h-40 w-40 mr-2"
            />
            {/* <span className="text-2xl md:text-3xl text-yellow-500 font-bold tracking-wide">PROJXON</span> */}
          </div>
          {/* Nav Links */}
          <nav>
            <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base font-medium">
              <li>
                <a href="#companies" className="hover:text-yellow-400 transition">For Companies</a>
              </li>
              <li>
                <a href="#universities" className="hover:text-yellow-400 transition">For Universities</a>
              </li>
              <li>
                <a href="#interns" className="hover:text-yellow-400 transition">For Interns</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-12 bg-black px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Accelerate Talent. Elevate Impact</h2>
        <p className="mb-6 text-gray-300 max-w-xl text-center">
           Custom-designed internship programs that create future-ready leaders.
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
      <footer className="border-t border-gray-800 bg-black px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Logo & Legal */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <img
              src="/projxon-mip-logo.png"
              alt="Yellow and black PROJXON logo with stylized X, modern and bold, set against a dark background, conveying innovation and professionalism"
              className="h-16 w-16 mr-2"
              />
              {/* <span className="text-xl text-yellow-500 font-bold tracking-wide">PROJXON</span> */}
            </div>
            <div className="flex space-x-4 text-gray-400 text-sm">
              <a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="/terms" className="hover:text-yellow-400">Terms of Service</a>
            </div>
            <div className="mt-2 text-gray-500 text-xs">&copy; 2025 PROJXON. All rights reserved.</div>
          </div>
          {/* Right: Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex space-x-4 mb-1">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-yellow-400"
              >
                <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.002 3.6 4.604v5.592z"/>
                </svg>
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <span>Contact: </span>
              <a href="mailto:info@projxon.com" className="hover:text-yellow-400">info@projxon.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App