import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import React, { useState } from "react";
import PostModal from "../components/common/PostModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([post, ...posts]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <Card title="Card 1" content="This is the content for the first card." />
        <Card title="Card 2" content="This is the content for the second card." />
        <Card title="Card 3" content="Reusable components make development faster." />
        <button onClick={() => setModalOpen(true)}>Add Post</button>
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
        <h3>Posts</h3>
        <ul>
          {posts.map((p, i) => (
            <li key={i}>
              <strong>{p.title}</strong>
              <p>{p.content}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}