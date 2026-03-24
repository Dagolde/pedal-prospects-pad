import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Battery, Wallet } from "lucide-react";

const reasons = [
  { icon: <Users className="w-6 h-6" />, title: "Partnership with Japamove Logistics", desc: "Backed by an established logistics company" },
  { icon: <TrendingUp className="w-6 h-6" />, title: "High Daily Returns", desc: "Consistent revenue from active delivery operations" },
  { icon: <Shield className="w-6 h-6" />, title: "Professional Riders & Management", desc: "Expert team managing your investment assets" },
  { icon: <Battery className="w-6 h-6" />, title: "Battery Swap & Maintenance", desc: "Full vehicle upkeep handled for you" },
  { icon: <Wallet className="w-6 h-6" />, title: "Weekly Guaranteed Payouts", desc: "Reliable weekly returns directly to you" },
];

const WhyInvestSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            WHY <span className="text-secondary text-glow-gold">INVEST</span> WITH US?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="gradient-card-green border-glow-green rounded-xl p-6 space-y-3"
            >
              <div className="text-primary">{reason.icon}</div>
              <h3 className="font-heading text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
