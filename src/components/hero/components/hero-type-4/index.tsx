'use client';

import clsx from 'clsx';
import React, { useLayoutEffect, useState } from 'react';

import { ButtonUi } from '@/shared/components/button';
import { SelectTabType_4 } from '@/shared/components/select-tab/select-tab-type-4';
import { Tab, TabContent, TabList } from '@/shared/components/tab';
import { IconPin } from '@/shared/icons/icon-set-1/icon_pin';
import {
  AutocompleteUi,
  MultiSelectUi,
  PriceRangeDropdownUi,
  SelectUi,
} from '@/shared/ui';

import { HeroDTO, HeroItem } from '../../types';
import styles from './hero-type-4.module.scss';

const selectItem = (item: HeroItem) => {
  switch (item.type) {
    case 'select':
      return <SelectUi className={styles.dropdown} radius="xl" item={item} />;
    case 'multi_select':
      return (
        <MultiSelectUi
          classNameInput={styles.multi_input}
          className={styles.dropdown}
          radius="xl"
          item={item}
        />
      );
    case 'search':
      return (
        <AutocompleteUi className={styles.dropdown} radius="xl" item={item} />
      );
    case 'price_range':
      return (
        <PriceRangeDropdownUi
          className={styles.dropdown}
          radius="xl"
          item={item}
        />
      );
    default:
      return null;
  }
};

export const HeroType_4 = ({ data }: { data: HeroDTO }) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.root}>
      <div
        className={styles.background}
        style={{ backgroundImage: 'url(' + data.backgroundImagePath + ')' }}
      ></div>
      <div className={clsx('container', styles.content)}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        {isMobile === true ? (
          <SelectTabType_4 data={data} />
        ) : (
          <Tab className={styles.tab}>
            <TabList className={styles.tab_list}>
              {data.tabs.map((tab) => (
                <React.Fragment key={tab.id}>{tab.title}</React.Fragment>
              ))}
            </TabList>
            <div className={styles.tab_content_wrapper}>
              <TabContent className={styles.tab_content}>
                {data.tabs.map((tab) => (
                  <div key={tab.id}>
                    {tab.items.map((item) => (
                      <React.Fragment key={item.id}>
                        {selectItem(item)}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </TabContent>

              <ButtonUi
                icon={<IconPin fill="#1a57db" width={16} height={20} />}
                outline
                radius="lg"
                height="lg"
                style={{ backgroundColor: '#fff' }}
                className={styles.button}
              >
                На карте
              </ButtonUi>
              <ButtonUi radius="lg" height="lg" className={styles.button}>
                Искать
              </ButtonUi>
            </div>
          </Tab>
        )}
      </div>
    </section>
  );
};
