import ReactMarkdown from 'react-markdown';

export default function Markdown({ children }: { children: string }) {
  return (
    <article className="max-w-none">
      <ReactMarkdown
        components={{
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
