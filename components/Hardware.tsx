export default function Hardware() {
  const hardwareProjects = [
    {
      period: "2024 - 2026",
      title: "NASA Lunabotics Competition",
      role: "Controls Systems Lead",
      organization: "Tennessee Lunabotics",
      description:
        "Integrated embedded systems for autonomous lunar mining robot. Managed communication between Jetson Orin Nano, ESP32 microcontrollers, and motor drivers for competition deployment.",
      achievements: [
        "Configured Jetson Orin Nano environment with Isaac ROS integration",
        "Developed CAN bus and UART communication pipelines",
        "Integrated motor driver systems (MD20A, Spark MAX)",
        "System-level debugging and validation for competition reliability",
        "Team placed 14th out of 47 qualifying teams at UCF",
      ],
      skills: ["Jetson Orin", "ESP32", "CAN/UART", "SocketCAN", "Hardware Integration", "ROS2"],
      image: "/images/lunabotics_wiring.png",
    },
    {
      period: "2021 - 2024",
      title: "FRC Competition Robotics",
      role: "Electrical Systems Lead",
      organization: "Team 3140",
      description:
        "Designed and maintained electrical systems for FRC competition robots. Implemented redundancy strategies that achieved zero electrical failures during competition operation.",
      achievements: [
        "Electrical system architecture and power distribution design",
        "Motor controller integration (Spark MAX, RoboRIO)",
        "Sensor wiring, signal conditioning, and PCB design",
        "Competition debugging and rapid troubleshooting",
        "Team achieved 2nd place alliance captain placement (2024 season)",
      ],
      skills: ["LTSpice", "Soldering", "CAN Bus", "Power Systems", "RoboRIO"],
    },
  ];

  return (
    <section
      id="hardware"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-100 mb-4 text-center">
          Hardware &amp; Prototyping Experience
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Building reliable systems from concept to competition. Hands-on experience with 
          electrical design, embedded integration, and hardware debugging.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>

          {hardwareProjects.map((project, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 md:transform md:translate-x-1/2"></div>

              {/* Content card */}
              <div className="ml-8 md:ml-0 bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all">
                {/* Period badge */}
                <div className={`inline-block mb-3 ${index % 2 === 0 ? "md:float-right md:ml-3" : "md:float-left md:mr-3"}`}>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-mono rounded border border-blue-500/30">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-2 clear-both">
                  {project.title}
                </h3>
                <p className="text-blue-400 font-semibold mb-1">
                  {project.role}
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  {project.organization}
                </p>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <p className="text-slate-200 font-semibold mb-2 text-sm">Key Work:</p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Image */}
                {project.image && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-slate-700">
                    <img
                      src={project.image}
                      alt={`${project.title} - Wiring diagram`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
