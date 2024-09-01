import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
import { HeaderMenu } from '@/shared/components/navigation';

import styles from '../header.module.scss';
import { HeaderDTO } from '../types';

export const HeaderType_1 = async () => {
  const data: HeaderDTO = await getLocalData(
    'src/components/header/components/data.json',
  );

  return (
    <header className={clsx(styles.root, styles.rounded_lg)}>
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

          {/* <ContactBlock className={styles.contact} data={data.contactInfo} /> */}

          <MainBtn className={styles.btn} text="Кнопка" outlined />
          <MainBtn className={styles.btn} text="Кнопка заявки" />
        </div>

        <HeaderMenu data={data.navigation} />
      </div>
    </header>
  );
};
