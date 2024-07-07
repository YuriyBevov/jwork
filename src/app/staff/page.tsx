import { StaffTypeOne, StaffTypeThree } from '@/components/staff';
import {
  STAFF_SECTION_DATA,
  STAFF_SECTION_THREE,
} from '@/components/staff/mock';

export default function Staff() {
  return (
    <>
      <StaffTypeOne data={STAFF_SECTION_DATA} />
      <StaffTypeThree data={STAFF_SECTION_THREE} />
    </>
  );
}
