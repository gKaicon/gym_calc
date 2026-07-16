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

        {/* Seção unificada e expandida sobre as falhas do IMC e Peso Ideal */}
        <InfoSection id="imc-peso-ideal" title="A Grande Falha do IMC e Peso Ideal">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">A Balança Não Conta a História Toda</h3>
          <p className="text-lg mb-4">O <strong>IMC (Índice de Massa Corporal)</strong> e as fórmulas de <strong>Peso Ideal (como a de Devine)</strong> são métricas clínicas padronizadas mundialmente, baseadas apenas em altura e gênero. O grande problema é que elas <strong>não diferenciam massa magra (músculos) de gordura</strong>.</p>
          <p className="text-lg">Para quem foca em hipertrofia e treina pesado, a densidade muscular joga os números para o alto. O peso na balança pode facilmente apontar "sobrepeso" ou "obesidade", mesmo com um percentual de gordura baixo e excelente saúde metabólica. Portanto, use esses números apenas como uma referência médica básica, mas guie-se sempre pela composição corporal no espelho e nos treinos.</p>
        </InfoSection>

        <InfoSection id="macros" title="Os Pilares da sua Performance: Macros" theme="dark">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">Construa, Energize, Regule</h3>
          <p className="text-lg mb-4"><strong>🥩 Proteínas:</strong> Os blocos de construção para reparação e crescimento muscular (<strong>1.6g a 2.2g/kg</strong>).</p>
          <p className="text-lg mb-4"><strong>🍚 Carboidratos:</strong> O combustível primário para treinos de alta intensidade (<strong>4g a 6g/kg</strong>).</p>
          <p className="text-lg"><strong>🥑 Gorduras:</strong> Fundamentais para a produção hormonal e saúde geral (<strong>0.5g a 2g/kg</strong>).</p>
        </InfoSection>

        {/* Nova seção de FAQ com exemplos práticos */}
        <InfoSection id="faq" title="Dúvidas Frequentes">
          <div className="space-y-8">
            <div>
              <h3 className="text-[#0a84ff] text-2xl font-bold mb-2">Por que meu peso estagnou se bato os macros perfeitamente?</h3>
              <p className="text-lg">Porque o corpo se adapta e a matemática precisa acompanhar. Se o objetivo é um projeto de bulking longo — por exemplo, subir dos 80kg para os 90kg —, o corpo vai exigir mais energia conforme ganha massa. O superávit calórico que fazia o peso subir no início se torna a caloria de manutenção meses depois. É fundamental voltar à calculadora e refazer as contas a cada 1,5kg ou 2kg consolidados.</p>
            </div>
            
            <div>
              <h3 className="text-[#0a84ff] text-2xl font-bold mb-2">O multiplicador de atividade da calculadora é exato?</h3>
              <p className="text-lg">Nem sempre. Fórmulas não preveem gastos extras diários ou rotinas duplas. Alguém que faz um treino focado em progressão de carga (como agachamento e terra pesados em uma rotina Upper/Lower) e ainda utiliza a bicicleta todos os dias para ir trabalhar e ir à academia, consome uma energia absurda. Muitas vezes, um resultado de atividade "Moderada" subestima o gasto real de quem vive esse perfil.</p>
            </div>

            <div>
              <h3 className="text-[#0a84ff] text-2xl font-bold mb-2">A regra de água (35-40ml/kg) muda com a suplementação?</h3>
              <p className="text-lg">Pode mudar. O cálculo do site é excelente para o dia a dia, mas se você consome creatina de forma crônica, tem treinos pesados e gasta muito suor (como pedalando no sol), a demanda de hidratação sobe. Para manter a hidratação celular muscular em alta, muitos preferem não oscilar e fixar uma meta diária mais agressiva, como beber 4.5 litros todos os dias cravado.</p>
            </div>
          </div>
        </InfoSection>

        <InfoSection id="sono" title="A Importância do Sono Adequado" theme="dark">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">Sono não é opcional, é essencial</h3>
          <p className="text-lg mb-4">O sono é um dos pilares mais subestimados da saúde e da performance física. É durante o sono profundo que seu corpo libera o <strong>Hormônio do Crescimento (GH)</strong>, crucial para a reparação muscular e hipertrofia.</p>
          <p className="text-lg">Dormir mal afeta diretamente sua recuperação, seus níveis de energia no treino, sua sensibilidade à insulina e até mesmo sua capacidade de tomar boas decisões alimentares. A faixa de <strong>7 a 9 horas</strong> por noite é a meta de ouro para a maioria dos adultos que buscam otimizar a composição corporal.</p>
        </InfoSection>

        {/* Nova seção de Metodologia e Disclaimer */}
        <InfoSection id="metodologia" title="Metodologia e Transparência">
          <h3 className="text-[#0a84ff] text-3xl font-bold mb-4">De Entusiasta para Entusiasta</h3>
          <p className="text-lg mb-4"><strong>Aviso Importante:</strong> Não sou um profissional da área da saúde (médico, nutricionista ou educador físico). Sou um entusiasta da área de tecnologia e musculação que estuda, treina e respira esse assunto no dia a dia.</p>
          <p className="text-lg mb-4">As fórmulas utilizadas nesta ferramenta (como Mifflin-St Jeor e Devine) são métodos científicos válidos e globais, porém em suma, simples. Todo o caminho lógico construído aqui é fruto de estudo pessoal constante e muitas conversas diárias com fisioterapeutas, personal trainers, médicos, nutricionistas, biólogos e auxílio de inteligência artificial.</p>
          <p className="text-lg">Aprende-se muito trocando experiências com profissionais de verdade. Use este site como um ponto de partida para ter controle sobre seus dados, mas lembre-se: cada organismo é único. Para dietas específicas, ajustes finos e avaliações completas, procure sempre o acompanhamento de profissionais capacitados.</p>
        </InfoSection>

      </main>
      <Footer />
    </div>
  )
}

export default App;
