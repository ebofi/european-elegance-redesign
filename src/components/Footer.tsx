import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import LeadFormDialog from "@/components/LeadFormDialog";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact-us" },
    ],
    employers: [
      { label: "Executive Search", href: "#" },
      { label: "Contract Staffing", href: "#" },
      { label: "RPO Solutions", href: "#" },
      { label: "Market Insights", href: "#" },
    ],
    candidates: [
      { label: "Current Opportunities", href: "#" },
      { label: "Submit CV", href: "#" },
      { label: "Career Advice", href: "#" },
      { label: "Salary Guide", href: "#" },
    ],
    sectors: [
      { label: "Finance & Banking", href: "#" },
      { label: "Technology", href: "#" },
      { label: "Professional Services", href: "#" },
      { label: "Study Abroad", href: "#study-abroad" },
    ],
  };

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              Ready to find your perfect match?
            </h2>
            <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
              Whether you're seeking exceptional talent or your next career move, 
              we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <LeadFormDialog
                trigger={
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 group"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
              <Button
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10"
                asChild
              >
                <a href="#study-abroad">Study Abroad</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <span className="text-editorial text-2xl font-semibold mb-6 block">
              Candone
            </span>
            <p className="text-background/60 text-sm mb-6 max-w-xs">
              A boutique talent consultancy specialising in executive search and 
              professional staffing across the UK and Europe.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Employers</h4>
            <ul className="space-y-3">
              {footerLinks.employers.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Candidates</h4>
            <ul className="space-y-3">
              {footerLinks.candidates.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Sectors</h4>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/60 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-xs text-background/40 uppercase tracking-widest mb-2">UK Office</p>
              <p className="text-sm text-background/70 mb-2">36 Kells Lane, Gateshead, England, NE9 5SJ</p>
              <a href="tel:+447388429371" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-3.5 w-3.5" /> +44 7388 429371
              </a>
            </div>
            <div>
              <p className="text-xs text-background/40 uppercase tracking-widest mb-2">Europe – Portugal</p>
              <p className="text-sm text-background/70 mb-2">FloXera, J Canleas, Largo José Cavaco Vieira, 8100-012 Alte, Portugal</p>
              <a href="tel:+447388429371" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-3.5 w-3.5" /> +44 7388 429371
              </a>
            </div>
            <div>
              <p className="text-xs text-background/40 uppercase tracking-widest mb-2">India Office</p>
              <p className="text-sm text-background/70 mb-2">Candone Arcade, Enathu, Adoor, Pathanamthitta Dist, Kerala, India</p>
              <a href="tel:+918606355566" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-3.5 w-3.5" /> +91 8606 355 566
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-12 pt-4 border-t border-background/10">
            <a href="mailto:stalinstephen@candone.net" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
              <Mail className="h-4 w-4" />
              stalinstephen@candone.net
            </a>
            <span className="flex items-center gap-2 text-sm text-background/60">
              <MapPin className="h-4 w-4" />
              UK · Europe · India
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © 2024 Candone. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
