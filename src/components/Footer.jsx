// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-text-light py-16 text-center text-white">
      <div className="container mx-auto px-5">
        <h3 className="text-3xl font-bold  mb-2">Gabriel Kaicon Batista Hilário</h3>
        <p className="mb-6">Desenvolvedor da Calculadora Nutricional</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://linkedin.com/in/gkaicon21" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-3xl hover:text-[#0a84ff] hover:-translate-y-1 transition-all duration-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/gKaicon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-3xl hover:text-[#0a84ff] hover:-translate-y-1 transition-all duration-300"><i className="fab fa-github"></i></a>
        </div>
        <div className="footer-contact flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
          <span><i className="fas fa-envelope text-[#0a84ff] mr-2"></i> gkaicon@gmail.com</span>
          <span><i className="fas fa-phone text-[#0a84ff] mr-2"></i> +55 (33) 98878-3602</span>
        </div>
      </div>
    </footer>
  );
}