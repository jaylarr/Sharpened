import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders the assessment-led homepage journey", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /workflow automation for law firms/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /schedule a workflow assessment/i })
    ).toHaveAttribute("href", "/workflow-assessment");

    expect(
      screen.getByRole("heading", { level: 2, name: /every minute your team spends/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /diagnose before automating/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /workflow areas/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /better systems create/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /automation should feel like an upgrade/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /common questions/i })
    ).toBeInTheDocument();
  });

  it("renders all six service preview cards", () => {
    render(<HomePage />);

    const services = screen.getByLabelText("Workflow areas Sharpened can improve");

    expect(within(services).getAllByRole("article")).toHaveLength(6);
  });
});
