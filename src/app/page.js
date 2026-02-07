import HeroBanner from "../Hero/HeroBanner";
import HeroAbout from "../Hero/HeroAbout";
import HeroProgram from "../Hero/HeroProgram";
import HeroTestimonial from "../Hero/HeroTestimonial";
export default function Page() {
  return (
    <main>
      <HeroBanner />
      <HeroAbout />
      <HeroProgram />
      <HeroTestimonial />
    </main>
  );
}
