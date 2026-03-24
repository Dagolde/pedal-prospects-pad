import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Battery, Wallet, Bike } from "lucide-react";

const reasons = [
  { icon: <Users className="w-7 h-7" />, title: "Partnership with Japamove & MyRider", desc: "Backed by established logistics and ride-hailing companies" },
  { icon: <TrendingUp className="w-7 h-7" />, title: "Up to 80% ROI", desc: "Consistent revenue from active delivery operations daily" },
  { icon: <Shield className="w-7 h-7" />, title: "Professional Management", desc: "Expert riders and managers handling your investment assets" },
  { icon: <Battery className="w-7 h-7" />, title: "Full Maintenance Covered", desc: "Battery swap and vehicle upkeep fully handled for you" },
  { icon: <Wallet className="w-7 h-7" />, title: "Weekly Guaranteed Payouts", desc: "Reliable weekly returns deposited directly to your account" },
  { icon: <Bike className="w-7 h-7" />, title: "NovaVolt EV Technology", desc: "Cutting-edge electric bikes powering sustainable logistics" },
];

const WhyInvestSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/3 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border-glow-gold font-heading text-sm text-secondary font-bold tracking-wider mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            WHY <span className="text-secondary text-glow-gold">INVEST</span> WITH US?
          </h2>
          <p className="font-heading text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
            A trusted partnership delivering real returns from real operations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="gradient-card-green border-glow-green rounded-xl p-6 space-y-3 cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {reason.icon}
              </div>
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
