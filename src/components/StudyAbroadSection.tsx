import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2, GraduationCap, Award, Compass, BookOpen, FileCheck } from "lucide-react";
import LeadFormDialog from "@/components/LeadFormDialog";

const stats = [
  { value: "220+", label: "Countries covered", icon: Globe2 },
  { value: "1,000+", label: "Partner universities", icon: GraduationCap },
  { value: "50+", label: "Courses & disciplines", icon: BookOpen },
  { value: "98%", label: "Visa success rate", icon: Award },
];

const services = [
  {
    icon: Compass,
    title: "University Shortlisting",
    description:
      "Personalised university and course recommendations matched to your academic profile, budget and career goals.",
  },
  {
    icon: FileCheck,
    title: "Application & SOP Support",
    description:
      "End-to-end help with applications, statement of purpose, recommendation letters and essay reviews from senior advisors.",
  },
  {
    icon: Award,
    title: "Scholarships & Funding",
    description:
      "Access to merit-based scholarships, education loan partners and financial planning to lower your cost of study.",
  },
  {
    icon: BookOpen,
    title: "IELTS / PTE / GRE Prep",
    description:
      "Curated test-prep partners and structured study plans to help you hit the scores top universities expect.",
  },
  {
    icon: GraduationCap,
    title: "Visa & Documentation",
    description:
      "Step-by-step guidance on student visas, financial documents, and pre-departure briefings for a smooth landing.",
  },
  {
    icon: Globe2,
    title: "Post-Arrival Support",
    description:
      "Accommodation, airport pickup tie-ups and a global alumni network to settle into your new country with confidence.",
  },
];

const StudyAbroadSection = () => {
  return (
    <section id="study-abroad" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Candone Study Abroad
          </p>
          <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-6">
            Your perfect <span className="italic">pathway</span> to higher studies abroad.
          </h2>
          <p className="text-lg text-muted-foreground">
            Candone Study Abroad connects ambitious students to top universities across the
            globe. From shortlisting and applications to visas and scholarships — our advisors
            walk you through every step of the journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-card p-6 md:p-8 flex flex-col gap-3"
              >
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="text-editorial text-3xl md:text-4xl font-medium text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 md:p-8 rounded-xl border border-border bg-card hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/15">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-editorial text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-editorial text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground mb-4 leading-tight">
                Ready to study abroad?
              </h3>
              <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl">
                Speak with a Candone advisor and get a free, personalised study-abroad plan —
                university shortlist, costs, scholarships and timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
              <LeadFormDialog
                defaultInquiryType="study_abroad"
                showStudyAbroadFields
                title="Find more information — Study Abroad"
                description="Tell us about your study goals and our advisors will share a personalised plan."
                trigger={
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 group"
                  >
                    Find more information
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;