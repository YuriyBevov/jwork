import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { BottomMenu } from '@/shared/components/bottom-menu';
import { ContactBlock } from '@/shared/components/contact-block/contact-block';
import { Requisite } from '@/shared/components/requisites';
import { Social } from '@/shared/components/social';
import { TopMenu } from '@/shared/components/top-menu';

import { FooterDTO } from '../../types';
import styles from './footer-type-7.module.scss';

export const FooterType_7 = async () => {
  const data: FooterDTO = await getLocalData(
    'src/components/footer/components/footer-type-7/data.json',
  );

  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.info}>
            <Link href="/" className={styles.logo}>
              <Image
                src={data.logo.src}
                width={data.logo.width}
                height={data.logo.height}
                alt={data.logo.alt}
              />
            </Link>
            <Requisite className={styles.request} data={data.requisites} />
          </div>

          <TopMenu className={styles.main_menu} data={data.mainMenu} />

          <div className={styles.divider}>
            <nav className={styles.social}>
              <span>Соц.сети</span>
              <Social data={data?.social} />
            </nav>
            <ContactBlock title="Адрес" data={data.contactAddress} />
            <ContactBlock title="Контакты" data={data.contactInfo} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>{data.copyright}</span>
          </div>
          <BottomMenu className={styles.bottom_menu} data={data.bottomMenu} />
        </div>
      </div>
    </footer>
  );
};
