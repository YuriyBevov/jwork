import {
  AdvantagesTypeOne,
  AdvantagesTypeTres,
  AdvantagesTypeTwo,
} from '@/components/advantages';
import { ADVANTAGES_SECTION_DATA } from '@/components/advantages/mock';
import { SERVICES_SECTION_DATA } from '@/components/services/mock';
import { ServicesTypeOne } from '@/components/services/services-type-1';
import { ServicesTypeTwo } from '@/components/services/services-type-2';
import { ServicesTypeTres } from '@/components/services/services-type-3';
import { ServicesTypeFour } from '@/components/services/services-type-4';
import { ServicesTypeSeven } from '@/components/services/services-type-7';

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
      <ServicesTypeSeven data={SERVICES_SECTION_DATA} />
    </main>
  );
}
