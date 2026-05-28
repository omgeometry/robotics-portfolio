export default function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">
          Resume
        </h2>
        <p className="text-slate-400 text-center mb-8">
          Download or view my full resume
        </p>

        {/* Download Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2 justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Resume
          </a> */}
          <a
            href="/resume.pdf"
            download="Channing_Tan_Resume.pdf"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2 justify-center"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>

        {/* Quick Summary */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-slate-100 mb-4">Quick Summary</h3>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="text-blue-400 font-semibold mb-1">Education</h4>
              <p>B.S. Electrical Engineering + B.A. Physics</p>
              <p className="text-sm text-slate-400">University of Tennessee, Knoxville (May 2026)</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-1">Experience</h4>
              <p>Oak Ridge National Laboratory — Computational Urban Sciences (Summer 2025)</p>
              <p className="text-sm text-slate-400">NASA Lunabotics Competition — Controls Lead (2024-2026)</p>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-1">Focus Areas</h4>
              <p>Robotics • Computer Vision • Machine Learning • Controls • Embedded Systems</p>
            </div>
          </div>
        </div>

        {/* PDF Preview - embedded */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 overflow-hidden">
          <div className="aspect-[8.5/11] bg-slate-900 rounded flex items-center justify-center">
            <iframe
              src="/resume.pdf"
              className="w-full h-full rounded"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
