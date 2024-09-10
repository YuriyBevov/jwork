import React from 'react';

import { getLocalData } from '@/lib/localdata';
import { Tab, TabContent, TabList } from '@/shared/components/tab';

import { HeroDTO } from '../../types';

export const HeroType_1 = async () => {
  const data: HeroDTO = await getLocalData(
    'src/components/hero/components/data.json',
  );

  return (
    <section>
      <div className="container">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <Tab>
          <TabList>
            {data.tabs.map((tab) => (
              <React.Fragment key={tab.id}>{tab.title}</React.Fragment>
            ))}
          </TabList>
          <TabContent>
            {data.tabs.map((tab) => (
              <div key={tab.id}>
                {tab.items.map((item) => (
                  <div key={item.id}>{item.title}</div>
                ))}
              </div>
            ))}
          </TabContent>
        </Tab>
      </div>
    </section>
  );
};
