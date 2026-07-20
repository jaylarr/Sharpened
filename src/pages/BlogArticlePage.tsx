import { ArrowLeft, ArrowRight, Calendar, Clock, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ArticleContent } from "../components/blog/ArticleContent";
import { AuthorCard, AuthorIdentity } from "../components/blog/AuthorIdentity";
import { PageMeta } from "../components/blog/PageMeta";
import { Button } from "../components/ui/Button";
import { blogPosts, getBlogPost } from "../content/blog";
import { NotFoundPage } from "./NotFoundPage";

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <NotFoundPage />;

  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageMeta
        author={post.author.name}
        description={post.excerpt}
        image={post.author.image}
        path={`/blog/${post.slug}`}
        title={post.title}
        type="article"
      />

      <article>
        <header className="relative overflow-hidden bg-[#0D1B3D] py-14 text-white sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.38),transparent_38%)]" />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-9">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                <li>
                  <Link className="inline-flex items-center gap-1.5 transition-colors hover:text-white" to="/">
                    <Home aria-hidden="true" size={14} />
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link className="transition-colors hover:text-white" to="/blog">Blog</Link>
                </li>
              </ol>
            </nav>

            <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#FFC107]">
              {post.category}
            </p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            {post.subtitle ? (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{post.subtitle}</p>
            ) : null}
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{post.excerpt}</p>

            <div className="mt-9 inline-flex rounded-xl border border-white/10 bg-white/95 p-3 pr-5 shadow-xl">
              <AuthorIdentity author={post.author} compact readingMinutes={post.readingMinutes} />
            </div>
          </div>
        </header>

        <div className="bg-white py-12 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] transition-all hover:gap-3"
              to="/blog"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              Back to all articles
            </Link>

            <div className="max-w-3xl">
              <ArticleContent blocks={post.blocks} />
              <AuthorCard author={post.author} />
            </div>
          </div>
        </div>
      </article>

      <section className="border-y border-[#D8DCE3] bg-[#F2F4F7] py-16" aria-labelledby="related-heading">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-[#0D1B3D]" id="related-heading">
            Continue reading
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <article className="rounded-xl border border-[#D8DCE3] bg-white p-6 transition-shadow hover:shadow-lg" key={related.slug}>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#62666D]">
                  <Clock aria-hidden="true" size={14} />
                  {related.readingMinutes} min read
                </div>
                <h3 className="font-display mt-4 text-xl font-extrabold leading-snug text-[#0D1B3D]">
                  <Link className="transition-colors hover:text-[#1D4ED8]" to={`/blog/${related.slug}`}>
                    {related.title}
                  </Link>
                </h3>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8]" to={`/blog/${related.slug}`}>
                  Read article
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0D1B3D] p-8 text-white shadow-2xl sm:p-12">
            <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[#1D4ED8]/30 blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#FFC107]">Next step</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
                Find the workflow worth fixing first
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Start with a focused workflow assessment and identify where repetitive work,
                delays, and unclear handoffs are costing your team time.
              </p>
              <div className="mt-8">
                <Button href="/#contact" icon={<Calendar aria-hidden="true" size={18} />} variant="primary">
                  Schedule a Workflow Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

