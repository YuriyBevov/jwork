import { Button } from '@mantine/core';
import React from 'react';

import { HeaderType_1 } from '@/components/header/components';
import {
  AutocompleteUi,
  MultiSelectUi,
  PriceRangeDropdownUi,
  SelectUi,
} from '@/components/hero/ui';
import { getLocalData } from '@/lib/localdata';
import { Tab, TabContent, TabList } from '@/shared/components/tab';

import { HeroDTO, HeroItem } from '../../types';
import styles from '../hero.module.scss';

export const HeroType_1 = async () => {
  const data: HeroDTO = await getLocalData(
    'src/components/hero/components/data.json',
  );

  const selectItem = (item: HeroItem) => {
    switch (item.type) {
      case 'select':
        return <SelectUi item={item} />;
      case 'multi_select':
        return <MultiSelectUi item={item} />;
      case 'search':
        return <AutocompleteUi item={item} />;
      case 'price_range':
        return <PriceRangeDropdownUi />;
      default:
        return <div>default</div>;
    }
  };

  return (
    <>
      <HeaderType_1 />
      <section className="container">
        <div
          style={{ backgroundImage: 'url(' + data.backgroundImagePath + ')' }}
          className={styles.root}
        >
          <div className={styles.content}>
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
                <Button className={styles.button}>На карте</Button>
                <Button className={styles.button}>Искать</Button>
              </div>
            </Tab>
          </div>
        </div>
      </section>
    </>
  );
};
