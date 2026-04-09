import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Heart, Users, Lightbulb, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const stats = [
  { icon: Wrench, value: "300+", label: "Devices Adapted" },
  { icon: Users, value: "60+", label: "Club Members" },
  { icon: Heart, value: "100+", label: "Kids Helped" },
];

const values = [
  {
    icon: Heart,
    title: "Inclusive Play",
    description:
      "Every child deserves the joy of play. We adapt toys so no one is left out.",
  },
  {
    icon: Lightbulb,
    title: "Learning by Making",
    description:
      "Our members gain real engineering skills while making a tangible difference.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "We partner with families and therapists to create exactly what each child needs.",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Children playing with adapted toys"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container mx-auto py-24 md:py-36 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-background leading-tight mb-6 animate-fade-in-up">
          Making Play
          <br />
          Accessible for All
        </h1>
        <p
          className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}>
          We're a school club that modifies toys and builds assistive devices so
          every kid can play, create, and explore.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg hover:opacity-90 transition-opacity group">
            See Our Work
            <ArrowRight className="w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
          </Link>
          <Link
            to="/request"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-lg hover:opacity-90 transition-opacity group">
            Request a Device
            <ArrowRight className="w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="container mx-auto -mt-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-2xl p-8 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-display font-extrabold text-3xl text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="container mx-auto py-20">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-4">
        Why We Do This
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Our club combines engineering, compassion, and creativity to build a
        more inclusive world.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-card rounded-2xl p-8 hover:scale-[1.02] transition-transform"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto pb-10">
      <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
          Need a Device Adapted?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          We adapt toys and devices for free. Tell us what your child needs and
          we'll work to make it happen.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-lg hover:opacity-90 transition-opacity group">
          Submit a Request
          <ArrowRight className="w-0 group-hover:w-5 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
