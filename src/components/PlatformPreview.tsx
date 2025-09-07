import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { 
  Map, 
  Shield, 
  FileText, 
  Target, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Zap
} from "lucide-react";

const PlatformPreview = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety Simulation & Compliance",
      description: "Real-time monitoring and automated compliance tracking for rail safety standards",
      stats: "99.9% accuracy"
    },
    {
      icon: Map,
      title: "Zoning & Land Use Intelligence",
      description: "Instant zoning analysis with interactive maps and regulatory insights",
      stats: "50+ jurisdictions"
    },
    {
      icon: Target,
      title: "Opportunity Zone Mapping",
      description: "Identify investment opportunities with incentive overlays and risk assessments",
      stats: "Real-time data"
    },
    {
      icon: FileText,
      title: "Custom Reporting & Export",
      description: "Generate compliance reports and export data in multiple formats",
      stats: "1-click exports"
    }
  ];

  const pricingTiers = [
    {
      name: "Pilot",
      description: "Perfect for small teams and initial assessments",
      features: ["Basic zoning analysis", "Standard compliance checks", "5 user accounts", "Email support"]
    },
    {
      name: "Enterprise",
      description: "Full platform access for growing organizations",
      features: ["Advanced safety simulation", "Real-time monitoring", "Unlimited users", "Priority support", "Custom integrations"]
    },
    {
      name: "Custom",
      description: "Tailored solutions for large-scale implementations",
      features: ["White-label options", "API access", "Dedicated support", "Custom workflows", "On-premise deployment"]
    }
  ];

  return (
    <section id="platform" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-gold/10 text-accent-gold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Platform Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive infrastructure intelligence with AI-powered insights, real-time monitoring, and automated compliance tracking.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-professional transition-all duration-300 group border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-accent-gold bg-accent-gold/10 px-2 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">See It In Action</h3>
            <p className="text-muted-foreground">Interactive dashboard with real-time data visualization</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Safety Status</h4>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">PTC Compliance</span>
                  <span className="text-sm font-medium text-emerald-600">100%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Safety Checks</span>
                  <span className="text-sm font-medium text-emerald-600">Active</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Zoning Analysis</h4>
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Zones Mapped</span>
                  <span className="text-sm font-medium text-blue-600">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Opportunities</span>
                  <span className="text-sm font-medium text-blue-600">23 Active</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Compliance Reports</h4>
                <FileText className="w-5 h-5 text-purple-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Generated Today</span>
                  <span className="text-sm font-medium text-purple-600">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Export Ready</span>
                  <span className="text-sm font-medium text-purple-600">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Choose Your Plan</h3>
          <p className="text-muted-foreground">Flexible pricing for teams of all sizes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`p-8 ${index === 1 ? 'border-accent-gold shadow-gold' : 'border-border'} hover:shadow-professional transition-all duration-300`}>
              {index === 1 && (
                <div className="bg-accent-gold text-accent-gold-foreground text-xs font-medium px-3 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-bold text-foreground mb-2">{tier.name}</h4>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent-gold" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={index === 1 ? "gold" : "outline"} className="w-full" asChild>
                <Link to="/book-demo">
                  {tier.name === "Custom" ? "Contact Sales" : "Get Started"}
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
            <Link to="/book-demo">
              Explore Full Platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreview;
