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
  const canonicalUrl = `https://sharp-enedautomation.site/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Sharpened Automated",
      url: "https://sharp-enedautomation.site",
    },
    ...(post.author.image
      ? { image: `https://sharp-enedautomation.site${post.author.image}` }
      : {}),
  };

  return (
    <>
      <PageMeta
        author={post.author.name}
        description={post.excerpt}
        image={post.author.image}
        path={`/blog/${post.slug}`}
        structuredData={structuredData}
        title={post.title}
        type="article"
      />

      <article>
        <header className="relative isolate overflow-hidden bg-[#0D1B3D] py-14 text-white sm:py-20 lg:py-24">
          <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-10 border-b border-white/12 pb-5">
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

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-16">
              <div className="border-l-4 border-[#FFC107] pl-5 sm:pl-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#FFC107]">
                  {post.category}
                </p>
                <h1 className="font-display mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.75rem]">
                  {post.title}
                </h1>
                {post.subtitle ? (
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{post.subtitle}</p>
                ) : null}
                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{post.excerpt}</p>
              </div>

              <div className="rounded-2xl border border-white/12 bg-white p-5 text-[#0D1B3D] shadow-[0_24px_60px_rgba(2,8,23,0.28)]">
                <AuthorIdentity author={post.author} readingMinutes={post.readingMinutes} />
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white py-12 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[13rem_minmax(0,48rem)] lg:gap-16 lg:px-8">
            <aside className="lg:relative">
              <div className="lg:sticky lg:top-28">
                <Link
                  className="inline-flex items-center gap-2 border-b border-[#1D4ED8]/30 pb-2 text-sm font-bold text-[#1D4ED8] transition-all hover:gap-3"
                  to="/blog"
                >
                  <ArrowLeft aria-hidden="true" size={17} />
                  Back to all articles
                </Link>
                <div className="mt-8 hidden border-l border-[#D8DCE3] pl-4 text-xs font-bold uppercase tracking-[0.15em] text-[#62666D] lg:flex lg:items-center lg:gap-2">
                  <Clock aria-hidden="true" size={14} />
                  {post.readingMinutes} min read
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <ArticleContent blocks={post.blocks} />
              <AuthorCard author={post.author} />
            </div>
          </div>
        </div>
      </article>

      <section className="border-y border-[#D8DCE3] bg-[#F2F4F7] py-16 sm:py-20" aria-labelledby="related-heading">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#D8DCE3] pb-6">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.025em] text-[#0D1B3D]" id="related-heading">
              Continue reading
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((related, index) => (
              <article className="group relative overflow-hidden rounded-2xl border border-[#D8DCE3] bg-white p-6 pl-8 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-[#1D4ED8]/35 hover:shadow-[0_18px_45px_rgba(13,27,61,0.09)]" key={related.slug}>
                <div className={`absolute inset-y-0 left-0 w-1 ${index === 0 ? "bg-[#FFC107]" : "bg-[#1D4ED8]"}`} />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#62666D]">
                  <Clock aria-hidden="true" size={14} />
                  {related.readingMinutes} min read
                </div>
                <h3 className="font-display mt-4 text-xl font-extrabold leading-snug tracking-[-0.02em] text-[#0D1B3D]">
                  <Link className="transition-colors hover:text-[#1D4ED8]" to={`/blog/${related.slug}`}>
                    {related.title}
                  </Link>
                </h3>
                <Link className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] transition-all group-hover:gap-3" to={`/blog/${related.slug}`}>
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
          <div className="relative overflow-hidden rounded-2xl bg-[#0D1B3D] p-8 text-white sm:p-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div className="absolute bottom-0 right-0 h-1 w-1/3 bg-[#FFC107]" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#FFC107]">Next step</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold sm:text-4xl">
                Find the workflow worth fixing first
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Start with a focused workflow assessment and identify where repetitive work,
                delays, and unclear handoffs are costing your team time.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <Button href="/#contact" icon={<Calendar aria-hidden="true" size={18} />} variant="primary">
                Schedule a Workflow Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
