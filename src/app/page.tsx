import { AboutType_1 } from '@/components/about';
import { AdvantagesType_1 } from '@/components/advantages';
import { Footer } from '@/components/footer';
import { NewsType_1 } from '@/components/news';
import { OfferType_1 } from '@/components/offer';
import { ServicesType_1 } from '@/components/services';
import { StaffType_1 } from '@/components/staff';
import { getLocalData } from '@/lib/localdata';

interface Block {
  id: string;
  type: string;
  layout: string;
}

function blockRenderer(block: Block) {
  switch (block.type) {
    case 'footer':
      return <Footer key={block.id} layout={block.layout} />;
    default:
      return null;
  }
}

const Home = async () => {
  const data = await getLocalData('src/lib/data-default-setting.json');

  const { blocks } = data;
  if (!blocks) return <div>Блоки не найдены</div>;

  return (
    <main>
      <AdvantagesType_1 />
      <ServicesType_1 />
      <AboutType_1 />
      <StaffType_1 />
      <OfferType_1 />
      <NewsType_1 />
      {blocks.map((block: Block) => blockRenderer(block))}
    </main>
  );
};

export default Home;
