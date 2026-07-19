import Layout from "@/components/Layout";
import { useState, FormEvent } from "react";
import { Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append("entry.1054715418", form.name);
    formData.append("entry.14403666", form.email);
    formData.append("entry.647776707", form.subject);
    formData.append("entry.586486080", form.message);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc4Cs-fPUYiXNFHvGM5Az7GItIZFJDjbn-vidUPmnKuNQshqQ/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        },
      );
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description:
          "Your message couldn't be sent. Please try again or email us directly at adaptivetechclub.lwhs@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm";

  return (
    <Layout>
      <section className="container mx-auto py-16">
        <div className="text-center mb-16">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Questions, partnerships, or interested in starting a branch at your
            school? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div
            className="bg-card rounded-2xl p-8"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">
                Send Us a Message
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  name="entry.1054715418"
                  autoComplete="name"
                  required
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  name="entry.14403666"
                  autoComplete="email"
                  required
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  Topic
                </label>
                <select
                  id="contact-subject"
                  required
                  name="entry.647776707"
                  className={inputClasses}
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }>
                  <option value="" disabled>
                    Select a topic...
                  </option>
                  <option value="General Question">General Question</option>
                  <option value="Partnership Inquiry">
                    Partnership Inquiry
                  </option>
                  <option value="Branch Inquiry">
                    Start a Branch at My School
                  </option>
                  <option value="Volunteer Inquiry">Volunteering</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your message..."
                  name="entry.586486080"
                  required
                  rows={6}
                  className={inputClasses + " resize-none"}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center group">
                {submitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
              </button>
            </form>
          </div>
          <a
            href="https://www.gofundme.com/f/help-kids-with-special-needs-access-the-technology-they-need"
            className="mt-8 inline-flex items-center justify-center w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-sm hover:opacity-90 transition-opacity group">
            Donate
            <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all ml-0 group-hover:ml-2 overflow-hidden" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
