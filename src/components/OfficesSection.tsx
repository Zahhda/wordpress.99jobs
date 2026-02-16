import { MapPin } from "lucide-react";

const offices = [
  {
    region: "Corporate (HQ)",
    address: "18, Sub. Major Laxmi Chand Rd, Sector 18, Gurugram, Haryana 122015",
    flag: "🇮🇳",
  },
  {
    region: "Regional Office",
    address: "Krishna Office, Shiv Colony, Laxmangarh, Sikar, Rajasthan 332401",
    flag: "🇮🇳",
  },
  {
    region: "International Office",
    address: "Aspin Commercial Tower, 2311-106, Sheikh Zayed Rd, near Shangri La Hotel, Trade Center First, Dubai, UAE",
    flag: "🇦🇪",
  },
];

const OfficesSection = () => {
  return (
    <section id="offices" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Global Presence</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Our Offices</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offices.map((o, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
              <span className="text-3xl mb-3 block">{o.flag}</span>
              <h3 className="font-heading font-bold text-foreground mb-2">{o.region}</h3>
              <div className="flex gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                <p>{o.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
