import Link from 'next/link';
import React from 'react';

import { FooterSocial } from '@/components/footer/types';
import { IconFacebook } from '@/shared/icons/icon-fb';
import { IconInstagram } from '@/shared/icons/icon-insta';
import { IconYoutube } from '@/shared/icons/icon-youtube';

export const SocialUi = ({
  data,
  className,
}: {
  data: FooterSocial[];
  className?: string;
}) => {
  return (
    <div className={className}>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={item.href} rel="nofollow noopener norefferer">
              {item.title === 'Facebook' ? (
                <IconFacebook width={24} height={24} />
              ) : null}
              {item.title === 'Youtube' ? (
                <IconYoutube width={24} height={24} />
              ) : null}
              {item.title === 'Instagram' ? (
                <IconInstagram width={24} height={24} />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
