'use client';

import { useRouter } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';

type NewsletterFormProps = Omit<ComponentPropsWithoutRef<'form'>, 'className'>;

export function NewsletterForm(props: NewsletterFormProps) {
  const router = useRouter();

  return (
    <form
      className="grid gap-y-4 gap-x-2 sm:relative sm:flex sm:p-1"
      onSubmit={(event) => {
        const data = new FormData(event.currentTarget);
        const email = data.get('email');

        // TODO: Subscribe email
        console.info(email);

        router.push('/thank-you');
      }}
      {...props}
    />
  );
}
