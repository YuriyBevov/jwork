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

export default function Services() {
  return (
    <>
      <ServicesTypeOne data={SERVICES_SECTION_DATA} />
      <ServicesTypeTwo data={SERVICES_SECTION_DATA} />
      <ServicesTypeTres data={SERVICES_SECTION_DATA} />
      <ServicesTypeFour data={SERVICES_SECTION_DATA} />
      <ServicesTypeFive data={SERVICES_SECTION_DATA} />
      <ServicesTypeSix data={SERVICES_SECTION_DATA} />
      <ServicesTypeSeven data={SERVICES_SECTION_DATA} />
    </>
  );
}
