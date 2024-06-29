import { AboutTypeOne } from '@/components/about';
import { ABOUT_SECTION_DATA } from '@/components/about/mock';
import {
  AdvantagesTypeOne,
  AdvantagesTypeTres,
  AdvantagesTypeTwo,
} from '@/components/advantages';
import { ADVANTAGES_SECTION_DATA } from '@/components/advantages/mock';
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
      <AdvantagesTypeTres data={ADVANTAGES_SECTION_DATA} />

      <ServicesTypeOne data={SERVICES_SECTION_DATA} />
      <ServicesTypeTwo data={SERVICES_SECTION_DATA} />
      <ServicesTypeTres data={SERVICES_SECTION_DATA} />
      <ServicesTypeFour data={SERVICES_SECTION_DATA} />
      <ServicesTypeFive data={SERVICES_SECTION_DATA} />
      <ServicesTypeSix data={SERVICES_SECTION_DATA} />
      <ServicesTypeSeven data={SERVICES_SECTION_DATA} />

      <AboutTypeOne data={ABOUT_SECTION_DATA} />
    </main>
  );
}
