import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowRight, Wrench, Cpu, Paintbrush } from "lucide-react";
import { useState } from "react";

const categoryIcon = {
  toy: Wrench,
  device: Cpu,
  tool: Paintbrush,
};

const categoryLabel = {
  toy: "Toy",
  device: "Device",
  tool: "Tool",
};

const complexityColor = {
  simple: "bg-primary/10 text-primary",
  intermediate: "bg-secondary/20 text-secondary",
  advanced: "bg-accent/15 text-accent",
};

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "toy" | "device" | "tool">(
    "all",
  );
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
            Browse everything we've built and adapted. Click on projects with
            documentation to see build guides.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(["all", "toy", "device", "tool"] as const).map((cat) => (
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
                className="bg-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="h-40 bg-muted flex items-center justify-center">
                  <Icon className="w-12 h-12 text-muted-foreground/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${complexityColor[project.complexity]}`}>
                      {project.complexity}
                    </span>
                    <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                      {categoryLabel[project.category]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {project.hasDocumentation ? (
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      View Build Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Documentation coming soon
                    </span>
                  )}
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
