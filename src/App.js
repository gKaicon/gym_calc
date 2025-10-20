import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light text-text-dark">
      <Header />
      <main>
        <Hero />
        <Calculator />
        
        <div style={{
          height: '100px',
          width: '100%',
          backgroundColor: '#f7fafc',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)'
        }}></div>

        <InfoSection id="tmb-get" title="TMB vs. GET: A Base do seu Gasto Calórico" theme="dark">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">O Motor em Repouso vs. em Movimento</h3>
          <p className="text-lg mb-4"><strong>TMB (Taxa Metabólica Basal)</strong> é a sua "marcha lenta". É a energia mínima que seu corpo gasta para manter tudo funcionando se você ficasse em repouso absoluto por 24 horas.</p>
          <p className="text-lg"><strong>GET (Gasto Energético Total)</strong> é a história completa. Ele pega a sua TMB e soma toda a energia gasta em movimento: seus treinos, seu trabalho, uma caminhada.</p>
        </InfoSection>

        <InfoSection id="imc" title="O que é IMC?">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">Índice de Massa Corporal</h3>
          <p className="text-lg mb-4">O <strong>IMC (Índice de Massa Corporal)</strong> é uma medida internacional usada para avaliar se uma pessoa está no seu peso ideal em relação à sua altura. É uma ferramenta de triagem rápida e simples para identificar possíveis problemas de peso.</p>
          <p className="text-lg">É importante notar que o IMC é uma métrica generalista e <strong>não diferencia massa magra (músculos) de gordura</strong>. Por isso, um atleta com alta densidade muscular pode ter um IMC classificado como "Sobrepeso" e, ainda assim, ser extremamente saudável.</p>
        </InfoSection>

        <InfoSection id="macros" title="Os Pilares da sua Performance: Macros" theme="dark">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">Construa, Energize, Regule</h3>
          <p className="text-lg mb-4"><strong>🥩 Proteínas:</strong> Os blocos de construção para reparação e crescimento muscular (<strong>1.6g a 2.2g/kg</strong>).</p>
          <p className="text-lg mb-4"><strong>🍚 Carboidratos:</strong> O combustível primário para treinos de alta intensidade (<strong>4g a 6g/kg</strong>).</p>
          <p className="text-lg"><strong>🥑 Gorduras:</strong> Fundamentais para a produção hormonal e saúde geral (<strong>0.5g a 2g/kg</strong>).</p>
        </InfoSection>

        <InfoSection id="hidratacao" title="Hidratação e Suplementação">
           <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">Água é Performance</h3>
           <p className="text-lg mb-4">Estar apenas 2% desidratado pode derrubar sua performance em até 10%. A meta de <strong>35 a 40 ml por quilo</strong> garante que seu sistema esteja operando no máximo.</p>
           <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">O Papel da Creatina</h3>
           <p className="text-lg">A creatina é um impulsionador de energia para exercícios de força. Ela satura seus músculos com fosfocreatina, permitindo mais repetições e mais ganhos.</p>
        </InfoSection>

        <InfoSection id="sono" title="A Importância do Sono Adequado" theme="dark">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">Sono não é opcional, é essencial</h3>
          <p className="text-lg mb-4">O sono é um dos pilares mais subestimados da saúde e da performance física. É durante o sono profundo que seu corpo libera o <strong>Hormônio do Crescimento (GH)</strong>, crucial para a reparação muscular e hipertrofia.</p>
          <p className="text-lg">Dormir mal afeta diretamente sua recuperação, seus níveis de energia no treino, sua sensibilidade à insulina e até mesmo sua capacidade de tomar boas decisões alimentares. A faixa de <strong>7 a 9 horas</strong> por noite é a meta de ouro para a maioria dos adultos que buscam otimizar a composição corporal.</p>
        </InfoSection>

      </main>
      <Footer />
    </div>
  )
}

export default App;