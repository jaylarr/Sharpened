import { ArrowRight } from "lucide-react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders a semantic button with primary styling by default", () => {
    render(<Button>Schedule Assessment</Button>);

    const button = screen.getByRole("button", { name: "Schedule Assessment" });

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("bg-[#FFC107]");
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/workflow-assessment">Schedule Assessment</Button>);

    const link = screen.getByRole("link", { name: "Schedule Assessment" });

    expect(link).toHaveAttribute("href", "/workflow-assessment");
  });

  it("supports secondary and full-width presentation", () => {
    render(
      <Button fullWidth variant="secondary">
        View Services
      </Button>
    );

    const button = screen.getByRole("button", { name: "View Services" });

    expect(button).toHaveClass("w-full");
    expect(button).toHaveClass("border-[#0D1B3D]");
  });

  it("renders an icon without changing the accessible name", () => {
    render(<Button icon={<ArrowRight aria-hidden="true" />}>Continue</Button>);

    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  it("prevents interaction while loading", () => {
    render(<Button isLoading>Send Message</Button>);

    const button = screen.getByRole("button", { name: "Loading..." });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });
});
