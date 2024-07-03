import { StaffTypeOne } from '@/components/staff';
import { STAFF_SECTION_DATA } from '@/components/staff/mock';

export default function Staff() {
  return (
    <>
      <StaffTypeOne data={STAFF_SECTION_DATA} />
    </>
  );
}
