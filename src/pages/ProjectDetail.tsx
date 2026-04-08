import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { ArrowLeft, CheckCircle2, Package, ListOrdered } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project || !project.hasDocumentation) {
    return (
      <Layout>
        <div className="container mx-auto py-24 text-center">
          <h1 className="font-display font-extrabold text-3xl mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            This project doesn't exist or doesn't have documentation yet.
          </p>
          <Link
            to="/projects"
            className="text-primary font-medium hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="container mx-auto py-16 max-w-3xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
          {project.title}
        </h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          {project.summary}
        </p>

        {/* Materials */}
        {project.materials && (
          <div
            className="bg-card rounded-2xl p-8 mb-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">
                Materials Needed
              </h2>
            </div>
            <ul className="space-y-2">
              {project.materials.map((material, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {material}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps */}
        {project.steps && (
          <div
            className="bg-card rounded-2xl p-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <ListOrdered className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Build Steps</h2>
            </div>
            <div className="space-y-6">
              {project.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProjectDetail;
