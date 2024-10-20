'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

import { HeaderDTO } from '@/components/header/components/types';
import { MainBtn } from '@/shared/components/main-btn';
import { HeaderMenu } from '@/shared/components/navigation';

import common from '../header.module.scss';
import custom from './header-type-1.module.scss';

export const HeaderType_1 = ({ data }: { data: HeaderDTO }) => {
  const [navState, setNavState] = useState(false);

  return (
    <header className={clsx(common.root, custom.root)}>
      <div className="container">
        <div className={clsx(common.header_section, custom.header_section)}>
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
            className={clsx(
              common.burger,
              custom.burger,
              navState ? common.burger_active : '',
            )}
            aria-label="Меню"
            onClick={() => setNavState(!navState)}
          >
            <span
              className={clsx(
                common.burger_line,
                custom.burger_line,
                common.burger_line_top,
              )}
            ></span>
            <span
              className={clsx(
                common.burger_line,
                custom.burger_line,
                common.burger_line_middle,
              )}
            ></span>
            <span
              className={clsx(
                common.burger_line,
                custom.burger_line,
                common.burger_line_bottom,
              )}
            ></span>
          </button>
        </div>

        {/* <div
          className={clsx(
            common.header_section,
            custom.header_section,
            common.header_section_menu,
            navState ? common.header_section_menu_active : '',
          )}
        > */}
        <HeaderMenu align="center" data={data.navigation} active={navState} />
        {/* </div> */}
      </div>
    </header>
  );
};
