import { About } from '@/components/about';
import { Advantages } from '@/components/advantages';
import { ApartDetail } from '@/components/apart-detail';
import { BlogDetail } from '@/components/blog-detail';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ItemDetail } from '@/components/item-detail';
import { Map } from '@/components/map';
import { News } from '@/components/news';
import { Offer } from '@/components/offer';
import { Services } from '@/components/services';
import { Staff } from '@/components/staff';
import { getLocalData } from '@/lib/localdata';

interface Block {
  id: string;
  type: string;
  templateID: string;
}

function blockRenderer(block: Block) {
  switch (block.type) {
    case 'header':
      return <Header key={block.id} templateID={block.templateID} />;
    case 'hero':
      return <Hero key={block.id} templateID={block.templateID} />;
    case 'advantages':
      return <Advantages key={block.id} templateID={block.templateID} />;
    case 'about':
      return <About key={block.id} templateID={block.templateID} />;
    case 'services':
      return <Services key={block.id} templateID={block.templateID} />;
    case 'staff':
      return <Staff key={block.id} templateID={block.templateID} />;
    case 'news':
      return <News key={block.id} templateID={block.templateID} />;
    case 'itemDetailType_1':
      return <ItemDetail key={block.id} templateID={block.templateID} />;
    case 'apartDetailType_1':
      return <ApartDetail key={block.id} templateID={block.templateID} />;
    case 'offer':
      return <Offer key={block.id} templateID={block.templateID} />;
    case 'blog':
      return <BlogDetail key={block.id} templateID={block.templateID} />;
    case 'map':
      return <Map key={block.id} templateID={block.templateID} />;
    default:
      return null;
  }
}

const Home = async () => {
  const data = await getLocalData('src/lib/data-page-type-3.json');

  const { blocks }: { blocks: Block[] } = data;
  if (!blocks) return <div>Блоки не найдены</div>;

  return (
    <main>
      {blocks
        .sort((block, blocks) => parseInt(block.id) - parseInt(blocks.id))
        .map((block: Block) => blockRenderer(block))}
    </main>
  );
};

export default Home;
