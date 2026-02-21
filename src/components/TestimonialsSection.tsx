import { Quote, Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
    type: string;
    headline: string;
    quote: string;
    author: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        type: "The Fresh Graduate",
        headline: "The ROI is Incredible",
        quote: "As a fresher, I was lost in the sea of job portals. The ₹99 kit from 99Jobs gave me a clear structure. Within 72 hours of updating my resume using their templates, I received 4 interview calls. It is the best ₹99 I have ever spent.",
        author: "Aditi V.",
        role: "Junior Data Analyst",
    },
    {
        type: "The Career Switcher",
        headline: "Beat the AI Gatekeepers",
        quote: "I spent months applying with no luck. The team at 99Jobs explained how ATS works. I upgraded to the ₹499 Pro Audit, and the feedback was life-changing. I’ve now signed my offer letter with a 30% hike.",
        author: "Karan Malhotra",
        role: "Marketing Executive",
    },
    {
        type: "The Tech Professional",
        headline: "No-Nonsense & Professional",
        quote: "What I love about 99Jobs is the lack of fluff. They provide direct, HR-verified templates that work. The cold-email scripts alone are worth 10x the price.",
        author: "Vikram S.",
        role: "Software Engineer",
    },
    {
        type: "The ATS Specialist",
        headline: "It Actually Works!",
        quote: "I was applying for months with zero response. After using the ₹99 ATS-Optimized template, I got an interview invite from a top MNC within 4 days.",
        author: "Anjali Sharma",
        role: "Software Engineer",
    },
    {
        type: "Value for Money",
        headline: "Better Than Expensive Coaching",
        quote: "I thought ₹99 was too cheap to be good, but I was wrong. The quality of the templates and the cold-email scripts is better than coaching services that charge ₹5,000.",
        author: "Rohan Mehra",
        role: "MBA Graduate",
    },
    {
        type: "Interview Closer",
        headline: "Impressed the HR",
        quote: "The Interview Q&A bank in the kit is a lifesaver. It helped me answer the 'Tell me about yourself' question so professionally that the HR was genuinely impressed.",
        author: "Sneha Kapoor",
        role: "Marketing Aspirant",
    },
    {
        type: "Pro Audit",
        headline: "Worth Every Rupee",
        quote: "I opted for the Pro Resume Audit. The video feedback I received was eye-opening. They pointed out mistakes I never noticed. Worth every rupee!",
        author: "Vikram Aditya",
        role: "Operations Manager",
    },
    {
        type: "Confidence Booster",
        headline: "Got Noticed by Recruiters",
        quote: "99Jobs gave me the confidence to apply to big companies. Their LinkedIn optimization tips helped me get noticed by recruiters directly.",
        author: "Priya Das",
        role: "B.Com Fresher",
    },
    {
        type: "Time Saver",
        headline: "10-Minute Fix",
        quote: "Stop wasting hours on YouTube trying to build a resume. Just get the 99Jobs kit. It’s a 10-minute fix for a 6-month-long problem.",
        author: "Amit Verma",
        role: "Data Analyst",
    },
    {
        type: "Cold Email Success",
        headline: "Pure Gold Templates",
        quote: "The cold-email templates are pure gold. I sent 10 emails using their format and got 3 replies from Hiring Managers the next morning.",
        author: "Siddharth Malhotra",
        role: "Sales Executive",
    },
    {
        type: "Design Appreciation",
        headline: "Clean & Professional",
        quote: "The layouts are very clean and professional. Not too fancy, just exactly what HR looks for. It makes me look like a serious candidate.",
        author: "Ishita Gupta",
        role: "HR Generalist",
    },
    {
        type: "Instant Delivery",
        headline: "Great Service",
        quote: "I paid via the QR code and received my files on WhatsApp instantly. Great service and very helpful support team!",
        author: "Manish R.",
        role: "Final Year Student",
    },
    {
        type: "Total Solution",
        headline: "Best Investment",
        quote: "99Jobs is the best investment I’ve made in my career journey so far. Simple, affordable, and highly effective for Indian freshers.",
        author: "Kavita Reddy",
        role: "Content Writer",
    },
];
const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-24 bg-muted/40 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-background to-transparent z-10 hidden md:block pointer-events-none" />
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-background to-transparent z-10 hidden md:block pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wider bg-secondary/10 px-4 py-1.5 rounded-full shadow-sm">
                        Success Stories
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold mt-6 mb-4">
                        Real Careers Transformed
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See how professionals are landing their dream jobs with 99Jobs.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full max-w-[90rem] mx-auto px-0 md:px-20 relative group"
                >
                    <div className="flex justify-end gap-2 mb-6 md:hidden pr-2">
                        <CarouselPrevious className="static translate-y-0 h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm" />
                        <CarouselNext className="static translate-y-0 h-10 w-10 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm" />
                    </div>

                    <CarouselContent className="-ml-4 md:-ml-6 py-4">
                        {testimonials.map((item, idx) => (
                            <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 xl:basis-1/3 py-2">
                                <div className="group relative bg-card rounded-3xl p-8 border border-border/50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col overflow-hidden">
                                    {/* Card Header Gradient */}
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="absolute top-6 right-6 text-secondary/10 group-hover:text-secondary/20 transition-colors transform group-hover:scale-110 duration-500">
                                        <Quote size={80} strokeWidth={0.5} />
                                    </div>

                                    <div className="mb-6 relative z-10">
                                        <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20">
                                            {item.type}
                                        </div>
                                        <h3 className="font-heading text-xl font-bold leading-tight mb-3 text-foreground">
                                            "{item.headline}"
                                        </h3>
                                        <div className="flex gap-1 text-amber-500 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow relative z-10 text-base">
                                        "{item.quote}"
                                    </p>

                                    <div className="pt-6 border-t border-border/50 flex items-center mt-auto relative z-10 group-hover:border-primary/20 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary text-primary-foreground shadow-lg flex items-center justify-center font-bold text-lg mr-4 shrink-0 shadow-primary/30">
                                            {item.author[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground text-base">
                                                {item.author}
                                            </div>
                                            <div className="text-sm font-medium text-secondary">
                                                {item.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Desktop Side Navigation Buttons */}
                    <div className="hidden md:block">
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground transition-all z-20 hover:scale-110 opacity-70 group-hover:opacity-100" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 bg-card border border-border shadow-md hover:bg-primary hover:text-primary-foreground transition-all z-20 hover:scale-110 opacity-70 group-hover:opacity-100" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
