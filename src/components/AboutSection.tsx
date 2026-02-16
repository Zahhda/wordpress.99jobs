import { Target, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Mission</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Why 99Jobs Exists
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            At 99Jobs, we believe a great career shouldn't be expensive. Founded by <strong className="text-foreground">Krishna Jangir</strong>, we bridge the gap between talented students and top-tier companies. We don't just provide job listings; we provide the <em>tools</em> to ensure you actually get the job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Beat the AI Bots", desc: "Our ATS-proof resumes are designed to pass automated screening systems and land in HR's inbox." },
            { icon: Users, title: "For Everyone", desc: "Whether you're a fresher or a professional, our tools level the playing field for all job seekers." },
            { icon: Zap, title: "Affordable Access", desc: "Premium career tools starting at just ₹99. No hidden fees, no subscriptions required." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
