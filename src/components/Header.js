export default function Header() {
    return (
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            TOWERTOP WIZARD
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#setup" className="text-white hover:text-wizard-cyan transition-colors">
              Setup
            </a>
            <a href="#turns" className="text-white hover:text-wizard-cyan transition-colors">
              Taking a Turn
            </a>
            <a href="#cards" className="text-white hover:text-wizard-cyan transition-colors">
              Card Types
            </a>
            <a href="#combat" className="text-white hover:text-wizard-cyan transition-colors">
              Combat
            </a>
            <a href="#contact" className="text-white hover:text-wizard-cyan transition-colors">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl">
            ☰
          </button>
        </nav>
      </header>
    );
  }