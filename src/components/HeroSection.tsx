import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const WHATSAPP_URL = "https://wa.me/919251271208?text=Hi%2099Jobs%2C%20I%20want%20the%20%E2%82%B999%20Pack.";

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/95" />

      <div className="relative container mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl animate-slide-up">
          <span className="inline-block bg-secondary/20 text-secondary-foreground border border-secondary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 Your Shortcut to a Career
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Unlock 1,000+ Premium Opportunities &{" "}
            <span className="text-secondary">The Ultimate Job-Winner Kit.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
            India's most trusted platform for students and job seekers. Get ATS-proof resumes, HR contact lists, and direct interview calls—all starting at just <strong className="text-secondary">₹99</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Get the ₹99 Pack Now
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.525 5.857L.053 23.537l5.832-1.529A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.8 9.8 0 01-5.008-1.373l-.36-.213-3.722.976.993-3.63-.235-.373A9.79 9.79 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" /></svg>
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-all"
            >
              Learn More ↓
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-primary-foreground/70">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-secondary/60 border-2 border-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm">Trusted by <strong className="text-primary-foreground">50,000+</strong> Job Seekers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
