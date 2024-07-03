import {
  AboutTypeFour,
  AboutTypeOne,
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
    </>
  );
}
