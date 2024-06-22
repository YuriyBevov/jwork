import Image from 'next/image';
import React from 'react';

import styles from './advantages-type-1.module.scss';

type Props = {
  items: { id: string; title: string; description: string; image: string }[];
};

export const AdvantagesTypeOne: React.FC<Props> = ({ items }) => {
  return (
    <section className={styles.root}>
      {items.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt={item.title} width={100} height={100} />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};
