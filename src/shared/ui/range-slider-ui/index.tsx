import { Input, InputLabel, RangeSlider } from '@mantine/core';
import React, { useState } from 'react';

import { FilterItem } from '@/components/map/types';
import { IconSmallArrow } from '@/shared/icons/icon-small-arrow';

import styles from './range-slider-ui.module.scss';

export const RangeSliderUi = ({ data }: { data: FilterItem }) => {
  const MIN = 10;
  const MAX = 675;

  const [value, setValue] = useState<[number, number]>([MIN, MAX]);

  const handleInputChange = (index: number, newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, MIN), MAX);
    setValue((prevValue) => {
      const [min, max] = prevValue;
      return index === 0 ? [clampedValue, max] : [min, clampedValue];
    });
  };

  return (
    <div className={styles.root}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {data.title} <IconSmallArrow width={12} height={7} />
      </div>
      <div>
        <div className={styles.input_numeric}>
          <InputLabel>
            <Input
              type="number"
              value={value[0]}
              min={MIN}
              max={MAX}
              onChange={(e) => handleInputChange(0, parseInt(e.target.value))}
            />
          </InputLabel>
          <InputLabel>
            <Input
              type="number"
              value={value[1]}
              min={MIN}
              max={MAX}
              onChange={(e) => handleInputChange(1, parseInt(e.target.value))}
            />
          </InputLabel>
        </div>
        <RangeSlider
          classNames={{
            bar: styles.bar,
            track: styles.track,
            thumb: styles.thumb,
          }}
          defaultValue={[MIN, MAX]}
          label={null}
          minRange={1}
          min={MIN}
          max={MAX}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
