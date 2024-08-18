import { Badge } from '@/shared/components/badge';

import styles from './badge-block.module.scss';

type Props = {
  data: Badge[];
};

interface Badge {
  text: string;
  outlined?: boolean;
  accent?: boolean;
}

export const BadgeBlock: React.FC<Props> = (badges) => {
  return (
    <div className={styles.root}>
      {badges.data.map((badge) => (
        <Badge
          key={badge.text}
          text={badge.text}
          outlined={badge.outlined}
          accent={badge.accent}
        />
      ))}
    </div>
  );
};
