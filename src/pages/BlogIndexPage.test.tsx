import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { blogPosts } from "../content/blog";
import { BlogIndexPage } from "./BlogIndexPage";

describe("BlogIndexPage", () => {
  it("lists all seven approved articles and no internal strategy documents", () => {
    render(
      <MemoryRouter>
        <BlogIndexPage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("article")).toHaveLength(7);
    for (const post of blogPosts) {
      expect(screen.getByRole("heading", { name: post.title })).toBeInTheDocument();
    }
    expect(screen.queryByText(/content strategy/i)).not.toBeInTheDocument();
  });
});

