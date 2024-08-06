import Link from 'next/link';
import React from 'react';

import { Requisites } from '@/components/footer/types';

export const Requisite = ({
  data,
  className,
}: {
  data: Requisites;
  className?: string;
}) => {
  return (
    <div className={className}>
      <nav>
        <span>{data.title}:</span>
        <ul>
          {data.items?.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
