import {
  About,
  Advantages,
  Footer,
  Header,
  Hero,
  News,
  Offer,
  Services,
  Staff,
} from '@/components';
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
    case 'offer':
      return <Offer key={block.id} templateID={block.templateID} />;
    case 'news':
      return <News key={block.id} templateID={block.templateID} />;
    case 'footer':
      return <Footer key={block.id} templateID={block.templateID} />;
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
