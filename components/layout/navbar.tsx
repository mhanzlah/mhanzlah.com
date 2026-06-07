import Link from "next/link";

import Logo from "@/public/logo.svg";

export default function Navbar() {
  const links = [
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/about-me",
      label: "About Me",
    },
    {
      href: "/projects",
      label: "Projects",
    },
  ];

  return (
    <nav className="w-full h-14 flex items-center justify-between border-b border-gray-600">
      <h1>
        <Link
          href="/"
          className="text-xl font-semibold border-b border-transparent hover:border-white"
        >
          Muhammad Hanzla
        </Link>
      </h1>
      <div className="flex items-center">
        <ul className="hidden md:flex gap-4 mr-4">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link href={link.href} className="p-2 hover:bg-gray-900 rounded">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          title="Menu"
          className="md:hidden p-2 hover:bg-gray-900 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button title="Theme" className="p-2 hover:bg-gray-900 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
