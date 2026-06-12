import clsx from 'clsx';

type Props = {
  parent?: boolean;
  headingClassName?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  parent = false,
  headingClassName = '',
  title,
  children,
  className = '',
}: Props) {
  const HeadingTag = parent ? 'h1' : 'h2';

  return (
    <section className={className}>
      <HeadingTag
        className={clsx(
          'mb-6 font-bold',
          parent ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl',
          headingClassName
        )}
      >
        {title}
      </HeadingTag>
      <div>{children}</div>
    </section>
  );
}
