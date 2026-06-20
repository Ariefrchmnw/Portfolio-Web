import { projects } from '@/lib/portfolio-data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl space-y-12 px-6 py-16 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Portofolio</p>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Proyek Terbaru</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-400/30 transition duration-300">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>

            {/* Project Info */}
            <div className="relative space-y-4 p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
