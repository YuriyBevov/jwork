'use client';

import clsx from 'clsx';
import React, { useLayoutEffect, useState } from 'react';

import { ButtonUi } from '@/shared/components/button';
import { SelectTabType_3 } from '@/shared/components/select-tab/select-tab-type-3';
import { Tab, TabContent, TabList } from '@/shared/components/tab';
import { IconPin } from '@/shared/icons/icon-set-1/icon_pin';
import {
  AutocompleteUi,
  MultiSelectUi,
  PriceRangeDropdownUi,
  SelectUi,
} from '@/shared/ui';

import { HeroDTO, HeroItem } from '../../types';
import styles from './hero-type-3.module.scss';

const selectItem = (item: HeroItem) => {
  switch (item.type) {
    case 'select':
      return <SelectUi radius="sm" className={styles.select} item={item} />;
    case 'multi_select':
      return (
        <MultiSelectUi
          classNameInput={styles.multi_input}
          radius="sm"
          item={item}
        />
      );
    case 'search':
      return <AutocompleteUi radius="sm" item={item} />;
    case 'price_range':
      return <PriceRangeDropdownUi radius="sm" item={item} />;
    default:
      return null;
  }
};

export const HeroType_3 = ({ data }: { data: HeroDTO }) => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div
        style={{ backgroundImage: 'url(' + data.backgroundImagePath + ')' }}
        className={styles.root}
      >
        <div className={clsx('container', styles.content)}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {isMobile === true ? (
            <SelectTabType_3 data={data} />
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
                  radius="sm"
                  outline
                  height="lg"
                  style={{ backgroundColor: '#fff' }}
                  className={styles.button}
                >
                  На карте
                </ButtonUi>
                <ButtonUi radius="sm" height="lg" className={styles.button}>
                  Искать
                </ButtonUi>
              </div>
            </Tab>
          )}
        </div>
      </div>
    </section>
  );
};
