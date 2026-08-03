import { experience, projects, skillsData } from "./index";

describe("portfolio data", () => {
  it("keeps project action URLs distinct", () => {
    projects.forEach((project) => {
      if (project.giturl && project.url) {
        expect(project.giturl).not.toBe(project.url);
      }
    });
  });

  it("provides complete experience entries", () => {
    experience.forEach((role) => {
      expect(role.position).toBeTruthy();
      expect(role.company).toBeTruthy();
      expect(role.description).toBeTruthy();
      expect(role.techStack.length).toBeGreaterThan(0);
    });
  });

  it("does not repeat skills within a category", () => {
    skillsData.forEach(({ skills }) => {
      expect(new Set(skills).size).toBe(skills.length);
    });
  });
});
