import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { MainBtn } from '@/shared/components/main-btn';
import { HeaderMenu } from '@/shared/components/navigation';
import { IconEmail } from '@/shared/icons/icon-set-1/icon_email';
import { IconMarker } from '@/shared/icons/icon-set-1/icon_marker';
import { IconPhone2 } from '@/shared/icons/icon-set-1/icon_phone_2';

import styles from '../header.module.scss';
import { HeaderDTO } from '../types';

export const HeaderType_4 = async () => {
  const data: HeaderDTO = await getLocalData(
    'src/components/header/components/data.json',
  );

  return (
    <header className={clsx(styles.root, styles.rounded_xs)}>
      <div className="container">
        <div className={styles.top}>
          <div className={clsx(styles.address, styles.icon)}>
            <IconMarker width={24} height={24} />
            <span>{data.address}</span>
          </div>

          <Link href="/" className={clsx(styles.logo, styles.center)}>
            <Image
              src={data.logo.src}
              width={data.logo.width}
              height={data.logo.height}
              alt={data.logo.alt}
            />
          </Link>

          <div className={styles.info}>
            <div className={styles.icon}>
              <IconEmail width={20} height={16} />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
            <div className={styles.icon}>
              <IconPhone2 width={20} height={18} />
              <a href={`tel:${data.phone.replace(/\s+/g, '')}`}>{data.phone}</a>
            </div>
          </div>

          <MainBtn className={styles.btn} text="Кнопка заявки" />
        </div>

        <HeaderMenu data={data.navigation} />
      </div>
    </header>
  );
};
