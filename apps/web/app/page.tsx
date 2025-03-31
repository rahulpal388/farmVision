import { Button } from "@repo/ui/button";
import { Features } from "./components/features";
import { HeroSection } from "./components/herosection";
import { NavBar } from "./components/NavBar";



export default function Home() {

  return <>
    {/* <NavBar />
    <HeroSection />
    <Features /> */}
    <div className="flex justify-center">
      <Button placeholder="click me" type="primary" onClick={() => {
        console.log("asdf")
      }} />
    </div>
  </>
}