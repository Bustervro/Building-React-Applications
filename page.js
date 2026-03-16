export default function HomePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1>Welcome to My Next.js App</h1>
        <p>A simple landing page built with Next.js.</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <h2>About</h2>
        <p>This section contains placeholder text about the project.</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Services</h2>
        <p>This section highlights sample features and content.</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Contact</h2>
        <p>This section can include contact details or links.</p>
      </section>

      <footer style={{ marginTop: "40px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
        <p>© 2026 My Next.js Landing Page</p>
      </footer>
    </main>
  );
}
