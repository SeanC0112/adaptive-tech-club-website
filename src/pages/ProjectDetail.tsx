import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  CheckCircle2,
  Package,
  ListOrdered,
  List,
  ArrowRight,
  Boxes,
  Printer,
  Github,
} from "lucide-react";

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

        <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-8 text-center">
          {project.title}
        </h1>

        {/* Description + pictures, side by side at the top */}
        <div
          className={
            project.photos
              ? "grid md:grid-cols-2 gap-8 mb-12 items-start"
              : "mb-12"
          }>
          <div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {project.description}
            </p>
            {project.overview && (
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.overview}
              </p>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                <Github className="w-4 h-4" /> View files on GitHub
              </a>
            )}
          </div>
          {project.photos && (
            <div className="columns-2 gap-3">
              {project.photos.map((photo, i) => (
                <a
                  key={i}
                  href={photo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3 break-inside-avoid">
                  <img
                    src={photo}
                    alt={`${project.title} photo ${i + 1}`}
                    className="w-full rounded-xl"
                  />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        {project.features && (
          <div
            className="bg-card rounded-2xl p-8 mb-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Features</h2>
            </div>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Materials */}
        {project.materials && (
          <div
            className="bg-card rounded-2xl p-8 mb-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-4">
              <List className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Materials</h2>
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

        {/* Parts */}
        {project.parts && (
          <div
            className="bg-card rounded-2xl p-8 mb-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-4">
              <Boxes className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Parts Overview</h2>
            </div>
            <ul className="space-y-4">
              {project.parts.map((part, i) => (
                <li key={i}>
                  <h3 className="font-display font-bold text-sm mb-1">
                    {part.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {part.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Print Settings */}
        {project.printSettings && (
          <div
            className="bg-card rounded-2xl p-8 mb-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-4">
              <Printer className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Print Settings</h2>
            </div>
            <ul className="space-y-2">
              {project.printSettings.map((setting, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">
                    {setting.part}:
                  </span>{" "}
                  {setting.setting}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions */}
        {project.steps && (
          <div
            className="bg-card rounded-2xl p-8 mb-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <ListOrdered className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Instructions</h2>
            </div>
            <ol className="space-y-8">
              {project.steps.map((step, i) => (
                <li key={i}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <h3 className="font-display font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.image && (
                    <a
                      href={step.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block">
                      <img
                        src={step.image}
                        alt={`${step.title} illustration`}
                        className="rounded-xl w-full max-w-md"
                      />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProjectDetail;
