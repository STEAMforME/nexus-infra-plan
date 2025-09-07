import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-dark" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Smart Infrastructure,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-accent-gold/80">
                Simplified
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              Safer rails, faster permits, and smarter cities—all in one platform.
              Transform infrastructure development with AI-powered compliance and zoning intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Play className="mr-2 w-5 h-5" />
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center text-primary-foreground/70">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent-gold font-bold text-sm">FRA</span>
                </div>
                <span className="text-sm">FRA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent-gold font-bold text-sm">FTA</span>
                </div>
                <span className="text-sm">FTA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent-gold font-bold text-sm">DOT</span>
                </div>
                <span className="text-sm">DOT Aligned</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <img 
                src={dashboardImage} 
                alt="SmartInfra Platform Dashboard showing zoning overlays and safety compliance tracking"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent-gold text-accent-gold-foreground px-4 py-2 rounded-lg font-semibold shadow-gold">
                Live Compliance
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-foreground text-primary px-4 py-2 rounded-lg font-semibold shadow-professional">
                Real-time Zoning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;