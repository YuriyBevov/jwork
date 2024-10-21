import { FilterDTO } from '@/components/map/types';
import { RangeSliderUi } from '@/shared/ui';

export const FilterItems = ({ data }: { data: FilterDTO }) => {
  return (
    <>
      {/* {data.items.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))} */}

      <RangeSliderUi data={data} />
      <RangeSliderUi data={data} />
      <RangeSliderUi data={data} />
    </>
  );
};
