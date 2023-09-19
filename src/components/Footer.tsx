import Image from "next/image";
import GithubSVG from "../../public/github-svgrepo-com.svg";
import GmailSVG from "../../public/gmail-svgrepo-com.svg";
import TwitterSVG from "../../public/twitter-svgrepo-com.svg";
import LinkedinSVG from "../../public/linkedin-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font  bg-slate-200">
      <div className="container mx-auto flex items-center sm:flex-row flex-col p-2 gap-3">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Hunter</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Hunter —
          <a
            href="https://twitter.com/albertop_osrs"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @albertop_osrs
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500"></a>
          <a
            className="ml-3 text-gray-500"
            href="mailto:albertopluecker@gmail.com"
          >
            <Image src={GmailSVG} alt={"gmail icon"} width={25} height={25} />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://twitter.com/albertop_osrs"
          >
            <Image
              src={TwitterSVG}
              alt={"twitter icon"}
              width={25}
              height={25}
            />
          </a>
          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/in/alberto-pluecker/"
          >
            <Image
              src={LinkedinSVG}
              alt={"linkedin icon"}
              width={25}
              height={25}
            />
          </a>
          <a className="ml-3 text-gray-500" href="https://github.com/albertofp">
            <Image src={GithubSVG} alt={"github icon"} width={25} height={25} />
          </a>
        </span>
      </div>
    </footer>
  );
}
