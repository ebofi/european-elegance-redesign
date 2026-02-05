import { 
  Briefcase, 
  Users, 
  Building2, 
  TrendingUp, 
  Globe, 
  Lightbulb 
} from "lucide-react";

const expertise = [
  {
    icon: Briefcase,
    title: "Executive Search",
    description: "C-suite and senior leadership placements across industries",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Finance & Banking",
    description: "Investment banking, asset management, fintech specialists",
    span: "col-span-1",
  },
  {
    icon: Lightbulb,
    title: "Technology",
    description: "Software engineering, data science, product leadership",
    span: "col-span-1",
  },
  {
    icon: Building2,
    title: "Professional Services",
    description: "Consulting, legal, and accounting professionals",
    span: "col-span-1",
  },
  {
    icon: Globe,
    title: "International Markets",
    description: "Cross-border placements across UK, EU, and EMEA",
    span: "col-span-1 md:col-span-2",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Specialised recruitment across key sectors
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep industry knowledge combined with an extensive network enables us to 
            identify and attract exceptional talent across Europe.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className={`${item.span} glass rounded-2xl p-8 hover-lift cursor-pointer group border border-border/50`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-editorial text-xl font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
