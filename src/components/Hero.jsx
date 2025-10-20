// src/components/Hero.jsx
export default function Hero() {
  return (
    <section id="hero" className="relative text-white text-center py-24 px-5 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-[#1a202c] opacity-80"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Transforme Seu Corpo, Começando Pela Nutrição
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-10 text-text-light">
          A ferramenta definitiva para decifrar suas necessidades calóricas e de macronutrientes. Precisão e ciência para você alcançar a máxima performance e bem-estar.
        </p>
        <a href="#calculator" className="bg-[#0a84ff] text-white py-4 px-8 rounded-full font-bold text-lg hover:translate-y-[-3px] hover:shadow-lg hover:shadow-[#0a84ff]/30 transition-all duration-300">
          Começar Agora
        </a>
      </div>
    </section>
  );
}