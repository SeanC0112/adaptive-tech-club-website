import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { newClubKit, KitBlock, KitSection } from "@/data/newClubKit";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";

const renderBlock = (block: KitBlock, i: number) => {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-display font-bold text-2xl mt-10 mb-3 first:mt-0">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="font-display font-bold text-lg mt-6 mb-2">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {block.text}
        </p>
      );
    case "def":
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          <span className="font-semibold text-foreground">{block.term}</span>{" "}
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={i}
          className="list-disc pl-5 space-y-2 mb-4 text-muted-foreground leading-relaxed marker:text-primary">
          {block.items.map((item, j) =>
            typeof item === "string" ? (
              <li key={j}>{item}</li>
            ) : (
              <li key={j}>
                {item.text}
                <ul className="list-disc pl-5 space-y-2 mt-2 marker:text-primary">
                  {item.items.map((sub, k) => (
                    <li key={k}>{sub}</li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      );
    default:
      return null;
  }
};

const SidebarNav = ({ activeSlug }: { activeSlug: string }) => (
  <nav aria-label="New Club Kit sections" className="flex flex-col gap-1">
    {newClubKit.map((section) => {
      const isActive = section.slug === activeSlug;
      return (
        <Link
          key={section.slug}
          to={`/newclub/${section.slug}`}
          aria-current={isActive ? "page" : undefined}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}>
          <span aria-hidden="true">{section.emoji}</span>
          {section.label}
        </Link>
      );
    })}
  </nav>
);

const NewClub = () => {
  const { slug } = useParams();
  const activeSlug = slug ?? newClubKit[0].slug;
  const index = newClubKit.findIndex((s) => s.slug === activeSlug);
  const section: KitSection | undefined = newClubKit[index];

  if (!section) {
    return (
      <Layout>
        <div className="container mx-auto py-24 text-center">
          <h1 className="font-display font-extrabold text-3xl mb-4">
            Section Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            That page of the New Club Kit doesn't exist.
          </p>
          <Link
            to="/newclub"
            className="text-primary font-medium hover:underline">
            ← Back to the New Club Kit
          </Link>
        </div>
      </Layout>
    );
  }

  const prev = index > 0 ? newClubKit[index - 1] : null;
  const next = index < newClubKit.length - 1 ? newClubKit[index + 1] : null;

  return (
    <Layout>
      <div className="container mx-auto py-10 md:py-12">
        <div className="md:grid md:grid-cols-[230px_1fr] md:gap-12">
          {/* Sidebar */}
          <aside className="mb-8 md:mb-0 md:sticky md:top-24 md:self-start">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-display font-extrabold text-lg">
                New Club Kit
              </span>
            </div>
            {/* Mobile: collapsible. Desktop: always visible. */}
            <details className="md:hidden bg-card rounded-xl p-2" style={{ boxShadow: "var(--card-shadow)" }}>
              <summary className="px-2 py-1 cursor-pointer font-medium text-sm select-none">
                {section.emoji} {section.label}
              </summary>
              <div className="mt-2">
                <SidebarNav activeSlug={activeSlug} />
              </div>
            </details>
            <div className="hidden md:block">
              <SidebarNav activeSlug={activeSlug} />
            </div>
          </aside>

          {/* Content */}
          <article className="min-w-0 max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">
              New Club Kit
            </p>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl mb-6 flex items-center gap-3">
              <span aria-hidden="true">{section.emoji}</span>
              {section.title}
            </h1>

            {section.placeholder && (
              <p className="mb-6 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                This section is still being written — the text below is
                placeholder content.
              </p>
            )}

            <div>{section.blocks.map(renderBlock)}</div>

            {/* Prev / Next */}
            <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-between">
              {prev ? (
                <Link
                  to={`/newclub/${prev.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>
                    <span className="block text-xs text-muted-foreground/70">
                      Previous
                    </span>
                    {prev.emoji} {prev.label}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={`/newclub/${next.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors sm:text-right">
                  <span>
                    <span className="block text-xs text-muted-foreground/70">
                      Next
                    </span>
                    {next.emoji} {next.label}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NewClub;
