"use client"
import { HeroSection } from "../components/herosection";
import { NavBar } from "../components/NavBar";
import { FeatureSection } from "../pages/featureSection";
import { Footer } from "../pages/footer";
import { useTranslation } from "react-i18next";
import { Button } from "@repo/ui/button";

export default function Home() {



  return <>
    <div >

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