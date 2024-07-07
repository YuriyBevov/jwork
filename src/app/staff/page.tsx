import { Suspense } from 'react';

import { StaffTypeOne, StaffTypeThree } from '@/components/staff';
import { SkeletonStaffTypeThree } from '@/components/staff/staff-type-3/skeleton';

export default function Staff() {
  return (
    <>
      <Suspense fallback={<p>Loading</p>}>
        <StaffTypeOne />
      </Suspense>
      <Suspense fallback={<SkeletonStaffTypeThree />}>
        <StaffTypeThree />
      </Suspense>
    </>
  );
}
