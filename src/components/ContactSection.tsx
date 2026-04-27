import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadFormDialog from "@/components/LeadFormDialog";

const offices = [
  {
    region: "United Kingdom",
    address: "36 Kells Lane, Gateshead, England, NE9 5SJ",
    tel: "+44 7388 429371",
    telHref: "tel:+447388429371",
  },
  {
    region: "Europe (Portugal)",
    address: "FloXera, J Canleas, Largo José Cavaco Vieira, 8100-012 Alte, Portugal",
    tel: "+44 7388 429371",
    telHref: "tel:+447388429371",
  },
  {
    region: "India",
    address: "Candone Arcade, Enathu, Adoor, Pathanamthitta Dist, Kerala, India",
    tel: "+91 8606 355 566",
    telHref: "tel:+918606355566",
  },
];

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact info */}
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] mb-6">
              Let&apos;s start a <span className="italic">conversation</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Whether you&apos;re hiring, job-hunting, or planning to study abroad — our advisors
              respond within one business day.
            </p>

            <div className="space-y-5 mb-10">
              <a
                href="mailto:stalinstephen@candone.net"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-medium text-foreground">stalinstephen@candone.net</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Hours</p>
                  <p className="font-medium text-foreground">Mon – Fri · 9am – 5pm</p>
                </div>
              </div>
            </div>

            <LeadFormDialog
              trigger={
                <Button variant="hero" size="lg">
                  Send us a message
                </Button>
              }
            />
          </div>

          {/* Right: Offices */}
          <div>
            <h3 className="text-editorial text-2xl font-medium mb-6">Our offices</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div
                  key={office.region}
                  className="p-6 rounded-xl border border-border bg-card hover-lift"
                >
                  <p className="text-xs font-medium text-primary tracking-widest uppercase mb-2">
                    {office.region}
                  </p>
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">{office.address}</p>
                  </div>
                  <a
                    href={office.telHref}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {office.tel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;