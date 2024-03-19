import FifthSection from "@/components/Events/FifthSection";
import FirstSection from "@/components/Events/FirstSection";
import FormSection from "@/components/Events/FormSection";
import FourthSection from "@/components/Events/FourthSection";
import SecondSection from "@/components/Events/SecondSection";
import SixthSection from "@/components/Events/SixthSection";
import ThirdSection from "@/components/Events/ThirdSection";
import dynamic from "next/dynamic";
import { CircularProgress } from "@nextui-org/react";

const DynamicBanners = dynamic(() => import("../components/Events/Banners"), {
  ssr: false,
  loading: () => (
    <div className="w-full flex justify-center min-h-[218px]">
      <CircularProgress color="warning" aria-label="Loading..." />
    </div>
  ),
});

export default function Home() {
  return (
    <main className="w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <DynamicBanners />
      <FifthSection />
      <SixthSection />
      <FormSection />
    </main>
  );
}
