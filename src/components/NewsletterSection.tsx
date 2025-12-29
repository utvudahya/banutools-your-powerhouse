import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-steel relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(var(--primary)) 20px, hsl(var(--primary)) 21px)`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm uppercase tracking-wider font-semibold rounded-sm mb-4">
            Stay Updated
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            JOIN THE <span className="text-gradient">BANUTOOLS</span> COMMUNITY
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Subscribe to get exclusive deals, new product launches, and pro tips delivered straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="hero" size="lg" type="submit">
              Subscribe
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
