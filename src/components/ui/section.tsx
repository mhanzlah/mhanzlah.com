import clsx from 'clsx';

type Heading = 'h1' | 'h2';

type SectionProps = {
  heading?: Heading;
  headingClassName?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  heading: HeadingTag = 'h2',
  headingClassName = '',
  title,
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={className}>
      <HeadingTag
        className={clsx(
          'mb-6 font-bold',
          HeadingTag === 'h2' ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl',
          headingClassName
        )}
      >
        {title}
      </HeadingTag>
      <div>{children}</div>
    </section>
  );
}
