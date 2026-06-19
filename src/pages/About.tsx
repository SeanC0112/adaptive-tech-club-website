import Layout from "@/components/Layout";
import { useRef, useEffect } from "react";
import aboutImage from "@/assets/about.jpg";
import videoATC from "@/assets/atcvid.mp4";
import {
  Users,
  GraduationCap,
  Handshake,
  Wrench,
  NotebookPen,
  CircleDollarSign,
  Heart,
  Cog,
  Lightbulb,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

import ilana from "@/assets/team/Ilana.jpg";
import avery from "@/assets/team/Avery.jpg";
import sean from "@/assets/team/Sean.jpg";
import emory from "@/assets/team/Emory.jpg";
import atticus from "@/assets/team/Atticus.jpg";
import kleindolph from "@/assets/team/Kleindolph.jpg";

const STEM = 32;
const DOT_R = 7;

type Member = {
  name: string;
  role: string;
  school?: string;
  gradYear?: string;
  icon: LucideIcon;
  color: string;
  photo?: string;
};

const teamMembers: Member[] = [
  {
    name: "Ilana Zimmerman",
    role: "Founder",
    school: "LWHS",
    gradYear: "’26",
    icon: Lightbulb,
    color: "primary",
    photo: ilana,
  },
  {
    name: "Avery Belenson",
    role: "Co-lead",
    school: "LWHS",
    gradYear: "’27",
    icon: Puzzle,
    color: "secondary",
    photo: avery,
  },
  {
    name: "Sean Coleman",
    role: "Co-lead",
    school: "LWHS",
    gradYear: "’27",
    icon: Cog,
    color: "secondary",
    photo: sean,
  },
  {
    name: "Emory Temple-Asheim",
    role: "Co-lead",
    school: "LWHS",
    gradYear: "’28",
    icon: Wrench,
    color: "secondary",
    photo: emory,
  },
  {
    name: "Atticus Kilar",
    role: "Co-lead",
    school: "BHS",
    gradYear: "’28",
    icon: Lightbulb,
    color: "secondary",
    photo: atticus,
  },
  {
    name: "Andrew Kleindolph",
    role: "Faculty Advisor",
    icon: GraduationCap,
    color: "primary",
    photo: kleindolph,
  },
];

const MemberCard = ({ member }: { member: Member }) => (
  <div
    className="bg-card rounded-2xl p-8 text-center transition-transform w-full"
    style={{ boxShadow: "var(--card-shadow)" }}>
    {member.photo ? (
      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
    ) : (
      <div
        className={`w-16 h-16 rounded-2xl bg-${member.color}/10 flex items-center justify-center mx-auto mb-4`}>
        <member.icon className={`w-8 h-8 text-${member.color}`} />
      </div>
    )}
    <h3 className="font-display font-bold text-lg">{member.name}</h3>
    <p className="text-sm text-muted-foreground">{member.role}</p>
    {member.school && (
      <p className="text-xs text-muted-foreground/70 mt-1">
        {member.school} {member.gradYear}
      </p>
    )}
  </div>
);

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
          className="text-sm text-primary underline hover:text-primary/80 transition-colors">
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
    desc: "Club founder Ilana starts working with Oakland Unified School District occupational therapist Chantal Guité",
    above: true,
  },
  {
    date: "Fall 2024",
    title: "Club founded",
    desc: "ATC is officially created at Lick-Wilmerding High School",
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
    title: "Important grant received",
    desc: "The Youth Empowerment Fund from the SF YMCA enables expansion of tech and outreach",
    above: false,
  },
  {
    date: "Winter 2026",
    title: "Expanding reach",
    desc: "Working with the Special Olympics, we expanded our impact to the San Francisco Unified School District as well as schools on the Peninsula",
    above: true,
  },
];

