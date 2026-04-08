import Layout from "@/components/Layout";
import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
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
    await new Promise((r) => setTimeout(r, 500));
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm";

  return (
    <Layout>
      <section className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Questions, partnerships, or interested in starting a branch at your school? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <Send className="w-5 h-5 text-primary" />
              <h2 className="font-display font-bold text-xl">Send Us a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className={inputClasses}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={inputClasses}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <select
                required
                className={inputClasses}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              >
                <option value="" disabled>Select a topic...</option>
                <option value="general">General Question</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="branch">Start a Branch at My School</option>
                <option value="volunteer">Volunteering</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your message..."
                required
                rows={6}
                className={inputClasses + " resize-none"}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
