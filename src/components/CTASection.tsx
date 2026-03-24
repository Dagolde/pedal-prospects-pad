import { motion } from "framer-motion";
import { Zap, ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";


const stats = [
  { icon: <TrendingUp className="w-5 h-5" />, label: "Up to 80% ROI" },
  { icon: <Clock className="w-5 h-5" />, label: "Weekly Payouts" },
  { icon: <Shield className="w-5 h-5" />, label: "Fully Managed" },
];

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <Zap className="w-12 h-12 text-primary mx-auto animate-pulse-glow" />
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            READY TO <span className="text-primary text-glow-green">INVEST?</span>
          </h2>

          <p className="font-heading text-lg text-muted-foreground max-w-xl mx-auto">
            Join hundreds of smart investors earning consistent weekly income from electric logistics bikes.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 py-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-glow-green"
              >
                <span className="text-primary">{stat.icon}</span>
                <span className="font-heading text-sm font-bold text-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="px-12 py-7 text-xl" asChild>
              <a href="https://dashboard.my-rider.com" target="_blank" rel="noopener noreferrer">
                <Zap className="w-6 h-6 mr-2" />
                Register & Invest Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          <p className="text-secondary font-heading text-sm animate-pulse-glow">
            ⚡ Limited Slots Available — Don't Miss Out!
          </p>

          {/* Partner logos */}
          <div className="pt-8 border-t border-border">
            <p className="font-body text-xs text-muted-foreground mb-4 uppercase tracking-wider">Powered by</p>
            <div className="flex items-center justify-center gap-6">
              <span className="font-display text-sm text-muted-foreground tracking-wider">Japamove</span>
              <span className="text-muted-foreground/30">×</span>
              <span className="font-display text-sm text-muted-foreground tracking-wider">NovaVolt</span>
              <span className="text-muted-foreground/30">×</span>
              <span className="font-display text-sm text-muted-foreground tracking-wider">MyRider</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
