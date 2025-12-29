import { motion } from "framer-motion";
import { Truck, Shield, Clock, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $99. Fast and reliable nationwide shipping.",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "All tools come with comprehensive warranty coverage for peace of mind.",
  },
  {
    icon: Clock,
    title: "Same Day Dispatch",
    description: "Order before 2PM and get your tools shipped the same business day.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert technical support available around the clock for all your needs.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-card rounded-sm flex items-center justify-center border border-border shadow-glow">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
