import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders inside the shared layout shell", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Workflow automation for law firms"
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
