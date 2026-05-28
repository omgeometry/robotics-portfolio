export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 mb-6">
          Channing Tan
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-8">
          Robotics &amp; Perception Engineer
        </p>

        {/* Bio */}
        <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Developing autonomous systems through <span className="text-blue-400">ROS2-based control architectures</span>,
          {" "}<span className="text-blue-400">computer vision pipelines</span>, and{" "}
          <span className="text-blue-400">machine learning systems</span>. 
          Experienced in real-time perception, embedded controls, and signal processing 
          for robotics applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            View Resume
          </a>
          <a
            href="https://github.com/omgeometry"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-700 text-slate-100 font-semibold rounded-lg hover:bg-slate-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/channing-tan-7b4731221/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-700 text-slate-100 font-semibold rounded-lg hover:bg-slate-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
