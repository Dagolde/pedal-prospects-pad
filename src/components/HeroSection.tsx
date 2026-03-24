import { motion } from "framer-motion";
import heroBike from "@/assets/hero-bike-2.jpg";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBike}
          alt="Electric logistics bike in motion"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            initial={{ x: `${20 + i * 15}%`, y: "100%" }}
            animate={{ y: "-10%", opacity: [0, 1, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Partner logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">
              Japamove Logistics
            </span>
            <Zap className="w-5 h-5 text-secondary" />
            <span className="font-display text-sm tracking-[0.3em] text-secondary uppercase">
              NovaVolt Energy
            </span>
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-display text-sm tracking-[0.3em] text-primary uppercase">MyRider</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border-glow-green"
          >
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-heading text-sm text-primary font-bold tracking-wider">UP TO 80% ROI</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-foreground block"
            >
              EV BIKE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-primary text-glow-green block"
            >
              INVESTMENT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-secondary text-glow-gold block text-3xl md:text-5xl lg:text-6xl"
            >
              THAT PAYS WEEKLY
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-heading text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Own electric logistics bikes. We manage. You earn{" "}
            <span className="text-primary font-bold">₦34K–₦36K weekly</span> — guaranteed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button variant="cta" size="lg" className="px-12 py-7 text-xl" asChild>
              <a href="https://dashboard.my-rider.com" target="_blank" rel="noopener noreferrer">
                <Zap className="w-6 h-6 mr-2" />
                Start Investing Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="gold" size="lg" className="px-10 py-7" asChild>
              <a href="#plans">
                View Plans
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-secondary font-heading text-sm animate-pulse-glow pt-2"
          >
            ⚡ Limited Slots Available — Invest Before They're Gone!
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
