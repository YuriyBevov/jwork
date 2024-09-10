import { Input, Select } from '@mantine/core';
import React from 'react';

import { HeaderType_1 } from '@/components/header/components';
import { getLocalData } from '@/lib/localdata';
import { Tab, TabContent, TabList } from '@/shared/components/tab';

import { HeroDTO } from '../../types';
import styles from '../hero.module.scss';

export const HeroType_1 = async () => {
  const data: HeroDTO = await getLocalData(
    'src/components/hero/components/data.json',
  );
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
              <TabContent className={styles.tab_content}>
                {data.tabs.map((tab) => (
                  <div key={tab.id}>
                    {tab.items.map((item) =>
                      item.type === 'select' ? (
                        <Select
                          className={styles.select}
                          key={item.id}
                          data={
                            item.content &&
                            item.content.map((contentItem) => ({
                              label: contentItem.value,
                              value: contentItem.value,
                            }))
                          }
                          defaultValue={item.content?.[0].value}
                          allowDeselect={false}
                        />
                      ) : (
                        <Input key={item.id} />
                      ),
                    )}
                  </div>
                ))}
              </TabContent>
            </Tab>
          </div>
        </div>
      </section>
    </>
  );
};
