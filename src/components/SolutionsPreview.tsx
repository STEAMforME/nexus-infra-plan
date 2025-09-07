import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Wrench, ArrowRight, Shield, Clock, Target } from "lucide-react";

const SolutionsPreview = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Cities & Transit Agencies",
      subtitle: "Improve safety, streamline compliance, visualize data",
      description: "Break down data silos and accelerate infrastructure projects with real-time safety monitoring and automated compliance tracking.",
      features: ["Real-time safety simulation", "Automated compliance reports", "Cross-department data visualization"],
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Developers & Investors",
      subtitle: "One-click zoning clarity, de-risked permitting",
      description: "Unlock investment opportunities with instant zoning intelligence and opportunity zone insights that reduce development risk.",
      features: ["Instant zoning analysis", "Opportunity zone mapping", "Risk assessment tools"],
      color: "text-emerald-600"
    },
    {
      icon: Wrench,
      title: "Engineering Firms",
      subtitle: "Strengthen bids, save research hours",
      description: "Win more contracts with automated compliance research and integrated tools that ensure project success from day one.",
      features: ["Automated research", "Compliance integrations", "Bid strengthening tools"],
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions for Every Infrastructure Stakeholder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From city planners to private developers, SmartInfra transforms how infrastructure projects are planned, approved, and executed.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-professional transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-gold rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Benefits Bar */}
        <div className="bg-primary rounded-2xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-accent-gold mb-4" />
              <h4 className="text-xl font-semibold text-primary-foreground mb-2">Reduce Risk</h4>
              <p className="text-primary-foreground/80">Automated compliance ensures projects meet all regulatory requirements</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-accent-gold mb-4" />
              <h4 className="text-xl font-semibold text-primary-foreground mb-2">Save Time</h4>
              <p className="text-primary-foreground/80">Cut compliance research from 6 months to 6 seconds</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 text-accent-gold mb-4" />
              <h4 className="text-xl font-semibold text-primary-foreground mb-2">Unlock Growth</h4>
              <p className="text-primary-foreground/80">Identify opportunities and accelerate development timelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;