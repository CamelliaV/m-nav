'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/logo';

export function MainNav({ title }: { title?: string }) {
  return (
    <div className='mr-4 md:flex'>
      <Link href='/' className='mr-4 flex items-center gap-2 lg:mr-6'>
        <Logo className='size-6 rounded-sm' />
        <span className='font-bold'>
          {title || siteConfig.name}
        </span>
      </Link>
    </div>
  );
}
