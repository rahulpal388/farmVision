import { Features } from "./components/features";
import { HeroSection } from "./components/herosection";
import { NavBar } from "./components/NavBar";



export default function Home() {

  return <>
    <NavBar />
    <HeroSection />
    <Features />
  </>
}