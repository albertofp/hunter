import Link from "next/link";
import Login from "./Login";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <span className="ml-3 text-xl title-font font-medium text-gray-900 mb-4 md:mb-0 flex items-center">
            Hunter
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer">First Link</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Second Link</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Fourth Link</a>
        </nav>
        <Login />
      </div>
    </header>
  );
}
