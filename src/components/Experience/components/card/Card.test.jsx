import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Experience card", () => {
  it("shows role evidence by default for recruiter scanning", () => {
    render(
      <Card
        company="Example Company"
        position="Software Engineer"
        startDate="Jan 2025"
        endDate="Present"
        link="https://example.com"
        description="Delivered a reliable production feature."
        techStack={["React", "TypeScript"]}
      />
    );

    expect(
      screen.getByText("Delivered a reliable production feature.")
    ).toBeVisible();
    expect(screen.getByText("React")).toBeVisible();
    expect(screen.getByText("TypeScript")).toBeVisible();
  });
});
