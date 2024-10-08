import { Button, MultiSelect, Select } from '@mantine/core';
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
              <div>
                <TabContent className={styles.tab_content}>
                  {data.tabs.map((tab) => (
                    <div key={tab.id}>
                      {tab.items.map((item) =>
                        item.type === 'multi_select' ? (
                          <MultiSelect
                            key={item.id}
                            placeholder="Выбрать комнату"
                            data={
                              item.content &&
                              item.content.map((contentItem) => ({
                                label: contentItem.value,
                                value: contentItem.value,
                              }))
                            }
                            checkIconPosition="right"
                          />
                        ) : (
                          <>
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
                              comboboxProps={{
                                transitionProps: {
                                  transition: 'pop',
                                  duration: 200,
                                },
                                shadow: 'md',
                              }}
                              searchable={item.type === 'search' ? true : false}
                              // rightSection={}
                            />
                          </>
                        ),
                      )}
                    </div>
                  ))}
                </TabContent>
                <Button variant="outline">На карте</Button>
                <Button radius="xl" color="green">
                  Искать
                </Button>
              </div>
            </Tab>
          </div>
        </div>
      </section>
    </>
  );
};
