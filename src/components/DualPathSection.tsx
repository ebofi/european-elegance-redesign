import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users } from "lucide-react";

const DualPathSection = () => {
  return (
    <section id="employers" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            How Can We Help?
          </p>
          <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Choose your path
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Employers Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-12 hover-lift cursor-pointer">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center mb-8">
                <Building2 className="h-7 w-7 text-background" />
              </div>
              <h3 className="text-editorial text-2xl md:text-3xl font-medium mb-4">
                For Employers
              </h3>
              <p className="text-background/70 mb-8 max-w-sm">
                Partner with us to access pre-vetted, exceptional talent ready to 
                drive your organisation forward.
              </p>
              <ul className="space-y-3 mb-10">
                {["Executive search", "Contract staffing", "RPO solutions", "Market mapping"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-background/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-background/50" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-background/30 text-background hover:bg-background hover:text-foreground group/btn"
              >
                Hire Talent
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-foreground to-foreground/80" />
          </div>

          {/* Candidates Card */}
          <div id="candidates" className="group relative overflow-hidden rounded-3xl glass border border-border p-10 md:p-12 hover-lift cursor-pointer">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-editorial text-2xl md:text-3xl font-medium text-foreground mb-4">
                For Candidates
              </h3>
              <p className="text-muted-foreground mb-8 max-w-sm">
                Explore exclusive opportunities with leading companies 
                across the UK and Europe.
              </p>
              <ul className="space-y-3 mb-10">
                {["Confidential search", "Career guidance", "Salary insights", "Interview coaching"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="group/btn">
                Find Opportunities
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPathSection;
