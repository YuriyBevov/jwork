import clsx from 'clsx';
import React from 'react';

import { ButtonUi } from '@/shared/components/button';
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
      return <SelectUi radius="xl" className={styles.select} item={item} />;
    case 'multi_select':
      return <MultiSelectUi radius="xl" item={item} />;
    case 'search':
      return <AutocompleteUi radius="xl" item={item} />;
    case 'price_range':
      return <PriceRangeDropdownUi radius="xl" />;
    default:
      return null;
  }
};

export const HeroType_4 = ({ data }: { data: HeroDTO }) => {
  return (
    <section className={styles.root}>
      <div
        className={styles.background}
        style={{ backgroundImage: 'url(' + data.backgroundImagePath + ')' }}
      ></div>
      <div className={clsx('container', styles.content)}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
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
              height="lg"
              style={{ backgroundColor: '#fff' }}
              className={styles.button}
            >
              На карте
            </ButtonUi>
            <ButtonUi height="lg" className={styles.button}>
              Искать
            </ButtonUi>
          </div>
        </Tab>
      </div>
    </section>
  );
};
