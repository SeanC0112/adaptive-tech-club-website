import Layout from "@/components/Layout";
import { useRef, useEffect } from "react";
import {
  Users,
  GraduationCap,
  Handshake,
  Wrench,
  NotebookPen,
  CircleDollarSign,
  Heart,
} from "lucide-react";

const STEM = 32;
const DOT_R = 7;

const teamMembers = [
  { name: "Ilana Zimmerman", role: "Founder & Co-lead", emoji: "💡" },
  { name: "Avery Belenson", role: "Co-lead", emoji: "🧩" },
  { name: "Sean Coleman", role: "Co-lead", emoji: "⚙️" },
  { name: "Andrew Kleindolph", role: "Faculty Advisor", emoji: "🎓" },
];

const links: Record<string, string> = {
  "toy lending library":
    "https://sites.google.com/ousd.org/switch-toy-library/home?authuser=0",
};

function renderLinkedText(text: string) {
  const parts: (string | JSX.Element)[] = [];

  let remaining = text;

  Object.entries(links).forEach(([phrase, url]) => {
    const split = remaining.split(phrase);

    if (split.length > 1) {
      parts.push(split[0]);

      parts.push(
        <a
          key={url + phrase}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary/60 hover:text-primary transition-colors hover:underline">
          {phrase}
        </a>,
      );

      remaining = split.slice(1).join(phrase);
    }
  });

  parts.push(remaining);

  return parts;
}

const TIMELINE_EVENTS = [
  {
    date: "Fall 2023",
    title: "It all begins",
    desc: "Club founder Ilana starts working Oakland Unified School District occupational therapist Chantal Guité",
    above: true,
  },
  {
    date: "Fall 2024",
    title: "Club founded",
    desc: "The ATC officially is officially created at Lick-Wilmerding High School",
    above: false,
  },
  {
    date: "Fall 2025",
    title: "Lending library",
    desc: "ATC toys enable OUSD to create a toy lending library for students to bring home",
    above: true,
  },
  {
    date: "Fall 2025",
    title: "Grant received",
    desc: "Youth Empowerment Fund grant from the SF YMCA funds more projects",
    above: false,
  },
  {
    date: "Winter 2026",
    title: "Expanding reach",
    desc: "Working with the Special Olympics, we expanded our impact to the San Francisco Unified School District as well as schools in the Peninsula",
    above: true,
  },
];

