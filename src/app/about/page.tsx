import {
  AboutTypeFive,
  AboutTypeFour,
  AboutTypeSeven,
  AboutTypeSix,
  AboutTypeThree,
  AboutTypeTwo,
  AboutType_1,
} from '@/components/about';
import { ABOUT_SECTION_DATA } from '@/components/about/mock';

export default function About() {
  return (
    <>
      <AboutType_1 />
      <AboutTypeTwo data={ABOUT_SECTION_DATA} />
      <AboutTypeThree data={ABOUT_SECTION_DATA} />
      <AboutTypeFour data={ABOUT_SECTION_DATA} />
      <AboutTypeFive data={ABOUT_SECTION_DATA} />
      <AboutTypeSix data={ABOUT_SECTION_DATA} />
      <AboutTypeSeven data={ABOUT_SECTION_DATA} />
    </>
  );
}
