import { AboutTypeOne } from '@/components/about';
import { ABOUT_SECTION_DATA } from '@/components/about/mock';
import { AdvantagesTypeOne } from '@/components/advantages';
import { ADVANTAGES_SECTION_DATA } from '@/components/advantages/mock';
import { ServicesType_1 } from '@/components/services';
import { SERVICES_SECTION_DATA } from '@/components/services/mock';
import { StaffTypeOne } from '@/components/staff';

export default function Home() {
  return (
    <main>
      <AdvantagesTypeOne data={ADVANTAGES_SECTION_DATA} />
      <ServicesType_1 data={SERVICES_SECTION_DATA} />
      <AboutTypeOne data={ABOUT_SECTION_DATA} />
      <StaffTypeOne />
    </main>
  );
}
