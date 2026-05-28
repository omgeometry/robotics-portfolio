export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-100 mb-8 text-center">
          About
        </h2>

        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I'm a robotics engineer specializing in <strong className="text-blue-400">autonomous systems</strong>,
            {" "}<strong className="text-blue-400">perception pipelines</strong>, and{" "}
            <strong className="text-blue-400">real-time control systems</strong>. 
            My work spans computer vision, machine learning infrastructure, and embedded systems integration.
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Education</h3>
            <div className="space-y-2">
              <p className="text-slate-200">
                <strong>The University of Tennessee, Knoxville</strong>
              </p>
              <p className="text-slate-300">
                B.S. Electrical Engineering + B.A. Physics (May 2026)
              </p>
              <p className="text-slate-300">GPA: 3.83 / 4.00</p>
              <p className="text-blue-400 font-medium mt-2">
                ⚡ Completed dual degree program in 2.5 years
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-100 mb-4">Experience</h3>
            <div className="space-y-3">
              <p className="text-slate-200">
                <strong>Oak Ridge National Laboratory</strong> — Computational Urban Sciences Group
              </p>
              <p className="text-slate-400 text-base">Jun 2025 - Aug 2025</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 text-base mt-2">
                <li>Benchmarked spatiotemporal forecasting methods using PyTorch and TensorFlow</li>
                <li>Developed graph neural network encoding methods for large-scale spatial forecasting</li>
                <li>Reduced forecasting RMSE by 6.7% through architecture improvements</li>
                <li>Presented research at Smoky Mountain Conference 2025</li>
              </ul>
            </div>
          </div>

          <p>
            My engineering approach emphasizes <strong className="text-blue-400">interdisciplinary collaboration</strong>,
            {" "}<strong className="text-blue-400">systems-level thinking</strong>, and{" "}
            <strong className="text-blue-400">practical implementation</strong>. 
            I'm driven by the challenge of building reliable autonomous systems that bridge 
            theoretical concepts with real-world deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
