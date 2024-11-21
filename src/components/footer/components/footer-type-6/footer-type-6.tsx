import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { BottomMenu } from '@/shared/components/bottom-menu';
import { FooterTopMenu } from '@/shared/components/footer-top-menu';
import { Social } from '@/shared/components/social';

import { FooterDTO } from '../../types';
import styles from './footer-type-6.module.scss';

export const FooterType_6 = async () => {
  const data: FooterDTO = await getLocalData(
    'src/components/footer/components/footer-type-4/data.json',
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
          <FooterTopMenu
            className={styles.footer_top_menu}
            data={data.topMenu}
          />
          <Social className={styles.social} data={data?.social} />
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
