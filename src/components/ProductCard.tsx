import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  index?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-card"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs uppercase font-bold tracking-wider rounded-sm">
          {badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button variant="hero" className="w-full">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-primary fill-primary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        {/* Name */}
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
