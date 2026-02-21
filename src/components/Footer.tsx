import logo from "@/assets/99jobs-logo.jpeg";
import { Instagram, Linkedin, Youtube, MessageCircle, ArrowRight } from "lucide-react";

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
            <div className="flex gap-4 mb-6">
              {[
                { name: "Instagram", url: "#", icon: Instagram },
                { name: "LinkedIn", url: "#", icon: Linkedin },
                { name: "YouTube", url: "#", icon: Youtube },
                { name: "WhatsApp", url: "https://wa.me/919251271208?text=Hi%2099Jobs%2C%20I%20want%20the%20%E2%82%B999%20Pack.", icon: MessageCircle },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  title={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <s.icon className="w-5 h-5" />
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

