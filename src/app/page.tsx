import { AdvantagesTypeOne } from '@/components/advantages/advantages-type-1';
import { ADVANTAGES_TYPE_ONE_LIST } from '@/components/advantages/mock';
import { SERVICES_SECTION_DATA } from '@/components/services/mock';
import { ServicesTypeOne } from '@/components/services/services-type-1';

export default function Home() {
  return (
    <main>
      <AdvantagesTypeOne items={ADVANTAGES_TYPE_ONE_LIST} />
      <ServicesTypeOne data={SERVICES_SECTION_DATA} />
    </main>
  );
}
