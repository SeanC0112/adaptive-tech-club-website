import Layout from "@/components/Layout";
import {
  Lightbulb,
  Smile,
  Brain,
  HandHeart,
  ArrowRight,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import videoATC from "@/assets/atcvid.mp4";

const reasons = [
  {
    icon: HandHeart,
    title: "Independence & Developement",
    description:
      "Being able to activate a toy on their own gives a child a powerful sense of agency. That “I did that!” moment builds confidence and self-esteem. At the same time, play is how children naturally develop motor skills, language, social abilities, and problem-solving.",
    primary: false,
  },
  {
    icon: Brain,
    title: "Learning Life Skills",
    description:
      "Switch and joystick adapted toys provide motivation for children to learn to interact with the world in ways that they will use every day for the rest of their lives. Joysticks and switches are often used to operate computers, control powered wheelchairs, and communicate with assistive devices.",
    primary: false,
  },
  {
    icon: DollarSign,
    title: "Removing Financial Barriers",
    description:
      "An average adapted toy that costs $15 unadapted will be sold for $70 comercially and accessible switches cost a minimum of $75. Due to the immense costs of other assistive technologies, many families and schools lack funding for expensive adapted toys, switches, or custom devices. Our club addresses this inequality by providing free assistive technology to any child with a disability.",
    primary: true,
  },
  {
    icon: Smile,
    title: "What Members Learn",
    description:
      "Members build skills in soldering, 3D modeling, 3D printing, circuitry, and human-centered design—channeling their energy away from low-impact personal projects and into work that truly matters. By collaborating with occupational therapists, they create technology with real-world impact while gaining empathy and meaningful, hands-on experience in a supportive community.",
    primary: true,
  },
];

const stats = [
  {
    number: "$0",
    label: "is what families pay for our adapted devices",
  },
  {
    number: "$70 vs $20",
    label: "is the price of a comercial adapted toy versus an ATC adapted toy",
  },
  {
    number: "$75 vs $4",
    label:
      "is the cost of a comercial accessible button versus one made by ATC",
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
          Why Our Work Matters
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A simple modification can transform a child's world, not only in the
          momentary joy of accessible play, but in the life-long learning it
          develops.
        </p>
      </div>

      {/* Stats */}
      <h2 className="font-display font-extrabold text-3xl text-center mb-8">
        Quick Look
      </h2>
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
      <h2 className="font-display font-extrabold text-3xl text-center mb-8">
        Detailed Overview
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {reasons.map((reason) =>
          reason.primary ? (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {reason.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ) : (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {reason.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ),
        )}
      </div>

      {/* What is switch adaptation/joystick adaptation */}
      <h2 className="font-display font-extrabold text-3xl text-center mb-8">
        Toy Adaptation
      </h2>
      <div className="flex justify-center">
        <div className="w-[600px] h-[700px] mb-20 ">
          <video
            src={videoATC}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Switch Adaptation */}
          <div>
            <div
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <h2 className="font-display font-extrabold text-3xl text-center mb-4">
                What Is Switch Adaptation?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Switch adaptation is the most common modification we perform. It
                involves soldering a standard 3.5mm audio jack onto a
                battery-operated toy so that it can be activated by an external
                adaptive switch instead of (or in addition to) its built-in
                button.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adaptive switches come in many forms — big buttons, sip-and-puff
                devices, head switches, and more — each designed for different
                abilities. By adding a jack, we make any toy compatible with
                whatever switch a child already uses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The process typically takes 15–30 minutes and costs only $2 in
                parts, in addition to the cost of the toy itself. It's a small
                change with a massive impact.
              </p>
            </div>
          </div>

          {/* Joystick Adaptation */}
          <div>
            <div
              className="bg-card rounded-2xl p-8"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <h2 className="font-display font-extrabold text-3xl text-center mb-4">
                What Is Joystick Adaptation?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Joystick adaptation involves wiring a joystick interface to
                multiple inputs on a toy so that it can be controlled in four
                directions—forward, backward, left, and right—rather than
                activated by a single button.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These inputs reflect how both cars and powered wheelchairs are
                controlled, letting kids handle more complex toys like RC
                vehicles while developing a crucial skill in a fun, low stakes
                setting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While slightly more involved than a standard switch adaptation,
                joystick adaptation transforms toys into tools for independence,
                exploration, and growth.
              </p>
            </div>
          </div>
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
            className="inline-flex items-center px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-display font-bold hover:opacity-90 transition-opacity group">
            Request a Toy
            <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity group">
            Contact Us
            <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default WhyItMatters;
