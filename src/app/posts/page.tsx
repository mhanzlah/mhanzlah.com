import Section from '@/components/ui/section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
};

export default function Posts() {
  return (
    <Section heading="h1" title="Writings">
      <p>No posts yet.</p>
    </Section>
  );
}
