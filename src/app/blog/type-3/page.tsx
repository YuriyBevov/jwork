import { BlogDetail, Footer, Header } from '@/components';
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
    case 'blog':
      return <BlogDetail key={block.id} templateID={block.templateID} />;
    case 'footer':
      return <Footer key={block.id} templateID={block.templateID} />;
    default:
      return null;
  }
}

const Home = async () => {
  const data = await getLocalData('src/lib/blog/data-page-type-3.json');

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
