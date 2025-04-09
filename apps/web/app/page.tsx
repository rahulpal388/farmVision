import { Button } from "@repo/ui/button";
import { Features } from "../components/features";
import { HeroSection } from "../components/herosection";
import { NavBar } from "../components/NavBar";



export default function Home() {

  return <>
    <div className="">
      <div>
        <NavBar />


      </div>
      <div>
        <HeroSection />
      </div>
    </div>
  </>
}