import { Linkedin, CheckCircle2 } from "lucide-react";

const founders = [
    {
        name: "Krishna",
        role: "Founder & CEO",
        image: "https://ui-avatars.com/api/?name=Krishna&background=f97316&color=fff&size=256&bold=true",
        bio: "Former HR Head turned career strategist. Krishna built 99Jobs out of frustration with how opaque corporate hiring processes are for talented Indian professionals.",
        stats: { impact: "50k+", metric: "Careers Impacted", color: "text-primary" }
    },
    {
        name: "Zahid Manzoor",
        role: "Co-Founder & COO",
        image: "https://ui-avatars.com/api/?name=Zahid+Manzoor&background=0f172a&color=fff&size=256&bold=true",
        bio: "An Ex-FAANG engineer with a passion for building systems that scale. Zahid architects the data-driven backend that matches candidates to hidden opportunities.",
        stats: { impact: "A+", metric: "ATS Compliance", color: "text-secondary" }
    }
];

const FounderSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full shadow-sm">
                        The Team
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                        The Visionaries Behind 99Jobs
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        We don't just sell templates. We provide a proven shortcut to your dream career. If our ₹99 pack helps you land a job, we've succeeded.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {founders.map((founder, index) => (
                        <div key={index} className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group flex flex-col justify-between">
                            {/* Hover Gradient Overlay */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div>
                                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left mb-6">
                                    <div className="w-32 h-32 shrink-0 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary relative">
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover rounded-full border-4 border-card"
                                        />
                                        <a href="#" className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-1.5 rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all">
                                            <Linkedin className="w-4 h-4" fill="currentColor" />
                                        </a>
                                    </div>
                                    <div className="mt-2 text-left w-full text-center sm:text-left">
                                        <h3 className="text-3xl font-heading font-extrabold text-foreground tracking-tight">{founder.name}</h3>
                                        <div className="text-secondary font-bold text-base mt-1 flex items-center justify-center sm:justify-start gap-1">
                                            {founder.role} <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-border/50">
                                            <span className={`block text-2xl font-black ${founder.stats.color}`}>{founder.stats.impact}</span>
                                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{founder.stats.metric}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-base italic border-l-4 border-primary/40 pl-4 py-1">
                                    "{founder.bio}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
