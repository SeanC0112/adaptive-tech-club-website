import Layout from "@/components/Layout";
import { Lightbulb, Smile, Brain, HandHeart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Smile,
    title: "Play Is a Right, Not a Privilege",
    description:
      "The UN Convention on the Rights of the Child recognizes play as a fundamental right. Yet many commercial toys aren't accessible to children with motor, sensory, or cognitive disabilities. Adapting toys removes those barriers so every child can experience the joy of play.",
    primary: true,
  },
  {
    icon: Brain,
    title: "Play Drives Development",
    description:
      "Play isn't just fun — it's how children develop motor skills, language, social abilities, and problem-solving. When a child can't interact with toys independently, they miss out on critical developmental milestones. An adapted switch or modified grip can unlock that growth.",
    primary: false,
  },
  {
    icon: HandHeart,
    title: "Independence & Confidence",
    description:
      "Being able to activate a toy on their own — even with a simple switch press — gives a child agency. That moment of cause and effect ('I did that!') builds self-esteem and a sense of control that carries into every part of their life.",
    primary: false,
  },
  {
    icon: Lightbulb,
    title: "Inclusion Starts Early",
    description:
      "When children with disabilities can play alongside their peers with the same toys, it fosters empathy, friendship, and belonging. Adapted toys aren't just tools — they're bridges between kids who might otherwise be separated by ability.",
    primary: true,
  },
];

const stats = [
  {
    number: "1 in 6",
    label: "children in the U.S. have a developmental disability",
  },
  {
    number: "93%",
    label: "of commercial toys are inaccessible without modification",
  },
  {
    number: "$0",
    label: "is what families pay for our adapted devices",
  },
  {
    number: "15 min",
    label: "is all some adaptations take to change a child's world",
  },
];

const WhyItMatters = () => (
  <Layout>
    <section className="container mx-auto py-16">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
          Why Adapting Toys Matters
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A simple modification — a bigger button, an adaptive switch, a custom
          grip — can transform a child's world. Here's why this work is so
          important.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-2xl p-6 text-center"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="font-display font-extrabold text-3xl text-primary mb-2">
              {stat.number}
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Reasons */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {reasons.map((reason) =>
          reason.primary ? (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ) : (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ),
        )}
      </div>

      {/* What is switch adaptation */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="font-display font-extrabold text-3xl text-center mb-8">
          What Is Switch Adaptation?
        </h2>
        <div
          className="bg-card rounded-2xl p-8"
          style={{ boxShadow: "var(--card-shadow)" }}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Switch adaptation is the most common modification we perform. It
            involves soldering a standard 3.5mm audio jack onto a
            battery-operated toy so that it can be activated by an external
            adaptive switch instead of (or in addition to) its built-in button.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Adaptive switches come in many forms — big buttons, sip-and-puff
            devices, head switches, and more — each designed for different
            abilities. By adding a jack, we make any toy compatible with
            whatever switch a child already uses.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The process typically takes 15–30 minutes and costs under $1 in
            parts. It's a small change with a massive impact.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="font-display font-extrabold text-2xl mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-muted-foreground mb-6">
          Request an adapted toy for a child, or reach out to start a chapter at
          your school.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/request"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-display font-bold hover:opacity-90 transition-opacity">
            Request a Toy <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default WhyItMatters;
