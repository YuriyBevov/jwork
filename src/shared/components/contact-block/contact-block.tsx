import clsx from 'clsx';
import React from 'react';

import { ContactInfo, ContactInfoItems } from '@/components/footer/types';

import { ContactBlockItem } from './components/contact-block-item';
import styles from './contact-block.module.scss';

export const ContactBlock = ({
  title,
  data,
  className,
}: {
  title?: string;
  data: ContactInfo;
  className?: string;
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {title && <span>{title}:</span>}
      <ul>
        {data.items.map((item: ContactInfoItems) => (
          <li key={item.id}>
            <ContactBlockItem type={item.type}>{item.text}</ContactBlockItem>
          </li>
        ))}
      </ul>
    </div>
  );
};
