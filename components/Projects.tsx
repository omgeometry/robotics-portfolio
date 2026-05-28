export default function Projects() {
  const projects = [
    {
      title: "NASA Lunabotics Competition",
      description:
        "Developed ROS2-based control architecture for autonomous lunar mining robot. Implemented multiplexer nodes, motor controller interfaces over CAN, and integrated Isaac ROS VSLAM with stereo camera pipelines for autonomous navigation.",
      tags: ["ROS2", "Computer Vision", "Autonomy", "Embedded Systems", "CAN Bus"],
      githubUrl: "https://github.com/TennesseeLunabotics/lunabot-2026",
      achievement: "14th out of 47 qualifying teams at UCF competition",
    },
    {
      title: "Traffic Accident Detection & Localization",
      description:
        "Multi-stage computer vision pipeline for traffic accident classification and spatiotemporal localization. Implemented 3D CNN architectures and integrated YOLO-based vehicle detection with temporal analysis.",
      tags: ["PyTorch", "OpenCV", "YOLO", "Deep Learning", "Video Analysis"],
      githubUrl: "https://github.com/KGagandeep2911/Project-524---Computer-Vision",
      pdfUrl: "/papers/Project_Computer_Vision.pdf",
    },
    {
      title: "Spiking Neural Networks for ASL Recognition",
      description:
        "Developed convolutional spiking neural network for American Sign Language recognition using neuromorphic event-camera data. Implemented leaky integrate-and-fire neuron architectures with SNNTorch.",
      tags: ["Neuromorphic Computing", "PyTorch", "Event Cameras", "SNNTorch"],
      githubUrl: "https://github.com/BrianStew/CS420FInalProject",
      pdfUrl: "/papers/SNN_Project.pdf",
    },
    {
      title: "AI-Driven FIR Filter Design",
      description:
        "Researched machine learning approaches for FIR digital filter optimization. Implemented XGBoost and Random Forest classifiers achieving 95% feasibility prediction accuracy with gradient-based coefficient optimization.",
      tags: ["Signal Processing", "XGBoost", "Optimization", "DSP", "PyTorch"],
      pdfUrl: "/papers/Expanding_the_Specification_Space_for_FIR_Filter_Designs_with_AI__1_.pdf",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Software and machine learning systems for robotics, perception, and signal processing
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.achievement && (
                <p className="text-blue-400 text-sm font-medium mb-4">
                  🏆 {project.achievement}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
