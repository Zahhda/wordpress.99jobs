import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";

const companies = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys",
  "Wipro", "Accenture", "Cognizant", "IBM", "Tech Mahindra",
];

const HeroSection = () => {
  const WHATSAPP_URL = "https://wa.me/919251271208?text=Hi%2099Jobs%2C%20I%20want%20the%20%E2%82%B999%20Pack.";

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-slate-950">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0" />
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay z-0"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Animated Light Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] z-0 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-[100%] blur-[120px] z-0 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">

        {/* Trusted Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-lg mb-8 backdrop-blur-sm">
          <div className="flex -space-x-2 mr-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 rounded-full bg-orange-500 border-2 border-slate-800 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-300">
            🚀 Join <span className="text-white font-bold">50,000+</span> candidates hired!
          </span>
        </div>

        {/* Hero Copy */}
        <div className="max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Get Hired by <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-sm">
              Top Companies.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            India's most trusted career accelerator. Get ATS-proof resumes, hidden HR contact lists, and priority interview calls—start your journey for just <strong className="text-white">₹99</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-lg mx-auto mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold text-lg px-8 py-4 sm:py-5 rounded-full hover:bg-orange-600 hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] group whitespace-nowrap"
            >
              Get the ₹99 Pack
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 text-white border border-slate-700 font-semibold text-lg px-8 py-4 sm:py-5 rounded-full hover:bg-slate-700 hover:text-white transition-all backdrop-blur-sm whitespace-nowrap"
            >
              See What's Inside
            </a>
          </div>

          {/* Quick Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-400 mb-16">
            <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Delivery
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> WhatsApp Support
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verified HR Scripts
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Carousel Slider (Companies) within Hero */}
      <div className="relative mt-auto w-full border-t border-slate-800/50 bg-slate-900/40 backdrop-blur-sm py-5 overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="container mx-auto px-4 flex items-center gap-6">
          <span className="shrink-0 text-slate-500 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
            <Building2 className="w-4 h-4" /> Hiring Partners
          </span>
          <div className="flex w-full overflow-hidden opacity-60">
            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div key={index} className="text-xl sm:text-2xl font-black font-heading text-slate-300 tracking-tight opacity-70 hover:opacity-100 transition-opacity">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
