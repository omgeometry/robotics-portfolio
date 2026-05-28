export default function Skills() {
  const skillCategories = [
    {
      category: "Robotics & Autonomy",
      skills: ["ROS2", "Gazebo", "Nav2", "RViz", "Isaac ROS", "VSLAM"],
    },
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "MATLAB", "Java", "R", "TypeScript"],
    },
    {
      category: "Machine Learning & Perception",
      skills: ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "Scikit-learn", "Torch Geometric"],
    },
    {
      category: "Controls & Signal Processing",
      skills: ["PID Control", "State-Space Methods", "Kalman Filtering", "FIR/IIR Filters", "DSP"],
    },
    {
      category: "Embedded Systems & Hardware",
      skills: ["Jetson Orin Nano", "ESP32", "Arduino", "CAN/UART", "SocketCAN", "PCB Design"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Linux", "Docker", "Git", "Slurm", "VSCode", "LTSpice"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Core competencies across robotics, software, and hardware engineering
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all"
            >
              <h3 className="text-lg font-bold text-slate-100 mb-4 pb-2 border-b border-slate-700">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-md border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
