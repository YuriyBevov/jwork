import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { MainBtn } from '@/shared/ui/main-btn';

import styles from './about-type-3.module.scss';

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

export const AboutTypeThree: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <h2 className={clsx('base_title', styles.base_title)}>
              {data.title}
            </h2>
            <p>{data.description}</p>
            <MainBtn outlined={true} />
          </div>
          <Image src={data.image} alt={data.title} width={720} height={700} />
        </div>
      </div>
    </section>
  );
};
