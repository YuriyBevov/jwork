import {
  AdvantagesTypeFive,
  AdvantagesTypeFour,
  AdvantagesTypeOne,
  AdvantagesTypeSeven,
  AdvantagesTypeSix,
  AdvantagesTypeTres,
  AdvantagesTypeTwo,
} from '@/components/advantages';
import {
  ADVANTAGES_SECTION_DATA,
  ADVANTAGES_SECTION_DATA_FOUR,
  ADVANTAGES_SECTION_DATA_SEVEN,
  ADVANTAGES_SECTION_DATA_SIX,
  ADVANTAGES_SECTION_DATA_TRES,
} from '@/components/advantages/mock';

export default function Advantages() {
  return (
    <>
      <AdvantagesTypeOne data={ADVANTAGES_SECTION_DATA} />
      <AdvantagesTypeTwo data={ADVANTAGES_SECTION_DATA} />
      <AdvantagesTypeTres data={ADVANTAGES_SECTION_DATA_TRES} />
      <AdvantagesTypeFour data={ADVANTAGES_SECTION_DATA_FOUR} />
      <AdvantagesTypeFive data={ADVANTAGES_SECTION_DATA_TRES} />
      <AdvantagesTypeSix data={ADVANTAGES_SECTION_DATA_SIX} />
      <AdvantagesTypeSeven data={ADVANTAGES_SECTION_DATA_SEVEN} />
    </>
  );
}
