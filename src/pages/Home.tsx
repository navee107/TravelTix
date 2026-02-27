import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import PopularPackages from '../components/PopularPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <PopularPackages />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}
