import Layout from "@/components/Layout";
import { useState, FormEvent } from "react";
import { Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ToyRequest = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    deviceDescription: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const GOOGLE_SHEET_URL = "";

    if (GOOGLE_SHEET_URL) {
      try {
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch {
        // no-cors mode won't give us a readable response
      }
    }

    toast({
      title: "Request Submitted!",
      description: "We've received your device request. We'll be in touch soon!",
    });
    setForm({ parentName: "", childName: "", childAge: "", deviceDescription: "", email: "" });
    setSubmitting(false);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm";

  return (
    <Layout>
      <section className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Request a Device</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about the toy or device you'd like us to adapt for your child. All requests are free!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-secondary" />
              <h2 className="font-display font-bold text-xl">Device Request Form</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Parent/Guardian Name"
                required
                className={inputClasses}
                value={form.parentName}
                onChange={(e) => setForm({ ...form, parentName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Child's Name"
                required
                className={inputClasses}
                value={form.childName}
                onChange={(e) => setForm({ ...form, childName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Child's Age"
                required
                className={inputClasses}
                value={form.childAge}
                onChange={(e) => setForm({ ...form, childAge: e.target.value })}
              />
              <textarea
                placeholder="Describe the toy or device and any specific needs..."
                required
                rows={4}
                className={inputClasses + " resize-none"}
                value={form.deviceDescription}
                onChange={(e) => setForm({ ...form, deviceDescription: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={inputClasses}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-display font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>

          <div className="bg-muted rounded-xl p-4 text-center mt-8">
            <p className="text-xs text-muted-foreground">
              📋 The device request form can be connected to a Google Sheet. Add your Google Apps Script URL in the code to enable this.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToyRequest;
