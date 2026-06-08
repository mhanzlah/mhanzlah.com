import { useEffect, useRef } from 'react';

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className="bg-background/50 fixed inset-0" onClick={onClose}>
        <div className="mx-auto mt-24 w-full max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
          <div className="bg-background rounded border border-gray-300 shadow dark:border-gray-900">
            <div className="px-4 py-2 flex items-center border-b border-gray-300 dark:border-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search posts..."
                className="w-full bg-transparent px-2 text-sm outline-none"
              />
            </div>
            <div className='my-4'>
              <p className="text-gray-600 dark:text-gray-300 px-4 py-2 text-center">No posts found</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