function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const renderTimeline = () => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    // Reset container width before measuring
    container.style.width = "100%";
    container.style.height = "auto";
    container.style.minHeight = "0";

    const isMobile = window.innerWidth < 768;
    const events = TIMELINE_EVENTS;
    const n = events.length;

    if (isMobile) {
      // Vertical timeline for mobile
      const verticalContainer = document.createElement("div");
      verticalContainer.style.cssText = `
        position: relative;
        margin: 20px 0;
      `;

      // Vertical line
      const verticalLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );
      verticalLine.setAttribute("width", "40");
      verticalLine.setAttribute("height", "100%");
      verticalLine.style.cssText =
        "position: absolute; left: 12px; top: 0; pointer-events: none;";

      events.forEach((e, i) => {
        const card = document.createElement("div");
        card.style.cssText = `
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 12px;
          padding: 12px 16px;
          margin-left: 60px;
          margin-bottom: 40px;
          box-shadow: var(--card-shadow);
          position: relative;
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

        // Add dot before card
        const dot = document.createElement("div");
        dot.style.cssText = `
          position: absolute;
          width: 24px;
          height: 24px;
          border: 2px solid hsl(var(--primary));
          border-radius: 50%;
          background: hsl(var(--primary) / 0.15);
          left: -42px;
          top: 12px;
          z-index: 10;
        `;

        card.appendChild(dot);
        verticalContainer.appendChild(card);
      });

      // Add vertical line
      const totalHeight = events.length * 120;
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", "20");
      line.setAttribute("y1", "0");
      line.setAttribute("x2", "20");
      line.setAttribute("y2", String(totalHeight));
      line.setAttribute("stroke", "hsl(var(--border))");
      line.setAttribute("stroke-width", "2");
      verticalLine.appendChild(line);
      verticalLine.setAttribute("height", String(totalHeight));

      verticalContainer.appendChild(verticalLine);
      container.appendChild(verticalContainer);
    } else {
      // Horizontal timeline for desktop
      const parentWidth =
        container.parentElement?.clientWidth || window.innerWidth;
      const totalW = Math.min(
        parentWidth,
        container.getBoundingClientRect().width || parentWidth,
      );
      const COMPRESSION = 0.75;

      const spacing = (totalW / (n - 1)) * COMPRESSION;
      const offsetX = (totalW - spacing * (n - 1)) / 2;

      const positions = events.map((_, i) => i * spacing);

      const cards = events.map((e) => {
        const card = document.createElement("div");

        card.style.cssText = `
          background: hsl(var(--card));
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

        const svg = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg",
        );

        svg.setAttribute("width", String(totalW));
        svg.setAttribute("height", String(totalH));
        svg.style.cssText =
          "position:absolute;top:0;left:0;pointer-events:none;";

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
    }
  };

  useEffect(() => {
    // Wait for fonts to load before first render
    document.fonts.ready.then(() => {
      renderTimeline();
    });

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          renderTimeline();
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        document.fonts.ready.then(() => {
          renderTimeline();
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimeout);
    };
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
    {/* Image */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutImage}
          alt="A row of Adaptive Tech Club members each holding an adapted toy or device"
          className="w-full h-full object-cover"
          style={{ objectPosition: "0% center" }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container mx-auto pt-[20px] py-[40px] text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-background leading-tight mb-36 animate-fade-in-up mt-[0px]">
          About Our Club
        </h1>
        <p
          className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}>
          The Adaptive Tech Club is a student-led organization that adapts
          technology and modifies toys for children with disabilities. Our free
          toys and tech eliminate cost barriers while ensuring every child has
          access to play, education, and independence.
        </p>
      </div>
    </section>
    <section className="container mx-auto py-6">
      <div>
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
        <div className="grid md:grid-cols-3">
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
              <div key={item.step} className="text-center mb-6 sm:mb-10">
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
              <div key={item.step} className="text-center mb-6 sm:mb-0">
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
      <div className="max-w-3xl mx-auto text-center mb-[50px]">
        <h1 className="font-display font-extrabold text-4xl md:text-3xl mb-5">
          How We Operate
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          ATC meets weekly for 1.5 hour work sessions at Lick-Wilmerding High
          School. During these meetings, members gather to adapt toys and create
          assistive technologies, communicating with experts to learn the
          specific needs of children in our communities. In addition to
          designing and implementing solutions to address these challenges, we
          adapt toys to be accessible for kids with physical disabilities.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-[1/1] rounded-2xl overflow-hidden">
            <video
              src={videoATC}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 35%" }}
            />
          </div>
        </div>
      </div>
      {/* Team */}
      <div>
        <h2 className="font-display font-extrabold text-3xl text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
