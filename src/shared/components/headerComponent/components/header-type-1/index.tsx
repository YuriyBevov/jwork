'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import { HeaderDTO } from '@/components/header/components/types';
import { MainBtn } from '@/shared/components/main-btn';
import { HeaderMenu } from '@/shared/components/navigation';

// import { IconBurger } from '@/shared/icons/icon-burger';
import common from '../header.module.scss';
import custom from './header-type-1.module.scss';

export const HeaderType_1 = ({ data }: { data: HeaderDTO }) => {
  const [navState, setNavState] = useState(false);

  const onClickHandler = () => {
    setNavState(!navState);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = navState ? '' : 'hidden';
    }
  };

  return (
    <header className={clsx(common.root, custom.root)}>
      <div className="container">
        <div
          className={clsx(
            common.header_main,
            custom.header_main,
            navState ? common.header_main_active : '',
          )}
        >
          <div className={clsx(common.header_logo, custom.header_logo)}>
            <Link href="/" className={common.logo}>
              <Image
                src={data.logo.src}
                width={data.logo.width}
                height={data.logo.height}
                alt={data.logo.alt}
              />
            </Link>
          </div>

          <div className={clsx(common.header_contacts, custom.header_contacts)}>
            <Link href={`mailto:${data.email}`}>
              <span>{data.email}</span>
            </Link>
            <Link href={`tel:${data.phone.replace(/\s+/g, '')}`}>
              <span>{data.phone}</span>
            </Link>
          </div>

          <div className={clsx(common.header_action, custom.header_action)}>
            <MainBtn text="Кнопка" outlined rounded="lg" />
            <MainBtn text="Кнопка заявки" rounded="lg" />
          </div>

          <button
            className={clsx(common.burger, custom.burger)}
            aria-label="Меню"
            onClick={() => onClickHandler()}
          >
            <span
              className={clsx(common.burger_line, common.burger_line_top)}
            ></span>
            <span
              className={clsx(common.burger_line, common.burger_line_middle)}
            ></span>
            <span
              className={clsx(common.burger_line, common.burger_line_bottom)}
            ></span>
          </button>
        </div>

        <HeaderMenu align="center" data={data} active={navState} />
      </div>
    </header>
  );
};
