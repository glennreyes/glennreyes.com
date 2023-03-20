import type { ReactNode } from 'react';
import { Container } from '~/components/ui/layout/Container';

interface PostsLayoutProps {
  children: ReactNode;
}

export default function PostsLayout({ children }: PostsLayoutProps) {
  return <Container width="narrow">{children}</Container>;
}
