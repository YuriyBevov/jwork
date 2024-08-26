import clsx from 'clsx';
import React from 'react';

import { ContactInfo, ContactInfoItem } from '@/components/footer/types';

// import { IconMarker } from '@/shared/icons/icon-set-1/icon_marker';
// import { IconPhone } from '@/shared/icons/icon-set-1/icon_phone';
import { ContactBlockItem } from './components/contact-block-item';
import styles from './contact-block.module.scss';

export const ContactBlock = ({
  title,
  data,
  className,
  // icon,
}: {
  title?: string;
  data: ContactInfo;
  className?: string;
  // icon?: boolean;
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {title && <span>{title}:</span>}
      <ul>
        {data.items.map((item: ContactInfoItem) => (
          <li className={item.icon ? styles.with_icon : ''} key={item.id}>
            {/* {icon && item.icon && item.icon?.title === 'IconMarker' && (
              <IconMarker width={item.icon.width} height={item.icon.height} />
            )}
            {item.icon?.title === 'IconPhone' && (
              <IconPhone width={item.icon.width} height={item.icon.height} />
            )} */}
            <ContactBlockItem type={item.type}>{item.text}</ContactBlockItem>
          </li>
        ))}
      </ul>
    </div>
  );
};
