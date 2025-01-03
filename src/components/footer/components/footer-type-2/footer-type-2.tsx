import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { BottomMenu } from '@/shared/components/bottom-menu';
import { Social } from '@/shared/components/social';
import { Subscribe } from '@/shared/components/subscribe/subscribe';
import { TopMenu } from '@/shared/components/top-menu';

import { FooterDTO } from '../../types';
import styles from './footer-type-2.module.scss';

export const FooterType_2 = async () => {
  const data: FooterDTO = await getLocalData(
    'src/components/footer/components/footer-type-2/data.json',
  );

  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.root_top}>
          <div className={styles.root_info}>
            <Link href="/" className={styles.logo}>
              <Image
                src={data.logo.src}
                width={data.logo.width}
                height={data.logo.height}
                alt={data.logo.alt}
              />
            </Link>
            <Subscribe
              className={styles.subscribe}
              title="Подписка на рассылку"
              data={data?.subscribe}
            />
          </div>
          <div className={styles.root_menu}>
            <TopMenu title className={styles.main_menu} data={data.mainMenu} />
            <nav className={styles.social}>
              <span>Соц.сети</span>
              <Social title data={data?.social} />
            </nav>
          </div>
        </div>
        <div className={styles.root_bottom}>
          <div className={styles.copyright}>
            <span>{data.copyright}</span>
          </div>
          <BottomMenu className={styles.bottom_menu} data={data.bottomMenu} />
        </div>
      </div>
    </footer>
  );
};
