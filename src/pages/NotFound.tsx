import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="container mx-auto flex flex-1 items-center justify-center py-24">
        <div className="text-center">
          <h1 className="mb-4 font-display font-extrabold text-5xl">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Oops! We couldn't find that page.
          </p>
          <Link
            to="/"
            className="text-primary font-medium underline hover:text-primary/80">
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
