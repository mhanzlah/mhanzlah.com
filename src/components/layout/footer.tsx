import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-4 text-sm dark:border-gray-600">
      <ul className="mb-2 flex justify-center">
        <li>
          <Link
            href="/rss.xml"
            target="_blank"
            className="hover:border-foreground border-b border-transparent"
          >
            RSS feed
          </Link>
        </li>
      </ul>
      <p className="text-center">
        2086 &copy; <span className="italic">(so I don't have to change the year)</span> Muhammad
        Hanzla
      </p>
    </footer>
  );
}
