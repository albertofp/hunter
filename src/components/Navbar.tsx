import Link from "next/link";
import Login from "./Login";

export default function Navbar() {
  return (
    <nav className="flex items-center border-b-zinc-600 p-4 justify-between h-16 border-b">
      <Link href="/">hunter</Link>
      <Login />
    </nav>
  );
}
