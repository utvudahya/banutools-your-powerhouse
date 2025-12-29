import { motion } from "framer-motion";
import { Drill, Wrench, CircleDot, Hammer, Ruler, Settings } from "lucide-react";

const categories = [
  { name: "Drills", icon: Drill, count: 45 },
  { name: "Saws", icon: CircleDot, count: 32 },
  { name: "Grinders", icon: Settings, count: 28 },
  { name: "Sanders", icon: Ruler, count: 19 },
  { name: "Impact Tools", icon: Hammer, count: 24 },
  { name: "Accessories", icon: Wrench, count: 156 },
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm uppercase tracking-wider font-semibold rounded-sm mb-4">
            Browse By Category
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            SHOP BY <span className="text-gradient">CATEGORY</span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.a
                key={category.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-6 bg-background rounded-sm border border-border hover:border-primary transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-sm flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} Products
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
