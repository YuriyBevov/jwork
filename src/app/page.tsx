import { About } from '@/components/about';
import { Advantages } from '@/components/advantages';
import { ApartDetail } from '@/components/apart-detail';
import { BlogDetail } from '@/components/blog-detail';
import { Header } from '@/components/header';
import { ItemDetail } from '@/components/item-detail';
import { Map } from '@/components/map';
import { News } from '@/components/news';
import { Offer } from '@/components/offer';
import { Services } from '@/components/services';
import { Staff } from '@/components/staff';
import { ViewresultList } from '@/components/view-result-list';
import { ViewResultListItem } from '@/components/view-result-list-item';
// import { Footer } from '@/components/footer';
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
    case 'viewresultList':
      return <ViewresultList key={block.id} templateID={block.templateID} />;
    case 'viewresultListItem':
      return (
        <ViewResultListItem key={block.id} templateID={block.templateID} />
      );
    // case 'footer':
    //   return <Footer key={block.id} layout={block.layout} />;
    case 'map':
      return <Map key={block.id} templateID={block.templateID} />;
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
