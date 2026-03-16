import * as React from "react";

const projects = [
  { id: 1, title: "Portfolio Website", description: "A responsive personal website." },
  { id: 2, title: "Recipe App", description: "A simple recipe gallery built with React." },
  { id: 3, title: "Design Project", description: "A UI/UX case study with wireframes and prototypes." },
];

export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>My Gatsby Portfolio</h1>
      <p>This portfolio showcases a few sample projects.</p>

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "16px",
            }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
