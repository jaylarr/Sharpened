import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthorIdentity } from "../components/blog/AuthorIdentity";
import { PageMeta } from "../components/blog/PageMeta";
import { blogPosts } from "../content/blog";

export function BlogIndexPage() {
  return (
    <>
      <PageMeta
        description="Practical articles about workflow automation, client intake, follow-up systems, and better operations for law firms and growing businesses."
        path="/blog"
        title="Automation Insights"
      />

      <section className="relative isolate overflow-hidden bg-[#0D1B3D] py-20 text-white sm:py-28">
        <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.45fr] lg:items-end lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC107]">
              <span className="h-px w-9 bg-[#FFC107]" aria-hidden="true" />
              <BookOpen aria-hidden="true" size={15} />
              Sharpened Insights
            </div>
            <h1 className="font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">
              Practical ideas for better business systems
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
              Clear, useful guidance on law firm operations, customer response, and the
              repetitive work that automation can handle more consistently.
            </p>
          </div>
          <div className="hidden border-l border-white/15 pl-8 lg:block">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC107]">Latest articles</p>
            <p className="font-display mt-3 text-4xl font-extrabold">{blogPosts.length} articles</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F4F7] py-16 sm:py-24" aria-labelledby="articles-heading">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 border-b border-[#D8DCE3] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D4ED8]">
                Latest articles
              </p>
              <h2 className="font-display mt-2 text-3xl font-extrabold text-[#0D1B3D]" id="articles-heading">
                Explore all insights
              </h2>
            </div>
            <p className="text-sm text-[#62666D] lg:hidden">{blogPosts.length} articles</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-[#1D4ED8]/35 hover:shadow-[0_20px_50px_rgba(13,27,61,0.1)] ${
                  index === 0
                    ? "border-[#0D1B3D] md:col-span-2 lg:col-span-2 lg:row-span-2"
                    : "border-[#D8DCE3]"
                }`}
                key={post.slug}
              >
                <div className={`absolute inset-y-0 left-0 w-1.5 ${index === 0 ? "bg-[#FFC107]" : "bg-[#1D4ED8]"}`} />
                <div className={`flex flex-1 flex-col p-6 pl-7 sm:p-8 sm:pl-9 ${index === 0 ? "lg:p-12 lg:pl-14" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    <span>{post.category}</span>
                    <span aria-hidden="true" className="size-1 rounded-full bg-[#B3BAC6]" />
                    <span className="inline-flex items-center gap-1.5 text-[#62666D]">
                      <Clock aria-hidden="true" size={14} />
                      {post.readingMinutes} min read
                    </span>
                  </div>

                  <h3 className={`font-display mt-5 font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0D1B3D] ${index === 0 ? "max-w-3xl text-3xl sm:text-4xl lg:text-5xl" : "text-xl sm:text-2xl"}`}>
                    <Link
                      className="rounded-sm outline-none transition-colors hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-4"
                      to={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className={`mt-4 flex-1 text-[15px] leading-7 text-[#52565E] ${index === 0 ? "max-w-3xl sm:text-base sm:leading-8" : ""}`}>{post.excerpt}</p>

                  <div className={`mt-7 flex flex-col gap-6 border-t border-[#E4E7EC] pt-6 ${index === 0 ? "sm:flex-row sm:items-center sm:justify-between" : ""}`}>
                    <AuthorIdentity author={post.author} compact />
                    <Link
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] outline-none transition-all group-hover:gap-3 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-4"
                      to={`/blog/${post.slug}`}
                    >
                      Read article
                      <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
