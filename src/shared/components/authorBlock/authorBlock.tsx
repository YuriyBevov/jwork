import Image from 'next/image';

import styles from './user-info-block.module.scss';

type Props = {
  user?: string;
  avatar?: string;
  date?: string;
  note?: string;
};

export const AuthorBlock: React.FC<Props> = (data) => {
  return (
    <div className={styles.root}>
      <Image
        src={data.avatar ? data.avatar : ''}
        alt={data.user ? data.user : ''}
        width={48}
        height={48}
      />
      <span>{data.user}</span>
      <div className={styles.root_footer}>
        <span>{data.date}</span>
        <span>{data.note}</span>
      </div>
    </div>
  );
};
