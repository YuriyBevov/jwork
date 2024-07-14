// import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { IconFacebook } from '@/shared/icons/icon-fb';
import { IconInstagram } from '@/shared/icons/icon-insta';
import { IconYoutube } from '@/shared/icons/icon-youtube';
import { MainInput } from '@/shared/ui/main-input';
import { SubmitBtn } from '@/shared/ui/submit-btn';

import styles from './footer-type-1.module.scss';
import { FooterData } from './types';

export const FooterType_1 = async () => {
  const data: FooterData = await getLocalData(
    'src/components/footer/footer-type-1/data.json',
  );

  return (
    <section className={styles.root}>
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

          <div className={styles.top_menu}>
            {data.mainMenu.map((item) => (
              <nav className={styles.top_menu_nav} key={item.title}>
                <span className={styles.top_menu_nav_title}>{item.title}</span>
                <ul>
                  {item.items.map((subItem) => (
                    <li key={subItem.title}>
                      <Link href={subItem.href}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className={styles.subscribe_wrapper}>
            <div className={styles.subscribe}>
              <span className={styles.subscribe_title}>
                {data.subscribe.title}
              </span>
              <span className={styles.subscribe_text}>
                {data.subscribe.text}
              </span>
              <fieldset>
                <MainInput
                  type="text"
                  name="E-mail"
                  placeholder="Введите Ваш e-mail"
                  id="subscribe"
                  rounded={'lg'}
                />
                <SubmitBtn text="Подписаться" rounded={'lg'} outlined />
              </fieldset>

              <small className={styles.subscribe_note}>
                {data.subscribe.note}
              </small>
            </div>
          </div>
        </div>

        <div className={styles.root_bottom}>
          <div className={styles.copyright}>
            <span>{data.copyright}</span>
          </div>

          <div className={styles.bottom_menu}>
            <ul>
              {data.bottomMenu.map((item) => (
                <li key={item.title}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.social}>
            <ul>
              {data.social.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} rel="nofollow noopener norefferer">
                    {item.title === 'Facebook' ? (
                      <IconFacebook width={24} height={24} />
                    ) : null}
                    {item.title === 'Youtube' ? (
                      <IconYoutube width={24} height={24} />
                    ) : null}
                    {item.title === 'Instagram' ? (
                      <IconInstagram width={24} height={24} />
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
