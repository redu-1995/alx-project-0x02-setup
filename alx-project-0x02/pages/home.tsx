import Header from "@/components/layout/Header";4
import Card from "@/components/common/Card";
export default function HomePage() {    

    return(
        <>
        <Header/>
        <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <Card title="Card 1" content="This is the content for the first card." />
        <Card title="Card 2" content="This is the content for the second card." />
        <Card title="Card 3" content="Reusable components make development faster." />
      </main>
      </>
    );
}