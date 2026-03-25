import { motion } from "framer-motion";
import bikesFleet from "@/assets/bikes-fleet.png";
import bikeStation from "@/assets/bike-station.png";
import bikeRider from "@/assets/bike-rider.png";
import { Battery, Zap, Shield } from "lucide-react";

const images = [
  {
    src: bikesFleet,
    alt: "Fleet of NovaVolt electric bikes ready for deployment",
    label: "Our Growing Fleet",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    src: bikeStation,
    alt: "NovaVolt electric bike with Smart Energy Network battery swap station",
    label: "Smart Energy Network",
    icon: <Battery className="w-4 h-4" />,
  },
  {
    src: bikeRider,
    alt: "NovaVolt rider with electric logistics bike on the road",
    label: "Riders Earning Daily",
    icon: <Shield className="w-4 h-4" />,
  },
];

const BikeShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border-glow-gold font-heading text-sm text-secondary font-bold tracking-wider mb-4">
            SEE THE BIKES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground">
            YOUR <span className="text-primary text-glow-green">INVESTMENT</span> IN ACTION
          </h2>
          <p className="font-heading text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
            Real NovaVolt electric bikes powering logistics across Nigeria — this is what your money works on
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden border-glow-green"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-primary font-heading text-sm font-bold">
                  {img.icon}
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;
