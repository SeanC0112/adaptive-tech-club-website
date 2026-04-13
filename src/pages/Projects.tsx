import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowRight, Wrench, Cpu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import projectsImage from "@/assets/projects4.jpeg";

const categoryIcon = {
  toy: Wrench,
  device: Cpu,
};

const categoryLabel = {
  toy: "Toy",
  device: "Device",
};

const Projects = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState<Set<string>>(new Set());

  const toggleFilter = (cat: string) => {
    setFilters((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const filtered = projects.filter((p) => {
    if (filters.size === 0) return true;
    const categoryMatch = filters.has(p.category);
    const completedMatch = filters.has("completed") && !p.inProgress;
    if (
      filters.has("completed") &&
      (filters.has("toy") || filters.has("device"))
    ) {
      return categoryMatch && !p.inProgress;
    }
    return categoryMatch || completedMatch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projectsImage}
            alt="Children playing with adapted toys"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80 sm:bg-foreground/60" />
        </div>
        <div className="relative container mx-auto pt-[10px] md:py-[40px] text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-background leading-tight sm:mb-52 animate-fade-in-up">
            Our Projects
          </h1>
          <p
            className="text-background/80 text-lg mb-6 sm:mb-0 md:text-xl max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}>
            Catalogue of select items we've built or adapted. This shows a small
            sampling of the hundreds of types of toys we have adapted, as
            essentially any electric toy can be adapted. Please{" "}
            <Link to="/Contact" className="text-[#3b82f6] hover:underline">
              contact us
            </Link>{" "}
            for information on building your own.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(["toy", "device", "completed"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filters.has(cat)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}>
              {cat === "completed" ? "Completed" : categoryLabel[cat] + "s"}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {filtered.map((project) => {
            const Icon = categoryIcon[project.category];
            return (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer w-[30%]"
                style={{
                  minWidth: "350px",
                  maxWidth: "400",
                  boxShadow: "var(--card-shadow)",
                }}
                onClick={() =>
                  project.hasDocumentation &&
                  navigate(`/projects/${project.id}`)
                }>
                <div className="h-52 bg-muted flex items-center justify-center overflow-hidden ">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon className="w-12 h-12 text-muted-foreground/40" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                        {categoryLabel[project.category]}
                      </span>
                      {project.inProgress && (
                        <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                          In Progress
                        </span>
                      )}
                    </div>
                    {project.hasDocumentation ? (
                      <span className="inline-flex items-center gap-3 text-sm font-medium text-primary">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        Documentation coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
