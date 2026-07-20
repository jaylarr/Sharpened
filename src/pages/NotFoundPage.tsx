import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMeta } from "../components/blog/PageMeta";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center bg-[#F2F4F7] py-20">
      <PageMeta
        description="The requested page could not be found."
        path={window.location.pathname}
        title="Page not found"
      />
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D4ED8]">404</p>
        <h1 className="font-display mt-3 text-4xl font-extrabold text-[#0D1B3D] sm:text-5xl">
          This page is not part of the workflow
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#52565E]">
          The page may have moved, or the address may be incomplete.
        </p>
        <Link className="mt-8 inline-flex items-center gap-2 font-bold text-[#1D4ED8]" to="/blog">
          <ArrowLeft aria-hidden="true" size={18} />
          Return to the blog
        </Link>
      </div>
    </section>
  );
}

