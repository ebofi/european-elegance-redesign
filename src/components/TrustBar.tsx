const partners = [
  { name: "Barclays", initials: "BC" },
  { name: "HSBC", initials: "HSBC" },
  { name: "Deloitte", initials: "DT" },
  { name: "PwC", initials: "PwC" },
  { name: "Unilever", initials: "UL" },
  { name: "Shell", initials: "SH" },
  { name: "Vodafone", initials: "VF" },
  { name: "AstraZeneca", initials: "AZ" },
];

const TrustBar = () => {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-10">
          Trusted by leading UK & European organisations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale-hover flex items-center justify-center h-12 px-4"
              title={partner.name}
            >
              <span className="text-xl md:text-2xl font-semibold text-foreground/60 tracking-wide">
                {partner.initials}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
