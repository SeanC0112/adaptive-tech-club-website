import Layout from "@/components/Layout";
import { Users, GraduationCap, Wrench, Heart } from "lucide-react";

const teamMembers = [
  { name: "Alex Rivera", role: "Club President", emoji: "🔧" },
  { name: "Jordan Chen", role: "Vice President", emoji: "⚡" },
  { name: "Sam Patel", role: "Lead Engineer", emoji: "🛠️" },
  { name: "Taylor Kim", role: "Outreach Coordinator", emoji: "🤝" },
  { name: "Morgan Davis", role: "Documentation Lead", emoji: "📝" },
  { name: "Casey Johnson", role: "Faculty Advisor", emoji: "🎓" },
];

const About = () => (
  <Layout>
    <section className="container mx-auto py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
          About Our Club
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Adaptive Tech Club is a student-led organization dedicated to
          modifying toys and building assistive devices for children with
          disabilities. We believe that every child deserves access to play,
          creativity, and independence.
        </p>
      </div>

      {/* Mission Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        <div
          className="bg-card rounded-2xl p-8"
          style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To make play and daily activities more accessible by adapting toys
            and devices, while giving students hands-on experience in
            engineering, problem-solving, and community service.
          </p>
        </div>
        <div
          className="bg-card rounded-2xl p-8"
          style={{ boxShadow: "var(--card-shadow)" }}>
          <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="font-display font-bold text-xl mb-3">What We Learn</h3>
          <p className="text-muted-foreground leading-relaxed">
            Members develop skills in soldering, 3D printing, circuit design,
            woodworking, and assistive technology — all while making a real
            impact in our community.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="mb-20">
        <h2 className="font-display font-extrabold text-3xl text-center mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              step: "1",
              title: "We Receive a Request",
              desc: "Families, therapists, or schools reach out with a specific need.",
            },
            {
              icon: Wrench,
              step: "2",
              title: "We Design & Build",
              desc: "Club members collaborate to adapt or create the device.",
            },
            {
              icon: Heart,
              step: "3",
              title: "We Deliver Joy",
              desc: "The finished device is given to the child at no cost.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">
                Step {item.step}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="font-display font-extrabold text-3xl text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl p-6 text-center hover:scale-[1.03] transition-transform"
              style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="text-4xl mb-3">{member.emoji}</div>
              <h3 className="font-display font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
