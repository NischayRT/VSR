import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import HeroBanner from "@/HeroBanner";
import HeroAbout from "@/HeroAbout";
import "../app/globals.css";
export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <HeroAbout />
      <Footer />
    </main>
  );
}
