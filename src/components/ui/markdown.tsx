import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';

export default function Markdown({
  children,
  h2Border = false,
}: {
  children: string;
  h2Border?: boolean;
}) {
  return (
    <article className="max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="mb-6 text-3xl font-bold">{children}</h1>,
          h2: ({ children }) => (
            <h2
              className={clsx(
                'mt-10 mb-4 pb-2 text-2xl font-semibold',
                h2Border && 'border-b border-gray-200 dark:border-gray-800'
              )}
            >
              {children}
            </h2>
          ),
          p: ({ children }) => <p className="text-foreground mb-5 leading-7">{children}</p>,
          strong: ({ children }) => <strong className="text-foreground">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} className="text-foreground border-foreground border-b no-underline">
              {children}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
}
