import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainBtn } from '@/shared/ui/main-btn';

import { IconBox } from '../../../shared/icons/icon-box';
import styles from './about-type-2.module.scss';

type Props = {
  data: {
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    list: {
      id: string;
      boldText?: string;
      simpleText?: string;
      image?: string;
    }[];
  };
};

export const AboutTypeTwo: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>

        <div className={styles.root_wrapper}>
          <Image src={data.image} alt={data.title} width={680} height={500} />
          <div className={styles.root_content}>
            <span className={clsx('base_subtitle', styles.base_subtitle)}>
              {data.subtitle}
            </span>
            <p>{data.description}</p>
            <ul>
              {data.list.map((item) => (
                <li key={item.id}>
                  <div className={styles.item}>
                    <IconBox width={36} height={40} />
                    <span className={styles.item_title}>{item.boldText}</span>
                  </div>
                </li>
              ))}
            </ul>
            <MainBtn outlined={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
