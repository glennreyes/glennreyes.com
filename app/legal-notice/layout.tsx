import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Article } from '~/components/ui/layout/Article';
import { getTitle } from '~/utils/metadata';

export const metadata: Metadata = {
  title: getTitle('Legal Notice'),
};

interface LegalNoticeLayoutProps {
  children: ReactNode;
}

export default function LegalNoticeLayout(props: LegalNoticeLayoutProps) {
  return <Article {...props} />;
}
