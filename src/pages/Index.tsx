import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import WhyInvestSection from "@/components/WhyInvestSection";
import CTASection from "@/components/CTASection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold text-primary">MyRider</span>
            <span className="font-display text-sm text-foreground tracking-wider hidden sm:inline">× Japamove × NovaVolt</span>
          </div>
          <a
            href="https://dashboard.my-rider.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wide hover:brightness-110 box-glow-green transition-all duration-300 hover:scale-105"
          >
            Invest Now
          </a>
        </div>
      </nav>

      <HeroSection />
      <PlansSection />
      <WhyInvestSection />
      <CTASection />

      <footer className="border-t border-border py-8 text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <img src={myRiderLogo} alt="MyRider" className="h-5 w-auto opacity-60" loading="lazy" width={512} height={512} />
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Japamove Logistics × NovaVolt Energy × MyRider. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground/60">
          <a href="https://invest.my-rider.com" className="hover:text-primary transition-colors">invest.my-rider.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
