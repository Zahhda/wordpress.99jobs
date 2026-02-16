import { FileText, Building2, GraduationCap, CheckCircle2 } from "lucide-react";

const ProductSection = () => {
  const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%2099Jobs%2C%20I%20want%20the%20%E2%82%B999%20Pack.";

  const features = [
    {
      icon: FileText,
      title: "ATS-Proof Resumes",
      desc: "5 professionally AI-generated resumes tailored to pass automated screening systems.",
    },
    {
      icon: Building2,
      title: "The HR Vault",
      desc: "Direct email and company details of 100+ Top Companies. Skip the job boards.",
    },
    {
      icon: GraduationCap,
      title: "Interview Secrets",
      desc: "Comprehensive guides on cracking tough HR rounds and landing your dream offer.",
    },
  ];

  return (
    <section id="product" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Featured Product</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            The 99 Pack
          </h2>
          <p className="text-muted-foreground">Everything you need to land your dream job — in one kit.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Price Card */}
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            <div className="bg-primary p-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="text-primary-foreground/50 line-through text-2xl font-medium">₹999</span>
                <span className="font-heading text-5xl md:text-6xl font-extrabold text-primary-foreground">₹99</span>
              </div>
              <p className="text-primary-foreground/70 text-sm mt-2">One-time payment • Lifetime access</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                      <f.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                  {["Instant delivery", "WhatsApp support", "No hidden charges"].map((t, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-whatsapp" />
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-whatsapp text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.122 1.525 5.857L.053 23.537l5.832-1.529A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.8 9.8 0 01-5.008-1.373l-.36-.213-3.722.976.993-3.63-.235-.373A9.79 9.79 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z"/></svg>
                  Buy Now — ₹99
                </a>
                <p className="text-xs text-muted-foreground">Payment via WhatsApp UPI • Instant delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
