export default function Index() {
  const posts = [
    { id: 1, title: "My First Blog Post", summary: "This is the first sample blog post." },
    { id: 2, title: "Learning Remix", summary: "This post explains some Remix basics." },
    { id: 3, title: "Nested Routes", summary: "This post talks about nested routing in Remix." },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Remix Blog</h1>
      <p>This is a simple blog homepage built with Remix.</p>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </div>
      ))}
    </main>
  );
}
