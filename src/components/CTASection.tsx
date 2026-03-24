import { motion } from "framer-motion";
import { Phone, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          <Zap className="w-12 h-12 text-primary mx-auto animate-pulse-glow" />
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            CALL & WHATSAPP <span className="text-primary text-glow-green">NOW!</span>
          </h2>

          <a
            href="tel:+2349037151904"
            className="block font-display text-2xl md:text-4xl font-black text-secondary text-glow-gold hover:brightness-125 transition-all"
          >
            +234 903 715 1904
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="px-10 py-6" asChild>
              <a href="tel:+2349037151904">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button variant="gold" size="lg" className="px-10 py-6" asChild>
              <a href="https://wa.me/2349037151904" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          <p className="text-secondary font-heading text-sm animate-pulse-glow">
            ⚡ Limited Slots Available!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
