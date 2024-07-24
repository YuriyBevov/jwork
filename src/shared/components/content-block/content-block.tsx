import styles from './content-block.module.scss';

type Props = {
  content: string;
};

export const ContentBlock: React.FC<Props> = (data) => {
  return (
    <div
      className={styles.root}
      dangerouslySetInnerHTML={{ __html: data.content }}
    />
  );
};
