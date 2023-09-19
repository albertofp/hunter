import Link from "next/link";
import Login from "./Login";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-wrap p-5 flex-col md:justify-between md:flex-row items-center bg-slate-200 w-full">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="ml-3 text-xl title-font font-medium text-gray-900 mb-4 md:mb-0 flex items-center">
              Hunter
            </span>
          </Link>
          <nav className="flex flex-wrap items-center text-base gap-6 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            <a className="hover:text-gray-900 cursor-pointer">First Link</a>
            <a className="hover:text-gray-900 cursor-pointer">Second Link</a>
            <a className="hover:text-gray-900 cursor-pointer">Third Link</a>
            <a className="hover:text-gray-900 cursor-pointer">Fourth Link</a>
          </nav>
        </div>
        <Login />
      </div>
    </header>
  );
}
