import clsx from 'clsx';
import React from 'react';

import { HeroDTO, HeroItem } from '@/components/hero/types';
import { ButtonUi } from '@/shared/components/button';
import { Tab, TabContent, TabList } from '@/shared/components/tab';
import { IconPin } from '@/shared/icons/icon-set-1/icon_pin';

import styles from './hero-tab.module.scss';

export const HeroTab = ({
  data,
  selectItem,
}: {
  data: HeroDTO;
  selectItem: (item: HeroItem) => React.ReactNode;
}) => {
  return (
    <section className={clsx('container', styles.container)}>
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

              <ButtonUi
                icon={<IconPin fill="#1a57db" width={16} height={20} />}
                radius="xs"
                outline
                height="lg"
                style={{ backgroundColor: '#fff' }}
                className={styles.button}
              >
                На карте
              </ButtonUi>
              <ButtonUi radius="xs" height="lg" className={styles.button}>
                Искать
              </ButtonUi>
            </div>
          </Tab>
        </div>
      </div>
    </section>
  );
};
