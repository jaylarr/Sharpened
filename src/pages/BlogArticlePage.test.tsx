import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { blogPosts } from "../content/blog";
import { BlogArticlePage } from "./BlogArticlePage";

function renderArticle(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/blog/${slug}`]}>
      <Routes>
        <Route element={<BlogArticlePage />} path="/blog/:slug" />
      </Routes>
    </MemoryRouter>
  );
}

describe("BlogArticlePage", () => {
  it.each(blogPosts)("renders $title", (post) => {
    renderArticle(post.slug);

    expect(screen.getByRole("heading", { level: 1, name: post.title })).toBeInTheDocument();
    expect(screen.getAllByText(`By ${post.author.name}`).length).toBeGreaterThan(0);
  });

  it("uses Rex Rocha's portrait in his author credit", () => {
    const rexPost = blogPosts.find((post) => post.author.name === "Rex Rocha")!;
    renderArticle(rexPost.slug);

    const portraits = screen.getAllByRole("img", { name: "Portrait of Rex Rocha" });
    expect(portraits.length).toBeGreaterThanOrEqual(2);
    expect(portraits[0]).toHaveAttribute("src", "/images/authors/rex-rocha.jpg");
  });

  it("shows a not-found state for an unknown article", () => {
    renderArticle("not-a-real-article");

    expect(screen.getByRole("heading", { level: 1, name: /not part of the workflow/i })).toBeInTheDocument();
  });
});

