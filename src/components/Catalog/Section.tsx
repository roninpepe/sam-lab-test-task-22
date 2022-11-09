import { FC } from 'react';
import { ICatalogSectionProps } from 'types/_';
import CatalogItem from 'components/Catalog/Item';
import styles from 'styles/components/Catalog.module.scss';

const CatalogSection: FC<ICatalogSectionProps> = ({ items }) => {
  return (
    <div className={styles.section}>
      <div className={styles['section-items']}>
        {items.map((v) => (
          <CatalogItem key={v.uid} item={v} />
        ))}
      </div>
    </div>
  );
};

export default CatalogSection;
