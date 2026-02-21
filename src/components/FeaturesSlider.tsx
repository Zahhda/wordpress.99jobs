import { Target, Search, FileSignature, CheckCircle } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
    {
        title: "ATS-Proof Resumes",
        description: "Our templates are formatted perfectly to pass through Applicant Tracking Systems. No weird tables, no invisible fonts—just clean code.",
        icon: Target,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10"
    },
    {
        title: "HR Verified Scripts",
        description: "Direct email templates that have been tested and verified by hiring managers from top tier companies. Skip the general inbox.",
        icon: Search,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        title: "The Harvard Format",
        description: "Get access to the exact resume structure recommended by top universities. Professional, concise, and impact-driven.",
        icon: FileSignature,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10"
    },
    {
        title: "Interview Q&A Vault",
        description: "Don't freeze when asked complex behavioral questions. Our vault has 50+ precise answers to the most common HR questions.",
        icon: CheckCircle,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10"
    }
];

const FeaturesSlider = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full shadow-sm">
                            What's Included
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                            Your Career Arsenal
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Everything you need inside the <span className="text-foreground font-bold">₹99 Pack</span> to accelerate your job search and stand out from thousands of applicants.
                        </p>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 md:-ml-6 py-4">
                        {features.map((item, idx) => (
                            <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                                <div className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold leading-tight mb-4 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-base">
                                        {item.description}
                                    </p>
                                    <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                                        <item.icon size={160} strokeWidth={1} />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-3 mt-8 pr-2">
                        <CarouselPrevious className="static translate-y-0 h-14 w-14 bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground transition-all" />
                        <CarouselNext className="static translate-y-0 h-14 w-14 bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground transition-all" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default FeaturesSlider;
