import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './about-type-7.module.scss';

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

export const AboutTypeSeven: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        {data.description && (
          <p className={clsx('base_text', styles.base_text)}>
            {data.description}
          </p>
        )}

        <div className={styles.root_wrapper}>
          <Image src={data.image} alt={data.title} width={450} height={300} />
          <Image src={data.image} alt={data.title} width={450} height={300} />
          <Image src={data.image} alt={data.title} width={450} height={300} />
        </div>
      </div>
    </section>
  );
};
