import React from 'react';

// import { IconHands } from '@/shared/icons/icon-hands';
import { MainSectionLayout } from '@/layouts/main-section-layout';
import { getLocalData } from '@/lib/localdata';
import { IconSet } from '@/shared/icons';

// import { LayoutAdvantages } from '../../layout/layout-type-1';
import { AdvantagesDTO } from '../../types';
import styles from './advantages-type-1.module.scss';

export const AdvantagesType_1 = async () => {
  const data: AdvantagesDTO = await getLocalData(
    '/src/components/advantages/components/advantages-type-1/data.json',
  );

  return (
    <MainSectionLayout title={data.title} align={'center'}>
      <div className={styles.root}>
        <ul className={styles.list}>
          {data.list.map((item) => (
            <li key={item.id} className={styles.list_item}>
              <div className={styles.list_item_icon}>
                <IconSet name={item.icon} />
              </div>
              <div className={styles.list_item_content}>
                <span className={'base_subtitle'}>{item.title}</span>
                <p className={'base_text'}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainSectionLayout>
  );
};
