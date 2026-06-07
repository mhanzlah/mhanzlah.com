import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
        <ul className="flex gap-4">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/about-me">About me</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/resume">Resume</Link>
            </li>
        </ul>
      </nav>
    );
}
