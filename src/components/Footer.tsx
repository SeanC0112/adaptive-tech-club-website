import { Link } from "react-router-dom";
import { Wrench, Heart, Camera } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 mt-20">
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
          <p className="text-background/60 text-sm leading-relaxed mb-4">
            Modifying toys and devices to make play accessible for every child.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </div>
            <a
              href="https://www.instagram.com/adaptivetechclub_lwhs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-lg">
              Insta: @adaptivetechclub_lwhs
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link
              to="/About"
              className="text-sm text-background/60 hover:text-background transition-colors">
              About Us
            </Link>
            <Link
              to="/Why-It-Matters"
              className="text-sm text-background/60 hover:text-background transition-colors">
              Why It Matters
            </Link>
            <Link
              to="/request"
              className="text-sm text-background/60 hover:text-background transition-colors">
              Request a Toy
            </Link>
            <Link
              to="/Contact"
              className="text-sm text-background/60 hover:text-background transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Get Involved</h4>
          <p className="text-sm text-background/60 leading-relaxed">
            Want to join, donate, or request an adapted device? Reach out
            through our{" "}
            <Link
              to="/Contact"
              className="text-sm text-primary/60 hover:text-primary transition-colors hover:underline">
              contact page
            </Link>{" "}
            or{" "}
            <Link
              to="/request"
              className="text-sm text-primary/60 hover:text-primary transition-colors hover:underline">
              request a device
            </Link>
            !
          </p>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/40">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by
          the Adaptive Tech Club
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
