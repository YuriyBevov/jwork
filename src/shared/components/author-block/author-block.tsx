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
      {data.avatar && (
        <div className={styles.root_avatar}>
          <Image
            src={data.avatar ? data.avatar : ''}
            alt={data.user ? data.user : ''}
            width={48}
            height={48}
          />
        </div>
      )}

      {data.user && <span className={styles.root_username}>{data.user}</span>}

      {(data.note || data.date) && (
        <div className={styles.root_footer}>
          {data.date && <span>{data.date}</span>}
          {data.note && <span>{data.note}</span>}
        </div>
      )}
    </div>
  );
};
