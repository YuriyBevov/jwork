import { AboutType_1 } from '@/components/about';
import { AdvantagesType_1 } from '@/components/advantages';
import { FooterType_1 } from '@/components/footer';
import { NewsType_1 } from '@/components/news';
import { OfferType_1 } from '@/components/offer';
import { ServicesType_1 } from '@/components/services';
import { StaffType_1 } from '@/components/staff';

export default function Home() {
  return (
    <main>
      <AdvantagesType_1 />
      <ServicesType_1 />
      <AboutType_1 />
      <StaffType_1 />
      <OfferType_1 />
      <NewsType_1 />
      <FooterType_1 />
    </main>
  );
}
