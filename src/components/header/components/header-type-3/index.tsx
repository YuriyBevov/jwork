import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { ContactBlock } from '@/shared/components/contact-block/contact-block';
import { MainBtn } from '@/shared/components/main-btn';

import styles from '../header.module.scss';
import { HeaderDTO } from '../types';

export const HeaderType_3 = async () => {
  const data: HeaderDTO = await getLocalData(
    'src/components/header/components/data.json',
  );

  return (
    <header className={clsx(styles.root, styles.rounded_xs)}>
      <div className="container">
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>
            <Image
              src={data.logo.src}
              width={data.logo.width}
              height={data.logo.height}
              alt={data.logo.alt}
            />
          </Link>

          <ContactBlock className={styles.contact} data={data.contactAddress} />
          <ContactBlock className={styles.contact} data={data.contactInfo} />

          <MainBtn className={styles.btn} text="Кнопка заявки" />
        </div>

        <nav className={styles.navigation}>
          <ul className={styles.navigation_list}>
            {data.navigation.map((item) => (
              <li key={item.id}>
                <Link href="#">{item.title}</Link>
                {item.items && (
                  <ul>
                    {item.items.map((subItem) => (
                      <li key={subItem.id}>
                        <Link href="#">{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
