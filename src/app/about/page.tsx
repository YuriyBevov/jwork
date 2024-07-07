import {
  AboutTypeFive,
  AboutTypeFour,
  AboutTypeOne,
  AboutTypeSeven,
  AboutTypeSix,
  AboutTypeThree,
  AboutTypeTwo,
} from '@/components/about';
import { ABOUT_SECTION_DATA } from '@/components/about/mock';

export default function About() {
  return (
    <>
      <AboutTypeOne data={ABOUT_SECTION_DATA} />
      <AboutTypeTwo data={ABOUT_SECTION_DATA} />
      <AboutTypeThree data={ABOUT_SECTION_DATA} />
      <AboutTypeFour data={ABOUT_SECTION_DATA} />
      <AboutTypeFive data={ABOUT_SECTION_DATA} />
      <AboutTypeSix data={ABOUT_SECTION_DATA} />
      <AboutTypeSeven data={ABOUT_SECTION_DATA} />
    </>
  );
}
