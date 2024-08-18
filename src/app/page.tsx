import { About } from '@/components/about';
import { Advantages } from '@/components/advantages';
import { Services } from '@/components/services';
// import { Footer } from '@/components/footer';
import { getLocalData } from '@/lib/localdata';

interface Block {
  id: string;
  type: string;
  templateID: string;
}

function blockRenderer(block: Block) {
  switch (block.type) {
    case 'advantages':
      return <Advantages key={block.id} templateID={block.templateID} />;
    case 'about':
      return <About key={block.id} templateID={block.templateID} />;
    case 'services':
      return <Services key={block.id} templateID={block.templateID} />;
    // case 'footer':
    //   return <Footer key={block.id} layout={block.layout} />;
    default:
      return null;
  }
}

const Home = async () => {
  const data = await getLocalData('src/lib/data-default-setting.json');

  const { blocks } = data;
  if (!blocks) return <div>Блоки не найдены</div>;

  return <main>{blocks.map((block: Block) => blockRenderer(block))}</main>;
};

export default Home;
