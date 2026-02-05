import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
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
      { label: "Life Sciences", href: "#" },
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
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 group"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-background/30 text-background hover:bg-background/10"
              >
                View All Jobs
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
          <div className="flex flex-wrap gap-6 md:gap-12 mb-8">
            <a href="mailto:hello@candone.net" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
              <Mail className="h-4 w-4" />
              hello@candone.net
            </a>
            <a href="tel:+442012345678" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
              <Phone className="h-4 w-4" />
              +44 20 1234 5678
            </a>
            <span className="flex items-center gap-2 text-sm text-background/60">
              <MapPin className="h-4 w-4" />
              London, United Kingdom
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
