import Layout from "@/components/Layout";

const ToyRequest = () => {
  return (
    <Layout>
      <section className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            Request a Device
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about the toy or device you'd like us to adapt for your
            child. All requests are free!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-card rounded-2xl overflow-hidden"
            style={{ boxShadow: "var(--card-shadow)" }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSewCOc-BnLSU9s2GjQs0npHwu6RxR2HXP5me6e0jycRlr0c7A/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="block">
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToyRequest;
