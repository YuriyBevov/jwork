import { getLocalData } from '@/lib/localdata';
import { FilterMap } from '@/shared/components/filter-map';
import { YMap } from '@/shared/components/yMap';

import { FilterDTO } from '../../types';
import styles from '../map.module.scss';

export const MapType_1 = async () => {
  const data: FilterDTO = await getLocalData(
    'src/components/map/components/map-type-1/data.json',
  );

  return (
    <section>
      <div className="container-fluid">
        <div className={styles.root}>
          <FilterMap data={data.filter} />
          <YMap />
        </div>
      </div>
    </section>
  );
};
