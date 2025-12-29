import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import drillImg from "@/assets/drill.png";
import sawImg from "@/assets/circular-saw.png";
import grinderImg from "@/assets/grinder.png";
import impactImg from "@/assets/impact-driver.png";
import jigsawImg from "@/assets/jigsaw.png";
import sanderImg from "@/assets/sander.png";

const products = [
  {
    name: "Pro Cordless Drill 20V",
    price: 189,
    originalPrice: 249,
    image: drillImg,
    rating: 4.8,
    reviews: 324,
    badge: "Best Seller",
  },
  {
    name: "Circular Saw 7-1/4\"",
    price: 279,
    image: sawImg,
    rating: 4.9,
    reviews: 189,
    badge: "New",
  },
  {
    name: "Angle Grinder 4-1/2\"",
    price: 149,
    originalPrice: 179,
    image: grinderImg,
    rating: 4.7,
    reviews: 256,
  },
  {
    name: "Impact Driver 20V Max",
    price: 219,
    image: impactImg,
    rating: 4.8,
    reviews: 412,
  },
  {
    name: "Professional Jigsaw",
    price: 169,
    originalPrice: 199,
    image: jigsawImg,
    rating: 4.6,
    reviews: 178,
  },
  {
    name: "Orbital Sander 5\"",
    price: 129,
    image: sanderImg,
    rating: 4.7,
    reviews: 203,
    badge: "Sale",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm uppercase tracking-wider font-semibold rounded-sm mb-4">
            Our Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            FEATURED <span className="text-gradient">PRODUCTS</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our top-rated power tools designed for professionals who demand the best in performance and reliability.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
