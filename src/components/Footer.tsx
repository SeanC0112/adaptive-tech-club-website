import { Link } from "react-router-dom";
import { Wrench, Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-12 mt-20">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">Adaptive Tech Club</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            Modifying toys and devices to make play accessible for every child.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">About Us</Link>
            <Link to="/projects" className="text-sm text-background/60 hover:text-background transition-colors">Our Projects</Link>
            <Link to="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Get Involved</h4>
          <p className="text-sm text-background/60 leading-relaxed">
            Want to join, donate, or request an adapted device? Reach out through our contact page!
          </p>
        </div>
      </div>
      <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/40">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> by the Adaptive Tech Club
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
