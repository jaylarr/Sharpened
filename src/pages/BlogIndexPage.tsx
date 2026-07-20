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

      <section className="relative overflow-hidden bg-[#0D1B3D] py-20 text-white sm:py-24">
        <div className="absolute -left-24 -top-24 size-80 rounded-full bg-[#1D4ED8]/25 blur-3xl" />
        <div className="absolute -bottom-32 right-0 size-96 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#FFC107]">
              <BookOpen aria-hidden="true" size={15} />
              Sharpened Insights
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Practical ideas for better business systems
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Clear, useful guidance on law firm operations, customer response, and the
              repetitive work that automation can handle more consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F4F7] py-16 sm:py-20" aria-labelledby="articles-heading">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D4ED8]">
                Latest articles
              </p>
              <h2 className="font-display mt-2 text-3xl font-extrabold text-[#0D1B3D]" id="articles-heading">
                Explore all insights
              </h2>
            </div>
            <p className="text-sm text-[#62666D]">{blogPosts.length} articles</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                className={`group flex flex-col overflow-hidden rounded-2xl border border-[#D8DCE3] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1D4ED8]/35 hover:shadow-xl ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                key={post.slug}
              >
                <div className="h-2 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#FFC107]" />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    <span>{post.category}</span>
                    <span aria-hidden="true" className="size-1 rounded-full bg-[#B3BAC6]" />
                    <span className="inline-flex items-center gap-1.5 text-[#62666D]">
                      <Clock aria-hidden="true" size={14} />
                      {post.readingMinutes} min read
                    </span>
                  </div>

                  <h3 className={`font-display mt-5 font-extrabold leading-tight text-[#0D1B3D] ${index === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                    <Link
                      className="rounded-sm outline-none transition-colors hover:text-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-4"
                      to={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-4 flex-1 text-[15px] leading-7 text-[#52565E]">{post.excerpt}</p>

                  <div className="mt-7 flex flex-col gap-6 border-t border-[#E4E7EC] pt-6 sm:flex-row sm:items-center sm:justify-between">
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

