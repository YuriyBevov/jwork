import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { BottomMenu } from '@/shared/components/bottom-menu';
import { Social } from '@/shared/components/social';
import { Subscribe } from '@/shared/components/subscribe/subscribe';
import { TopMenu } from '@/shared/components/top-menu';

import { FooterDTO } from '../../types';
import styles from './footer-type-1.module.scss';

export const FooterType_1 = async () => {
  const data: FooterDTO = await getLocalData(
    'src/components/footer/components/footer-type-1/data.json',
  );

  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.root_top}>
          <Link href="/" className={styles.logo}>
            <Image
              src={data.logo.src}
              width={data.logo.width}
              height={data.logo.height}
              alt={data.logo.alt}
            />
          </Link>

          <TopMenu className={styles.main_menu} data={data.mainMenu} />

          <Subscribe
            className={styles.subscribe}
            title="Подписка на рассылку"
            data={data?.subscribe}
          />
        </div>

        <div className={styles.root_bottom}>
          <div className={styles.copyright}>
            <span>{data.copyright}</span>
          </div>

          <BottomMenu className={styles.bottom_menu} data={data.bottomMenu} />

          <Social data={data.social} className={styles.social} />
        </div>
      </div>
    </footer>
  );
};
