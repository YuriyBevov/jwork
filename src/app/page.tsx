import { AdvantagesTypeOne } from '@/components/advantages/advantages-type-1';
import { ADVANTAGES_TYPE_ONE_LIST } from '@/components/advantages/mock';

export default function Home() {
  return (
    <main>
      <AdvantagesTypeOne items={ADVANTAGES_TYPE_ONE_LIST} />
    </main>
  );
}
