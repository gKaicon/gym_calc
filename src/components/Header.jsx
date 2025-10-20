import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#calculator', text: 'Calculadora' },
    { href: '#tmb-get', text: 'TMB vs GET' },
    { href: '#imc', text: 'IMC' },
    { href: '#macros', text: 'Macronutrientes' },
    { href: '#hidratacao', text: 'Hidratação' },
    { href: '#sono', text: 'Sono' },
    { href: '#footer', text: 'Contato' },
  ];

  return (
    <header className="bg-[#1a202c] backdrop-blur-md shadow-md sticky top-0 z-50 w-full text-white">
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center py-4 relative">
          <a href="/" className="text-2xl font-bold text-white">
            Nutri<span className="text-[#0a84ff]">Calc</span>
          </a>

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} className="text-text-light font-semibold hover:text-[#0a84ff] transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl z-50">
              <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
          </div>

          <div className={`fixed top-0 left-0 w-full h-full bg-[#1a202c] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {navLinks.map((link) => (
              <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-text-light text-2xl my-4 font-semibold hover:text-[#0a84ff] transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}