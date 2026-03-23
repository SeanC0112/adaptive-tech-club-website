import Layout from "@/components/Layout";
import { useState, FormEvent } from "react";
import { Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  // Device request form
  const [deviceForm, setDeviceForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    deviceDescription: "",
    email: "",
  });

  // Contact form
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [deviceSubmitting, setDeviceSubmitting] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const handleDeviceSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setDeviceSubmitting(true);

    // To connect to Google Sheets, replace this URL with your Google Apps Script web app URL
    const GOOGLE_SHEET_URL = "";

    if (GOOGLE_SHEET_URL) {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(deviceForm),
        });
      } catch {
        // no-cors mode won't give us a readable response
      }
    }

    toast({
      title: "Request Submitted!",
      description: "We've received your device request. We'll be in touch soon!",
    });
    setDeviceForm({ parentName: "", childName: "", childAge: "", deviceDescription: "", email: "" });
    setDeviceSubmitting(false);
  };

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);

    // Simulate submission
    await new Promise((r) => setTimeout(r, 500));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setContactForm({ name: "", email: "", message: "" });
    setContactSubmitting(false);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm";

  return (
    <Layout>
      <section className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Request an adapted device or send us a message — we'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Device Request Form */}
          <div className="bg-card rounded-2xl p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-secondary" />
              <h2 className="font-display font-bold text-xl">Request a Device</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Tell us about the toy or device you'd like us to adapt. All requests are free!
            </p>
            <form onSubmit={handleDeviceSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Parent/Guardian Name"
                required
                className={inputClasses}
                value={deviceForm.parentName}
                onChange={(e) => setDeviceForm({ ...deviceForm, parentName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Child's Name"
                required
                className={inputClasses}
                value={deviceForm.childName}
                onChange={(e) => setDeviceForm({ ...deviceForm, childName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Child's Age"
                required
                className={inputClasses}
                value={deviceForm.childAge}
                onChange={(e) => setDeviceForm({ ...deviceForm, childAge: e.target.value })}
              />
              <textarea
                placeholder="Describe the toy or device and any specific needs..."
                required
                rows={4}
                className={inputClasses + " resize-none"}
                value={deviceForm.deviceDescription}
                onChange={(e) => setDeviceForm({ ...deviceForm, deviceDescription: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={inputClasses}
                value={deviceForm.email}
                onChange={(e) => setDeviceForm({ ...deviceForm, email: e.target.value })}
              />
              <button
                type="submit"
                disabled={deviceSubmitting}
                className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-display font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {deviceSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>

          {/* Contact Us Form */}
          <div className="bg-card rounded-2xl p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Contact Us</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Questions, partnerships, or just want to say hi? Drop us a line.
            </p>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className={inputClasses}
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={inputClasses}
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              />
              <textarea
                placeholder="Your message..."
                required
                rows={6}
                className={inputClasses + " resize-none"}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {contactSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Google Sheets Note */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-muted rounded-xl p-4 text-center">
            <p className="text-xs text-muted-foreground">
              📋 The device request form can be connected to a Google Sheet. Add your Google Apps Script URL in the Contact page code to enable this.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
