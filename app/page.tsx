import Header from "../components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import BrowseByMakes from "@/components/BrowseByMakes";
import LatestOffers from "@/components/LatestOffers";
import FeaturedPosts from "@/components/FeaturedPosts";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import CarServices from "@/components/CarServices";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";


export default function Home() {
  return (<>
    <Header />
    <Hero />
    <BrowseByMakes />
    <LatestOffers />
    <FeaturedPosts />
    <WhyChooseUs />
    <StatsSection />
    <CarServices />
    <Newsletter />
    <Partners />
    <Footer />
  </>);
}
