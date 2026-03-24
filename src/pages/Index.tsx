import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import WhyInvestSection from "@/components/WhyInvestSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PlansSection />
      <WhyInvestSection />
      <CTASection />

      <footer className="border-t border-border py-8 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Japamove Logistics × NovaVolt Energy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
