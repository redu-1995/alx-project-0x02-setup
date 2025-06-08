// pages/posts.tsx
import { GetStaticProps } from 'next';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: { title: string; body: string; userId: number }) => ({
  title: post.title,
  content: post.body,
  userId: post.userId,
}))


  return {
    props: { posts },
  };
};

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
