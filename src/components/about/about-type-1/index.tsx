import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainBtn } from '@/shared/ui/main-btn';

import { IconPrinter } from '../../../shared/icons/icon-printer';
import styles from './about-type-1.module.scss';

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

export const AboutTypeOne: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>

        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <ul>
              {data.list.map((item) => (
                <li key={item.id}>
                  <div className={styles.item}>
                    <IconPrinter width={60} height={60} />
                    <span
                      className={clsx('base_subtitle', styles.base_subtitle)}
                    >
                      {item.boldText}
                    </span>
                    <p>{item.simpleText}</p>
                  </div>
                </li>
              ))}
            </ul>
            <MainBtn outlined={true} rounded={'lg'} />
          </div>
          <Image src={data.image} alt={data.title} width={680} height={500} />
        </div>
      </div>
    </section>
  );
};
