import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './advantages-type-6.module.scss';

type Props = {
  data: {
    title: string;
    description?: string;
    image: {
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    list: { id: string; title: string; description: string }[];
  };
};

export const AdvantagesTypeSix: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <div className={styles.root_wrapper}>
          <div className={styles.root_content}>
            <h2 className={clsx('base_title', styles.base_title)}>
              {data.title}
            </h2>
            {data.description && (
              <p className={clsx('base_text', styles.base_text)}>
                {data.description}
              </p>
            )}
            <ul>
              {data.list.map((item) => (
                <li key={item.id} className={styles.item}>
                  <span className={clsx('base_subtitle', styles.base_subtitle)}>
                    {item.title}
                  </span>
                  <div className={styles.item_line}></div>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={data.image.url}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};
