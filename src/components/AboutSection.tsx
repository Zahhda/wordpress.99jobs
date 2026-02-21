import { Target, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Team working"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>

              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl transform translate-y-0 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Users className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-heading font-extrabold text-foreground">50,000+</h4>
                    <p className="text-sm font-medium text-muted-foreground">Careers Transformed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                About Us
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">99Jobs</span> Exists
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At 99Jobs, we believe a great career shouldn't be reserved for those who can afford expensive coaching. Founded by <strong className="text-foreground border-b-2 border-secondary/30">Krishna Jangir</strong>, we bridge the gap between talented job seekers and top-tier companies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                We don't just provide job listings; we provide the <em>exact tools, strategies, and templates</em> to ensure you actually get the job and beat the AI gatekeepers.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {[
                { title: "ATS-Proof Strategies", desc: "Pass automated screening systems with ease." },
                { title: "For Everyone", desc: "For freshers to seasoned professionals." },
                { title: "Affordable Access", desc: "Premium career tools starting at just ₹99." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#courses" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors group">
                Explore Our Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
