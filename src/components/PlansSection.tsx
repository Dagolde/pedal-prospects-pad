import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, ArrowDown } from "lucide-react";
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
  delay = 0,
}: PlanCardProps) => {
  const isGold = accent === "gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-[1px] ${isGold ? "border-glow-gold" : "border-glow-green"}`}
    >
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

        {/* Details */}
        <div className="space-y-4 mb-8">
          <DetailRow icon={<DollarSign />} label="Investment" value={investment} accent={accent} />
          <DetailRow icon={<Clock />} label="Duration" value={duration} accent={accent} />
          <p className="text-muted-foreground text-sm text-center font-body">{durationDetail}</p>

          {/* ROI Badge */}
          <div className="flex justify-center py-2">
            <div
              className={`px-6 py-3 rounded-xl text-center ${
                isGold ? "bg-secondary/15 border-glow-gold" : "bg-primary/15 border-glow-green"
              }`}
            >
              <p className="text-xs font-heading text-muted-foreground uppercase tracking-wider">ROI</p>
              <p className={`font-display text-3xl font-black ${isGold ? "text-secondary text-glow-gold" : "text-primary text-glow-green"}`}>
                {roi}
              </p>
            </div>
          </div>

          <ArrowDown className={`mx-auto w-5 h-5 ${isGold ? "text-secondary" : "text-primary"} animate-float`} />

          <DetailRow icon={<TrendingUp />} label="Total Profit" value={totalProfit} accent={accent} />
          <DetailRow icon={<TrendingUp />} label="Total Return" value={totalReturn} accent={accent} />
        </div>

        {/* Weekly Payout */}
        <div className={`rounded-xl p-6 text-center ${isGold ? "bg-secondary/10 box-glow-gold" : "bg-primary/10 box-glow-green"}`}>
          <p className="font-heading text-sm text-muted-foreground uppercase tracking-wider mb-1">Weekly Payout</p>
          <p className={`font-display text-3xl md:text-4xl font-black ${isGold ? "text-secondary text-glow-gold" : "text-primary text-glow-green"}`}>
            {weeklyPayout}
          </p>
        </div>

        <div className="mt-6">
          <Button variant={isGold ? "gold" : "cta"} className="w-full py-6" asChild>
            <a href="https://wa.me/2349037151904" target="_blank" rel="noopener noreferrer">
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
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            INVESTMENT <span className="text-primary text-glow-green">PLANS</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground mt-3">Choose the plan that works for you</p>
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
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
