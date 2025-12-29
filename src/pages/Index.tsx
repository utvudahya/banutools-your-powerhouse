import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import BenefitsSection from "@/components/BenefitsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BANUTOOLS - Premium Professional Power Tools</title>
        <meta
          name="description"
          content="Shop premium power tools at BANUTOOLS. Professional-grade drills, saws, grinders and more with 5-year warranty and free shipping on orders over $99."
        />
        <meta name="keywords" content="power tools, professional tools, drills, saws, grinders, cordless tools" />
        <link rel="canonical" href="https://banutools.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <FeaturedProducts />
        <CategorySection />
        <BenefitsSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
