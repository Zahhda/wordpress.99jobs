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
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                        Success Stories
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
                        Real Careers Transformed
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        See how professionals are landing their dream jobs with 99Jobs.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((item, idx) => (
                            <CarouselItem key={idx} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <div className="absolute top-8 right-8 text-secondary/20 group-hover:text-secondary/40 transition-colors">
                                        <Quote size={40} strokeWidth={1} />
                                    </div>

                                    <div className="mb-6">
                                        <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wide mb-3">
                                            {item.type}
                                        </div>
                                        <h3 className="font-heading text-xl font-bold leading-tight mb-2">
                                            "{item.headline}"
                                        </h3>
                                        <div className="flex text-amber-400 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        "{item.quote}"
                                    </p>

                                    <div className="pt-6 border-t border-border/50 flex items-center mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center font-bold text-secondary mr-4 text-lg shrink-0">
                                            {item.author[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground">
                                                {item.author}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {item.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-12 border-primary/20 hover:bg-secondary/10 hover:text-secondary hover:border-secondary" />
                        <CarouselNext className="-right-12 border-primary/20 hover:bg-secondary/10 hover:text-secondary hover:border-secondary" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
