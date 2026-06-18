import { Link } from "react-router-dom";
import { Heart, Instagram, Mail, Github, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/logo";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/why-it-matters", label: "Why It Matters" },
  { to: "/projects", label: "Projects" },
  { to: "/request", label: "Request an Item" },
  { to: "/contact", label: "Contact" },
  { to: "/newclub", label: "New Club Kit" },
];

const socials = [
  {
    href: "https://www.instagram.com/adaptivetechclub_lwhs",
    label: "Instagram (@adaptivetechclub_lwhs)",
    text: "@adaptivetechclub_lwhs",
    icon: Instagram,
  },
  {
    href: "mailto:adaptivetechclub.lwhs@gmail.com",
    label: "Email us at adaptivetechclub.lwhs@gmail.com",
    text: "adaptivetechclub.lwhs@gmail.com",
    icon: Mail,
  },
  {
    href: "https://github.com/AdaptiveTechClub",
    label: "GitHub (AdaptiveTechClub)",
    text: "AdaptiveTechClub",
    icon: Github,
  },
];

const Footer = () => (
  <footer className="bg-card text-card-foreground py-12 mt-20">
    <div className="container mx-auto">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4 w-fit group">
            <Logo className="w-10 h-10 shrink-0" />
            <span className="font-display font-extrabold text-lg group-hover:text-primary transition-colors">
              Adaptive Tech Club
            </span>
          </Link>
          <p className="text-card-foreground/60 text-sm leading-relaxed mb-5 max-w-xs">
            Modifying toys and devices to make play accessible for every child.
          </p>
          <ul className="flex flex-col gap-3">
            {socials.map(({ href, label, text, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-card-foreground/60 hover:text-card-foreground transition-colors">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card-foreground/5 text-card-foreground/70 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="break-all">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer">
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-block text-sm text-card-foreground/60 hover:text-card-foreground hover:translate-x-0.5 transition-all">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get Involved */}
        <div>
          <h4 className="font-display font-bold mb-4">Get Involved</h4>
          <p className="text-sm text-card-foreground/60 leading-relaxed mb-5">
            Want to join, donate, or request an adapted device? We'd love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              to="/request"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity group">
              Request a Toy
              <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity group">
              Contact Us
              <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card-foreground/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-card-foreground/40">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Adaptive Tech Club · Made with{" "}
          <Heart className="inline-block w-4 h-4 align-[-3px] text-secondary fill-secondary" />{" "}
          for accessible play
        </p>
        <p className="text-center sm:text-right text-xs">
          Built by Sean Coleman, Ilana Zimmerman, and Emory Temple-Asheim
          <br />
          with assistance from Claude and other AI technology
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
