import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
import LeadFormDialog from "@/components/LeadFormDialog";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional European office environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Overline */}
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6 opacity-0 animate-fade-in">
            UK & European Talent Partners
          </p>

          {/* Main Heading */}
          <h1 className="text-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Connecting{" "}
            <span className="italic">exceptional talent</span>
            <br />
            with visionary companies
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 opacity-0 animate-fade-in-up animation-delay-200">
            A boutique consultancy specialising in executive search and professional 
            staffing across the United Kingdom and Europe.
          </p>

          {/* Dual Path Entry */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in-up animation-delay-300">
            <LeadFormDialog
              defaultInquiryType="employer"
              title="Hire with Candone"
              description="Tell us about the role you're hiring for and our advisors will be in touch."
              trigger={
                <Button variant="hero" size="lg" className="group">
                  <Building2 className="h-5 w-5" />
                  For Employers
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
            <LeadFormDialog
              defaultInquiryType="candidate"
              title="Find your next role"
              description="Share your background and what you're looking for — we'll match you with opportunities."
              trigger={
                <Button variant="heroOutline" size="lg" className="group">
                  <Users className="h-5 w-5" />
                  For Candidates
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16 opacity-0 animate-fade-in-up animation-delay-400">
            <div>
              <p className="text-editorial text-3xl md:text-4xl font-medium text-foreground">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-editorial text-3xl md:text-4xl font-medium text-foreground">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Placements Made</p>
            </div>
            <div>
              <p className="text-editorial text-3xl md:text-4xl font-medium text-foreground">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-500">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
