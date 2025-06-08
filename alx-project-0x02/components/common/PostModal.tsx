import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 320 }}>
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 12 }}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 12 }}
            />
          </div>
          <button type="submit">Post</button>
          <button type="button" onClick={onClose} style={{ marginLeft: 8 }}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;