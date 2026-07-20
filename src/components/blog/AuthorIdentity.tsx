import type { BlogAuthor } from "../../content/blog";

type AuthorIdentityProps = {
  author: BlogAuthor;
  readingMinutes?: number;
  compact?: boolean;
};

function AuthorAvatar({ author, compact = false }: Pick<AuthorIdentityProps, "author" | "compact">) {
  const sizeClasses = compact ? "size-10" : "size-16 sm:size-20";

  if (author.image) {
    return (
      <img
        alt={author.imageAlt ?? `Portrait of ${author.name}`}
        className={`${sizeClasses} shrink-0 rounded-xl border-2 border-white object-cover shadow-sm`}
        height={compact ? 40 : 80}
        src={author.image}
        width={compact ? 40 : 80}
      />
    );
  }

  const initials = author.name
    .split(" ")
    .filter((part) => !part.includes("."))
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <span
      aria-hidden="true"
      className={`${sizeClasses} flex shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8] font-display text-sm font-extrabold text-white shadow-sm`}
    >
      {initials}
    </span>
  );
}

export function AuthorIdentity({ author, compact = false, readingMinutes }: AuthorIdentityProps) {
  return (
    <div className="flex items-center gap-3">
      <AuthorAvatar author={author} compact={compact} />
      <div>
        <p className="text-sm font-bold text-[#0D1B3D]">By {author.name}</p>
        {readingMinutes ? (
          <p className="mt-0.5 text-xs text-[#62666D]">{readingMinutes} min read</p>
        ) : null}
      </div>
    </div>
  );
}

export function AuthorCard({ author }: Pick<AuthorIdentityProps, "author">) {
  return (
    <aside
      aria-label={`About ${author.name}`}
      className="relative mt-14 overflow-hidden rounded-2xl border border-[#D8DCE3] bg-[#F7F8FA] p-6 pl-8 sm:p-8 sm:pl-10"
    >
      <span className="absolute inset-y-0 left-0 w-1.5 bg-[#FFC107]" aria-hidden="true" />
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <AuthorAvatar author={author} />
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1D4ED8]">
            About the author
          </p>
          <h2 className="font-display mt-2 text-2xl font-extrabold text-[#0D1B3D]">
            {author.name}
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#52565E]">{author.bio}</p>
        </div>
      </div>
    </aside>
  );
}
