import Banners from "@/components/Events/Banners";
import FifthSection from "@/components/Events/FifthSection";
import FirstSection from "@/components/Events/FirstSection";
import FormSection from "@/components/Events/FormSection";
import FourthSection from "@/components/Events/FourthSection";
import SecondSection from "@/components/Events/SecondSection";
import SixthSection from "@/components/Events/SixthSection";
import ThirdSection from "@/components/Events/ThirdSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Banners />
      <FifthSection />
      <SixthSection />
      <FormSection />
    </main>
  );
}
