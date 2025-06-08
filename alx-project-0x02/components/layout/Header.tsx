import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-center space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/home" className="hover:underline">/Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/posts" className="hover:text-gray-300">Posts</Link>
         </nav>
        Welcome to ALX Project 2
    </header>
  );
}
export default Header;