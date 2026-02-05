import { Search, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const liveJobs = [
  { title: "Senior Software Engineer", location: "London", type: "Permanent" },
  { title: "Financial Controller", location: "Manchester", type: "Permanent" },
  { title: "Marketing Director", location: "Amsterdam", type: "Contract" },
  { title: "Product Manager", location: "Berlin", type: "Permanent" },
  { title: "HR Business Partner", location: "Dublin", type: "Permanent" },
  { title: "Data Scientist", location: "Paris", type: "Contract" },
  { title: "Operations Manager", location: "Edinburgh", type: "Permanent" },
  { title: "Chief Technology Officer", location: "Zurich", type: "Executive" },
];

const JobTicker = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        {/* Job Search Bar */}
        <div className="glass rounded-2xl p-6 mb-10 shadow-elegant">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 bg-background rounded-lg px-4 py-3 border border-border">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search roles, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 border border-border md:w-48">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <select className="flex-1 bg-transparent outline-none text-foreground appearance-none cursor-pointer">
                <option value="">All Locations</option>
                <option value="london">London</option>
                <option value="manchester">Manchester</option>
                <option value="amsterdam">Amsterdam</option>
                <option value="berlin">Berlin</option>
                <option value="paris">Paris</option>
              </select>
            </div>
            <Button variant="hero" size="lg" className="md:px-8">
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Live Job Ticker */}
        <div className="overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Live Opportunities
            </span>
          </div>
          
          <div className="relative">
            <div className="flex animate-ticker">
              {[...liveJobs, ...liveJobs].map((job, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex-shrink-0 glass rounded-xl px-6 py-4 mx-2 hover:bg-card/80 transition-all hover-lift cursor-pointer group min-w-[280px]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobTicker;
