'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import SearchModal from '@/components/search/search-modal';
import { navLinks } from '@/data/nav-links';
import Tooltip from '../ui/tooltip';

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="relative">
      <div className="flex h-14 w-full items-center justify-between border-b border-gray-300 dark:border-gray-600">
        <h1>
          <Link
            href="/"
            className="hover:border-foreground border-b border-transparent text-xl font-semibold"
          >
            Muhammad Hanzla
          </Link>
        </h1>
        <div className="flex items-center">
          <ul className="mr-4 hidden gap-4 md:flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-900"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Menu */}
          <Tooltip data="Menu">
            <button
              className={clsx(
                'mr-1 rounded p-2 hover:bg-gray-200 md:hidden dark:hover:bg-gray-900',
                isMenuOpen ? 'bg-gray-200 dark:bg-gray-900' : ''
              )}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
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
              )}
            </button>
          </Tooltip>
          {/* Search */}
          <Tooltip data="Search">
            <button
              className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-900"
              onClick={() => setIsSearchOpen(true)}
            >
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </Tooltip>
          {/* Theme */}
          <Tooltip data="Theme">
            <button
              className="ml-1 rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-900"
              onClick={toggleTheme}
            >
              {!mounted ? null : resolvedTheme === 'dark' ? (
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
              ) : (
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
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </Tooltip>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-background fixed top-14 left-0 z-100 h-[calc(100vh-56px)] w-full">
            <ul className="mt-24 flex flex-col items-center gap-1 space-y-8">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="m-2 rounded p-4 text-lg hover:bg-gray-200 dark:hover:bg-gray-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isSearchOpen && <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </nav>
  );
}
