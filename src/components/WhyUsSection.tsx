import { 
  Handshake, 
  Clock, 
  Shield, 
  Award, 
  Users,
  CheckCircle2
} from "lucide-react";

const whyUsItems = [
  {
    icon: Handshake,
    title: "Bespoke Partnership",
    description: "We immerse ourselves in your culture to find candidates who truly fit",
    highlight: true,
  },
  {
    icon: Clock,
    title: "Swift Delivery",
    description: "Average time-to-hire of 21 days for senior positions",
  },
  {
    icon: Shield,
    title: "Rigorous Vetting",
    description: "Comprehensive background checks and reference verification",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "12-month replacement guarantee on all permanent placements",
  },
  {
    icon: Users,
    title: "Diverse Talent Pool",
    description: "Commitment to inclusive hiring with 45% diverse candidate slates",
  },
];

const features = [
  "Dedicated account management",
  "Weekly progress reporting",
  "Salary benchmarking insights",
  "Market intelligence briefings",
  "Flexible engagement models",
  "GDPR compliant processes",
];

const WhyUsSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Why Choose Candone
            </p>
            <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
              The consultancy approach to talent acquisition
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Unlike traditional agencies, we operate as an extension of your team, 
              combining strategic insight with operational excellence.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUsItems.map((item, index) => (
              <div
                key={item.title}
                className={`${
                  item.highlight ? "sm:col-span-2 bg-primary text-primary-foreground" : "glass"
                } rounded-2xl p-6 hover-lift transition-all border border-border/50`}
              >
                <div className={`w-10 h-10 rounded-lg ${
                  item.highlight ? "bg-primary-foreground/20" : "bg-primary/10"
                } flex items-center justify-center mb-4`}>
                  <item.icon className={`h-5 w-5 ${
                    item.highlight ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <h3 className={`text-editorial text-lg font-medium mb-2 ${
                  item.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${
                  item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
