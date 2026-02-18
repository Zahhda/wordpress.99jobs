import logo from "@/assets/99jobs-logo.jpeg";

const Header = () => {
  const WHATSAPP_URL = "https://wa.me/919251271208?text=Hi%2099Jobs%2C%20I%20want%20the%20%E2%82%B999%20Pack.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="99Jobs Logo" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">The 99 Pack</a>
          <a href="#offices" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Offices</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-secondary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Buy Now — ₹99
        </a>
      </div>
    </header>
  );
};

export default Header;
