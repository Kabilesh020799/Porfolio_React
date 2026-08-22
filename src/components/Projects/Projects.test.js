import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("renders the selected work and exposes honest project actions", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: /selected projects/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "CareerLedger" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view careerledger source code/i })
    ).toHaveAttribute(
      "href",
      "https://github.com/Kabilesh020799/CareerLedger"
    );
    expect(
      screen.getByRole("link", { name: /view kill a watt source code/i })
    ).toHaveAttribute(
      "href",
      "https://github.com/Kabilesh020799/killawatt"
    );
  });

  it("does not describe source-only projects as live demos", () => {
    render(<Projects />);

    expect(
      screen.queryByRole("link", { name: /open kill a watt live site/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /ace website/i })
    ).not.toBeInTheDocument();
  });
});
