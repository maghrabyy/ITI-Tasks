import { OurTeamSection } from '../components/OurTeam';
import { Achievements } from '../components/Achievements';
import { FrequentlyAskedQuestions } from '../components/FrequentlyAskedQuestions';
import { PortfolioSection } from '../components/Portfolio';
import { Testimonial } from '../components/Testimonial';
import { ContactUs } from '../components/ContactUs';
import { NewsLetter } from '../components/NewsLetter';

export const Homepage = () => {
  return (
    <>
      <OurTeamSection />
      <Achievements />
      <PortfolioSection />
      <FrequentlyAskedQuestions />
      <Testimonial />
      <ContactUs />
      <NewsLetter />
    </>
  );
};
