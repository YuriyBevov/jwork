import {
  AboutTypeFour,
  AboutTypeOne,
  AboutTypeThree,
  AboutTypeTwo,
} from '@/components/about';
import { ABOUT_SECTION_DATA } from '@/components/about/mock';
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
import {
  ServicesTypeFive,
  ServicesTypeFour,
  ServicesTypeOne,
  ServicesTypeSeven,
  ServicesTypeSix,
  ServicesTypeTres,
  ServicesTypeTwo,
} from '@/components/services';
import { SERVICES_SECTION_DATA } from '@/components/services/mock';

export default function Home() {
  return (
    <main>
      <AdvantagesTypeOne data={ADVANTAGES_SECTION_DATA} />
      <AdvantagesTypeTwo data={ADVANTAGES_SECTION_DATA} />
      <AdvantagesTypeTres data={ADVANTAGES_SECTION_DATA_TRES} />
      <AdvantagesTypeFour data={ADVANTAGES_SECTION_DATA_FOUR} />
      <AdvantagesTypeFive data={ADVANTAGES_SECTION_DATA_TRES} />
      <AdvantagesTypeSix data={ADVANTAGES_SECTION_DATA_SIX} />
      <AdvantagesTypeSeven data={ADVANTAGES_SECTION_DATA_SEVEN} />

      <ServicesTypeOne data={SERVICES_SECTION_DATA} />
      <ServicesTypeTwo data={SERVICES_SECTION_DATA} />
      <ServicesTypeTres data={SERVICES_SECTION_DATA} />
      <ServicesTypeFour data={SERVICES_SECTION_DATA} />
      <ServicesTypeFive data={SERVICES_SECTION_DATA} />
      <ServicesTypeSix data={SERVICES_SECTION_DATA} />
      <ServicesTypeSeven data={SERVICES_SECTION_DATA} />

      <AboutTypeOne data={ABOUT_SECTION_DATA} />
      <AboutTypeTwo data={ABOUT_SECTION_DATA} />
      <AboutTypeThree data={ABOUT_SECTION_DATA} />
      <AboutTypeFour data={ABOUT_SECTION_DATA} />
    </main>
  );
}