function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const events = TIMELINE_EVENTS;
    const n = events.length;
    const totalW = container.getBoundingClientRect().width;
    const COMPRESSION = 0.75;

    const spacing = (totalW / (n - 1)) * COMPRESSION;
    const offsetX = (totalW - spacing * (n - 1)) / 2;

    const positions = events.map((_, i) => i * spacing);

    const cards = events.map((e) => {
      const card = document.createElement("div");

      card.style.cssText = `
        background: var(--card);
        border: 1px solid hsl(var(--border));
        border-radius: 12px;
        padding: 12px 16px;
        text-align: center;
        position: absolute;
        width: ${spacing - 8}px;
        box-shadow: var(--card-shadow);
        white-space: normal;
      `;

      const desc = renderLinkedText(e.desc);

      const descHTML = desc
        .map((d) =>
          typeof d === "string"
            ? d
            : `<a href="${d.props.href}" target="_blank" rel="noopener noreferrer" style="color:hsl(var(--primary));transition:color 0.3s ease;cursor:pointer;" onmouseover="this.style.textDecoration='underline';" onmouseout="this.style.textDecoration='none';">
                ${d.props.children}
              </a>`,
        )
        .join("");

      card.innerHTML = `
        <div style="font-size:11px;font-weight:600;color:hsl(var(--primary));text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">
          ${e.date}
        </div>
        <div style="font-size:13px;font-weight:600;color:hsl(var(--foreground));margin-bottom:4px;">
          ${e.title}
        </div>
        <div style="font-size:11px;color:hsl(var(--muted-foreground));line-height:1.5;">
          ${descHTML}
        </div>
      `;

      container.appendChild(card);
      return card;
    });

    requestAnimationFrame(() => {
      const wrappedHeights = cards.map((c) => c.offsetHeight);

      const maxAboveH = Math.max(
        ...events.map((e, i) => (e.above ? wrappedHeights[i] : 0)),
      );
      const maxBelowH = Math.max(
        ...events.map((e, i) => (!e.above ? wrappedHeights[i] : 0)),
      );

      const totalH = maxAboveH + STEM + DOT_R * 2 + STEM + maxBelowH + 8;

      container.style.width = totalW + "px";
      container.style.height = totalH + "px";

      const lineY = maxAboveH + STEM + DOT_R;

      events.forEach((e, i) => {
        const cx = positions[i] + offsetX;
        const cw = spacing - 8;
        const ch = wrappedHeights[i];

        cards[i].style.left = cx - cw / 2 + "px";
        cards[i].style.top = e.above
          ? maxAboveH - ch + "px"
          : lineY + DOT_R + STEM + "px";
      });

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      svg.setAttribute("width", String(totalW));
      svg.setAttribute("height", String(totalH));
      svg.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;";

      const makeLine = (x1: number, y1: number, x2: number, y2: number) => {
        const l = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );
        l.setAttribute("x1", String(x1));
        l.setAttribute("y1", String(y1));
        l.setAttribute("x2", String(x2));
        l.setAttribute("y2", String(y2));
        l.setAttribute("stroke", "hsl(var(--border))");
        l.setAttribute("stroke-width", "2");
        return l;
      };

      const lineX1 = positions[0] - offsetX;
      const lineX2 = positions[n - 1] + 2 * offsetX;

      svg.appendChild(makeLine(lineX1, lineY, lineX2, lineY));

      events.forEach((e, i) => {
        const cx = positions[i] + offsetX;

        const stemY1 = e.above ? maxAboveH : lineY + DOT_R;
        const stemY2 = e.above ? lineY - DOT_R : lineY + DOT_R + STEM;

        svg.appendChild(makeLine(cx, stemY1, cx, stemY2));

        const dot = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        dot.setAttribute("cx", String(cx));
        dot.setAttribute("cy", String(lineY));
        dot.setAttribute("r", String(DOT_R));
        dot.setAttribute("fill", "hsl(var(--primary) / 0.15)");
        dot.setAttribute("stroke", "hsl(var(--primary))");
        dot.setAttribute("stroke-width", "2");

        svg.appendChild(dot);
      });

      container.appendChild(svg);
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
        }}
      />
    </div>
  );
}

const About = () => (
  <Layout>
    <section className="container mx-auto py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-5">
          About Our Club
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Adaptive Tech Club is a student-led organization that adapts
          technology and modifies toys for children with disabilities. Our free
          toys and tech eliminate cost barriers while ensuring every child has
          access to play, education, and independence.
        </p>
      </div>

      <div className="mb-1">
        <h2 className="font-display font-extrabold text-3xl text-center">
          Our Story
        </h2>
        <HorizontalTimeline />
        <h2 className="font-display font-extrabold text-3xl text-center mb-20"></h2>{" "}
        {/* idk how to do a space so this is just a spacer */}
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
              desc: "Families, schools, or organizations reach out with a specific need.",
              primary: true,
            },
            {
              icon: Wrench,
              step: "2",
              title: "We Design & Build",
              desc: "Club members collaborate to adapt or create the device.",
              primary: false,
            },
            {
              icon: Heart,
              step: "3",
              title: "We Deliver Joy",
              desc: "The finished device is given to the child or teacher at no cost.",
              primary: true,
            },
          ].map((item) =>
            item.primary ? (
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
            ) : (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-sm font-bold text-secondary mb-2">
                  Step {item.step}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Mission Cards */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="font-display font-extrabold text-4xl md:text-3xl mb-5">
          How We Operate
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          ATC meets weekly for 1.5 hour work sessions at Lick-Wilmerding High
          School. During these meetings, members gather to adapt toys and create
          assistive technologies, communicating with experts to learn the
          specific needs of children in our communities. In addition to
          designing and implementing solutions to address these challenges, we
          adapt toys to be accessible for kids with physical disabilities.
        </p>
      </div>

      {/* Team */}
      <div>
        <h2 className="font-display font-extrabold text-3xl text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
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
