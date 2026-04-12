import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowRight, Wrench, Cpu, Paintbrush } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const [filter, setFilter] = useState<"all" | "toy" | "device">("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            Our Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Browse a selection of items we've built or adapted. Please <br />
            <Link
              to="/Contact"
              className="text-muted-foreground text-primary hover:underline">
              contact us
            </Link>{" "}
            for information on building your own.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(["all", "toy", "device"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}>
              {cat === "all" ? "All" : categoryLabel[cat] + "s"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const Icon = categoryIcon[project.category];
            return (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
                style={{ boxShadow: "var(--card-shadow)" }}
                onClick={() =>
                  project.hasDocumentation &&
                  navigate(`/projects/${project.id}`)
                }>
                <div className="h-52 bg-muted flex items-center justify-center overflow-hidden">
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
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      {categoryLabel[project.category]}
                    </span>
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
