import { Link } from "react-router-dom";
import { Wrench, Heart, Camera, Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-card text-card-foreground py-12 mt-20">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">
              Adaptive Tech Club
            </span>
          </div>
          <p className="text-card-foreground/60 text-sm leading-relaxed mb-4">
            Modifying toys and devices to make play accessible for every child.
          </p>
          <div className="flex items-center gap-2 mb-4 text-card-foreground/60 hover:text-card-foreground transition-colors">
            <Instagram className="w-4 h-4" />
            <a
              href="https://www.instagram.com/adaptivetechclub_lwhs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-sm">
              @adaptivetechclub_lwhs
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4 text-card-foreground/60 hover:text-card-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:adaptivetechclub.lwhs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-sm">
              adaptivetechclub.lwhs@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/about"
              className="text-sm text-card-foreground/60 hover:text-card-foreground transition-colors">
              About Us
            </Link>
            <Link
              to="/why-it-matters"
              className="text-sm text-card-foreground/60 hover:text-card-foreground transition-colors">
              Why It Matters
            </Link>
            <Link
              to="/projects"
              className="text-sm text-card-foreground/60 hover:text-card-foreground transition-colors">
              Projects
            </Link>
            <Link
              to="/request"
              className="text-sm text-card-foreground/60 hover:text-card-foreground transition-colors">
              Request a Toy
            </Link>
            <Link
              to="/contact"
              className="text-sm text-card-foreground/60 hover:text-card-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Get Involved</h4>
          <p className="text-sm text-card-foreground/60 leading-relaxed mb-4">
            Want to join, donate, or request an adapted device? Reach out
            through our{" "}
            <Link
              to="/Contact"
              className="text-sm text-primary hover:underline">
              contact page
            </Link>{" "}
            or{" "}
            <Link
              to="/request"
              className="text-sm text-primary hover:underline">
              request a device
            </Link>
            !
          </p>
          <div>
            <h4 className="font-display font-bold mb-2">Website Info</h4>
            <p className="text-sm text-card-foreground/60 leading-relaxed mb-4">
              This website is best viewed on a computer.
              <br />
              Website built by Sean Coleman and Ilana Zimmerman.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-card-foreground/10 mt-8 pt-8 text-center text-sm text-card-foreground/40">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-secondary fill-secondary" />
          by the Adaptive Tech Club
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
