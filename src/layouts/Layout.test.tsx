import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("renders the page shell with accessible landmarks and main content", () => {
    render(
      <Layout>
        <h1>Sharpened page content</h1>
      </Layout>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toContainElement(
      screen.getByRole("heading", { level: 1, name: "Sharpened page content" })
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Solution" })[0]).toHaveAttribute(
      "href",
      "/#solutions"
    );
    expect(screen.getAllByRole("link", { name: "System" })[0]).toHaveAttribute(
      "href",
      "/#systems"
    );
    expect(screen.getAllByRole("link", { name: "Blog" })[0]).toHaveAttribute(
      "href",
      "/blog"
    );
  });
});
