import { motion } from "framer-motion";
import heroBike from "@/assets/hero-bike.jpg";
import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBike}
          alt="Electric logistics bike in motion"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
              Japamove Logistics
            </span>
            <Zap className="w-5 h-5 text-secondary" />
            <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
              NovaVolt Energy
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-foreground">BIKE </span>
            <span className="text-primary text-glow-green">INVESTMENT</span>
            <br />
            <span className="text-foreground">PLAN</span>
          </h1>

          <p className="font-heading text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Earn Consistent Weekly Income with Electric Logistics Bikes
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="cta" size="lg" className="px-10 py-6" asChild>
              <a href="#plans">
                <Zap className="w-5 h-5 mr-2" />
                View Investment Plans
              </a>
            </Button>
            <Button variant="gold" size="lg" className="px-10 py-6" asChild>
              <a href="https://wa.me/2349037151904" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </a>
            </Button>
          </div>

          <p className="text-secondary font-heading text-sm animate-pulse-glow pt-2">
            ⚡ Limited Slots Available!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
