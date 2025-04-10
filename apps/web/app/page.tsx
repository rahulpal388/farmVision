import { HeroSection } from "../components/herosection";
import { NavBar } from "../components/NavBar";
import { FeatureSection } from "../pages/featureSection";
import { Footer } from "../pages/footer";


export default function Home() {
  return <>
    <div className="   ">
      <div>
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FeatureSection />
      </div>
      <div>
        <Footer />
      </div>


    </div>
  </>
}