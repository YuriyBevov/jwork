import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { BottomMenu } from '@/shared/components/bottom-menu';
import { ContactBlock } from '@/shared/components/contact-block/contact-block';
import { Social } from '@/shared/components/social';
import { TopMenu } from '@/shared/components/top-menu';

import { FooterDTO } from '../../types';
import styles from './footer-type-5.module.scss';

export const FooterType_5 = async () => {
  const data: FooterDTO = await getLocalData(
    'src/components/footer/components/footer-type-5/data.json',
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
            <div className={styles.divider}>
              <ContactBlock
                className={styles.contact}
                title="Адрес"
                data={data.contactAddress}
              />
              <ContactBlock
                className={styles.contact}
                title="Контакты"
                data={data.contactInfo}
              />
              <nav className={styles.social}>
                <Social data={data?.social} />
              </nav>
            </div>
          </div>

          <TopMenu title className={styles.main_menu} data={data.mainMenu} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>{data.copyright}</div>
          <BottomMenu className={styles.bottom_menu} data={data.bottomMenu} />
        </div>
      </div>
    </footer>
  );
};
