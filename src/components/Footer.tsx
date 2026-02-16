import logo from "@/assets/99jobs-logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="99Jobs" className="h-10 mb-4 rounded bg-primary-foreground p-1" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Don't just apply. Get hired. India's most affordable career accelerator for students and professionals.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Home", "About Us", "The 99 Pack", "Contact Us", "Privacy Policy"].map(l => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              {[
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "YouTube", url: "#" },
                { name: "WhatsApp", url: "#" },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-colors text-xs font-bold"
                >
                  {s.name[0]}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <span className="inline-block w-2 h-2 rounded-full bg-whatsapp" />
              Verified by 50,000+ Job Seekers
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50 space-y-1">
          <p>&copy; {new Date().getFullYear()} 99Jobs. All rights reserved.</p>
          <p>Astra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

