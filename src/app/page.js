
import { FaqSection } from "./component/home/FaqSection";
import HealthPlanQuoteToday from "./component/home/HealthPlanQuoteToday";
import { HeroSection } from "./component/home/Hero";
import { ServicesSection } from "./component/home/ServiceSection";
import { TestimonialSection } from "./component/home/TestimonialSection";
import { WholesaleGeneralAgency } from "./component/home/WholesaleGeneralAgency";
import { WhyChooseUsSection } from "./component/home/WhyChooseUs";

export default function Home() {
  return (
    <>
   
    <HeroSection/>
    <ServicesSection/>
    <WholesaleGeneralAgency/>
    <WhyChooseUsSection/>
    <HealthPlanQuoteToday/>
    <FaqSection/>
    <TestimonialSection/>
    </>
  );
}
