import logo from "@/assets/99jobs-logo.jpeg";

const Header = () => {
  const WHATSAPP_URL = "https://wa.me/919251271208?text=Hi%2099Jobs%2C%20I%20want%20the%20%E2%82%B999%20Pack.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <img src={logo} alt="99Jobs Logo" className="h-8 sm:h-10 md:h-12 w-auto group-hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-muted/50 px-6 py-2 rounded-full border border-border/50 shadow-sm backdrop-blur-md">
          <a href="#about" className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-background px-4 py-2 rounded-full transition-all duration-300">About Us</a>
          <a href="#product" className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-background px-4 py-2 rounded-full transition-all duration-300">The 99 Pack</a>
          <a href="#courses" className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-background px-4 py-2 rounded-full transition-all duration-300">Courses</a>
          <a href="#testimonials" className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-background px-4 py-2 rounded-full transition-all duration-300">Success Stories</a>
          <a href="#contact" className="text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-background px-4 py-2 rounded-full transition-all duration-300">Contact Us</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white font-bold text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 transition-all whitespace-nowrap block shrink-0 ml-auto"
        >
          Buy Now <span className="opacity-80 font-normal ml-0.5 sm:ml-1">— ₹99</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
