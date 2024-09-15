import { About } from '@/components/about';
import { Advantages } from '@/components/advantages';
import { BlogDetail } from '@/components/blog-detail';
import { News } from '@/components/news';
import { ResultListDetails } from '@/components/result-list-details';
import { ResultListDetailsAlt } from '@/components/result-list-details-alt';
import { Services } from '@/components/services';
import { Staff } from '@/components/staff';
import { ViewresultList } from '@/components/view-result-list';
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
    case 'staff':
      return <Staff key={block.id} templateID={block.templateID} />;
    case 'news':
      return <News key={block.id} templateID={block.templateID} />;
    case 'blog':
      return <BlogDetail key={block.id} templateID={block.templateID} />;
    case 'resultListDetails':
      return <ResultListDetails key={block.id} templateID={block.templateID} />;
    case 'ResultListDetailsAlt':
      return (
        <ResultListDetailsAlt key={block.id} templateID={block.templateID} />
      );
    case 'ViewresultList':
      return <ViewresultList key={block.id} templateID={block.templateID} />;
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
