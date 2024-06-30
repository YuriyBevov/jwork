import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import styles from './staff-type-1.module.scss';

type Props = {
  data: {
    title: string;
    description?: string;
    list: {
      id: string;
      name: string;
      label: string;
      image: {
        url: string;
        alt: string;
        width: number;
        height: number;
      };
      property: {
        id: string;
        name: string;
        value: string;
      }[];
    }[];
  };
};

export const StaffTypeOne: React.FC<Props> = ({ data }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={clsx('base_title', styles.base_title)}>{data.title}</h2>
        <div className={styles.root_wrapper}>
          {data.list.map((item) => (
            <div key={item.id} className={styles.item}>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
              <div className={styles.item_name}>{item.name}</div>
              <div className={styles.item_label}>{item.label}</div>
              <ul className={styles.item_property}>
                {item.property.map((property) => (
                  <li key={property.id} className={styles.item_property_item}>
                    <span>{property.name}</span> - <span>{property.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
