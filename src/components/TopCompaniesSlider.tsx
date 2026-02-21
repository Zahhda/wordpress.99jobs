import { useEffect, useState } from "react";

const companies = [
    "Google", "Microsoft", "Amazon", "TCS", "Infosys",
    "Wipro", "Accenture", "Cognizant", "IBM", "Tech Mahindra",
    "HCL", "Flipkart", "Paytm", "Zomato", "Swiggy"
];

const TopCompaniesSlider = () => {
    return (
        <section className="py-12 bg-background border-y border-border/50 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />



            <div className="flex w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-8 py-2">
                    {[...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 rounded-xl bg-muted/50 border border-border/50 hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all font-bold text-foreground opacity-80 hover:opacity-100 flex items-center justify-center cursor-default shadow-sm backdrop-blur-sm"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCompaniesSlider;
