import {
  ServicesType_1,
  ServicesType_2,
  ServicesType_3,
  ServicesType_4,
  ServicesType_5,
  ServicesType_6,
  ServicesType_7,
} from '@/components/services';
import { SERVICES_SECTION_DATA } from '@/components/services/mock';

export default function Services() {
  return (
    <>
      <ServicesType_1 data={SERVICES_SECTION_DATA} />
      <ServicesType_2 data={SERVICES_SECTION_DATA} />
      <ServicesType_3 data={SERVICES_SECTION_DATA} />
      <ServicesType_4 data={SERVICES_SECTION_DATA} />
      <ServicesType_5 data={SERVICES_SECTION_DATA} />
      <ServicesType_6 data={SERVICES_SECTION_DATA} />
      <ServicesType_7 data={SERVICES_SECTION_DATA} />
    </>
  );
}
