import { Button, MultiSelect, Select } from '@mantine/core';
import React from 'react';

import { HeaderType_1 } from '@/components/header/components';
import { getLocalData } from '@/lib/localdata';
import { Tab, TabContent, TabList } from '@/shared/components/tab';

import { HeroDTO, HeroItem } from '../../types';
import styles from '../hero.module.scss';

export const HeroType_1 = async () => {
  const data: HeroDTO = await getLocalData(
    'src/components/hero/components/data.json',
  );

  const getItemElement = (item: HeroItem) => {
    switch (item.type) {
      case 'select':
        return (
          <Select
            className={styles.select}
            key={item.id}
            data={
              item.content &&
              item.content.map((value) => ({
                label: value.value,
                value: value.value,
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
          />
        );
      case 'multi_select':
        return (
          <MultiSelect
            className={styles.multi_select}
            key={item.id}
            placeholder="1,2 комнаты"
            data={
              item.content &&
              item.content.map((value) => ({
                label: value.value,
                value: value.value,
              }))
            }
            checkIconPosition="right"
          />
        );
      case 'search':
        return (
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
            searchable={true}
          />
        );
      case 'price_range':
        return <div>price_range</div>;
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
              <div>
                <TabContent className={styles.tab_content}>
                  {data.tabs.map((tab) => (
                    <div key={tab.id}>
                      {tab.items.map((item) => (
                        <React.Fragment key={item.id}>
                          {getItemElement(item)}
                        </React.Fragment>
                      ))}
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
