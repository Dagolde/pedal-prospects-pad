import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, ArrowDown, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanCardProps {
  name: string;
  tier: string;
  investment: string;
  duration: string;
  durationDetail: string;
  roi: string;
  totalProfit: string;
  totalReturn: string;
  weeklyPayout: string;
  accent: "green" | "gold";
  popular?: boolean;
  delay?: number;
}

const PlanCard = ({
  name,
  tier,
  investment,
  duration,
  durationDetail,
  roi,
  totalProfit,
  totalReturn,
  weeklyPayout,
  accent,
  popular = false,
  delay = 0,
}: PlanCardProps) => {
  const isGold = accent === "gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl p-[1px] ${isGold ? "border-glow-gold" : "border-glow-green"}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-secondary text-secondary-foreground font-heading font-bold text-sm tracking-wider">
            <Sparkles className="w-4 h-4" />
            MOST POPULAR
          </span>
        </div>
      )}
      <div className={`rounded-2xl p-8 ${isGold ? "gradient-card-gold" : "gradient-card-green"} h-full`}>
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-foreground">{name}</h3>
          <span
            className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-heading font-bold tracking-wider ${
              isGold ? "bg-secondary/20 text-secondary" : "bg-primary/20 text-primary"
            }`}
          >
            {tier}
          </span>
        </div>

        {/* Investment Amount - Highlighted */}
        <div className={`text-center mb-6 p-4 rounded-xl ${isGold ? "bg-secondary/5" : "bg-primary/5"}`}>
          <p className="text-xs font-heading text-muted-foreground uppercase tracking-wider mb-1">Investment Amount</p>
          <p className={`font-display text-4xl font-black ${isGold ? "text-secondary text-glow-gold" : "text-primary text-glow-green"}`}>
            {investment}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-8">
          <DetailRow icon={<Clock />} label="Duration" value={duration} accent={accent} />
          <p className="text-muted-foreground text-sm text-center font-body">{durationDetail}</p>

          {/* ROI Badge */}
          <div className="flex justify-center py-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-4 rounded-xl text-center ${
                isGold ? "bg-secondary/15 border-glow-gold" : "bg-primary/15 border-glow-green"
              }`}
            >
              <p className="text-xs font-heading text-muted-foreground uppercase tracking-wider">Return on Investment</p>
              <p className={`font-display text-4xl font-black ${isGold ? "text-secondary text-glow-gold" : "text-primary text-glow-green"}`}>
                {roi}
              </p>
            </motion.div>
          </div>

          <ArrowDown className={`mx-auto w-5 h-5 ${isGold ? "text-secondary" : "text-primary"} animate-float`} />

          <DetailRow icon={<TrendingUp />} label="Total Profit" value={totalProfit} accent={accent} />
          <DetailRow icon={<DollarSign />} label="Total Return" value={totalReturn} accent={accent} />
        </div>

        {/* Weekly Payout */}
        <div className={`rounded-xl p-6 text-center ${isGold ? "bg-secondary/10 box-glow-gold" : "bg-primary/10 box-glow-green"}`}>
          <p className="font-heading text-sm text-muted-foreground uppercase tracking-wider mb-1">Weekly Payout</p>
          <p className={`font-display text-3xl md:text-4xl font-black ${isGold ? "text-secondary text-glow-gold" : "text-primary text-glow-green"}`}>
            {weeklyPayout}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-6 space-y-2">
          {["Professional riders & management", "Battery swap & maintenance", "Weekly guaranteed payouts"].map((b, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className={`w-4 h-4 flex-shrink-0 ${isGold ? "text-secondary" : "text-primary"}`} />
              <span className="font-body text-sm text-muted-foreground">{b}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Button variant={isGold ? "gold" : "cta"} className="w-full py-6" asChild>
            <a href="https://dashboard.my-rider.com" target="_blank" rel="noopener noreferrer">
              Invest Now
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const DetailRow = ({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "green" | "gold";
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className={accent === "gold" ? "text-secondary" : "text-primary"}>{icon}</span>
      <span className="font-body text-sm text-muted-foreground">{label}</span>
    </div>
    <span className="font-heading text-lg font-bold text-foreground">{value}</span>
  </div>
);

const PlansSection = () => {
  return (
    <section id="plans" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border-glow-green font-heading text-sm text-primary font-bold tracking-wider mb-4">
            CHOOSE YOUR PLAN
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            INVESTMENT <span className="text-primary text-glow-green">PLANS</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground mt-3 max-w-xl mx-auto">
            Two powerful plans designed to grow your wealth consistently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PlanCard
            name="PLAN A"
            tier="STANDARD"
            investment="₦1,750,000"
            duration="70 Weeks"
            durationDetail="1 Year 4 Months"
            roi="45%"
            totalProfit="₦787,500"
            totalReturn="₦2,537,500"
            weeklyPayout="₦36,250"
            accent="green"
            delay={0}
          />
          <PlanCard
            name="PLAN B"
            tier="ELITE (2 YEARS)"
            investment="₦2,000,000"
            duration="104 Weeks"
            durationDetail="24 Months"
            roi="80%"
            totalProfit="₦1,600,000"
            totalReturn="₦3,600,000"
            weeklyPayout="₦34,615"
            accent="gold"
            popular
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
