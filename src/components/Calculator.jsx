import { useState } from 'react';

function getHorasSono(idade) {
  if (idade <= 13) return "9–11 horas";
  if (idade <= 17) return "8–10 horas";
  if (idade <= 64) return "7–9 horas";
  return "7–8 horas";
}

function getIMCClassification(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 24.9) return "Peso normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade Grau I";
  if (imc < 39.9) return "Obesidade Grau II";
  return "Obesidade Grau III";
}

function getPesoIdeal(genero, alturaCm) {
  if (alturaCm < 152.4) return null; 
  
  if (genero === 'masculino') {
    return 50 + 0.91 * (alturaCm - 152.4);
  } else {
    return 45.5 + 0.91 * (alturaCm - 152.4);
  }
}

export default function Calculator() {
  const [formData, setFormData] = useState({
    genero: 'masculino',
    idade: '',
    peso: '',
    altura: '',
    atividade: '1.2',
  });

  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResults(null);

    const { genero, idade, peso, altura, atividade } = formData;
    
    if (!idade || !peso || !altura || idade <= 0 || peso <= 0 || altura <= 0) {
      setError('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const idadeNum = parseInt(idade);
    const pesoNum = parseFloat(peso);
    const alturaNum = parseInt(altura);
    const atividadeNum = parseFloat(atividade);

    let tmb;
    if (genero === 'masculino') {
      tmb = (10 * pesoNum) + (6.25 * alturaNum) - (5 * idadeNum) + 5;
    } else {
      tmb = (10 * pesoNum) + (6.25 * alturaNum) - (5 * idadeNum) - 161;
    }
    const get = tmb * atividadeNum;

    const imcNum = pesoNum / ((alturaNum / 100) ** 2);
    const imcValor = imcNum.toFixed(2);
    const imcClass = getIMCClassification(imcNum);
    const horasSono = getHorasSono(idadeNum);
    
    const pesoIdealCalculado = getPesoIdeal(genero, alturaNum);
    const pesoIdealStr = pesoIdealCalculado 
      ? `${pesoIdealCalculado.toFixed(1)} kg` 
      : "N/A (< 1.52m)";

    setResults({
      tmb: tmb.toFixed(0),
      manterPeso: get.toFixed(0),
      perderPeso: (get - 500).toFixed(0),
      ganharPeso: (get + 500).toFixed(0),
      
      imc: `${imcValor} (${imcClass})`, 
      pesoIdeal: pesoIdealStr,
      sono: horasSono,
      agua: `${(pesoNum * 35).toFixed(0)} ml - ${(pesoNum * 40).toFixed(0)} ml`,
      proteina: `${(pesoNum * 1.6).toFixed(1)} g - ${(pesoNum * 2.2).toFixed(1)} g`,
      carboidrato: `${(pesoNum * 4).toFixed(1)} g - ${(pesoNum * 6).toFixed(1)} g`,
      gordura: `${(pesoNum * 0.5).toFixed(1)} g - ${(pesoNum * 2).toFixed(1)} g`,
      creatina: (pesoNum * 0.07).toFixed(2),
    });
  };

  const labelClass = "block mb-2 font-semibold text-gray-600";
  const inputClass = "w-full p-3 border-2 border-gray-200 rounded-lg focus:border-[#0a84ff] focus:outline-none transition-colors";

  return (
    <section id="calculator" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="section-title">Calcule Seus Macros</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="genero" className={labelClass}>Gênero:</label>
                <select id="genero" name="genero" value={formData.genero} onChange={handleChange} className={inputClass} required>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
              <div className="mb-4"><label htmlFor="idade" className={labelClass}>Idade:</label><input type="number" id="idade" name="idade" value={formData.idade} onChange={handleChange} placeholder="Ex: 25" className={inputClass} required /></div>
              <div className="mb-4"><label htmlFor="peso" className={labelClass}>Peso (kg):</label><input type="number" id="peso" name="peso" step="0.1" value={formData.peso} onChange={handleChange} placeholder="Ex: 70.5" className={inputClass} required /></div>
              <div className="mb-4"><label htmlFor="altura" className={labelClass}>Altura (cm):</label><input type="number" id="altura" name="altura" value={formData.altura} onChange={handleChange} placeholder="Ex: 175" className={inputClass} required /></div>
              <div className="mb-4">
                <label htmlFor="atividade" className={labelClass}>Nível de Atividade:</label>
                <select id="atividade" name="atividade" value={formData.atividade} onChange={handleChange} className={inputClass} required>
                    <option value="1.2">Sedentário</option>
                    <option value="1.375">Leve (1-3 treinos/sem)</option>
                    <option value="1.55">Moderado (3-5 treinos/sem)</option>
                    <option value="1.725">Intenso (6-7 treinos/sem)</option>
                    <option value="1.9">Atleta</option>
                </select>
              </div>
              <button type="submit" className="w-full mt-2 py-4 px-4 bg-[#0a84ff] text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:-translate-y-1">
                Calcular Resultados
              </button>
            </form>
            {error && <p className="text-red-500 text-center mt-4 font-semibold">{error}</p>}
          </div>

          {results && (
            <div id="resultado">
              <div className="resultado-bloco">
                <h3 className="flex items-center gap-3"><i className="fas fa-bullseye text-[#0a84ff]"></i> Metas Calóricas</h3>
                
                <p className="info-item"><span>Taxa Metabólica Basal (TMB)</span> <strong className="text-gray-700">{results.tmb} kcal</strong></p>
                <p className="info-item"><span>Manter Peso (GET)</span> <strong>{results.manterPeso} kcal</strong></p>
                <p className="info-item"><span>Déficit (Perder Peso)</span> <strong>{results.perderPeso} kcal</strong></p>
                <p className="info-item"><span>Superávit (Ganhar Peso)</span> <strong>{results.ganharPeso} kcal</strong></p>
              </div>

              <div className="resultado-bloco">
                <h3 className="flex items-center gap-3"><i className="fas fa-utensils text-[#0a84ff]"></i> Métricas Diárias</h3>
                
                <p className="info-item"><span>📊 IMC (Peso/Altura²)</span> <strong>{results.imc}</strong></p>
                <p className="info-item"><span>⚖️ Peso Ideal Estimado</span> <strong>{results.pesoIdeal}</strong></p>
                <p className="info-item"><span>🌙 Sono Recomendado</span> <strong>{results.sono}</strong></p>
                
                <p className="info-item"><span>💧 Água</span> <strong>{results.agua}</strong></p>
                <p className="info-item"><span>🥩 Proteína</span> <strong>{results.proteina}</strong></p>
                <p className="info-item"><span>🍚 Carboidrato</span> <strong>{results.carboidrato}</strong></p>
                <p className="info-item"><span>🥑 Gordura</span> <strong>{results.gordura}</strong></p>
                <p className="info-item"><span>💪 Creatina</span> <strong>{results.creatina} g</strong></p>
              </div>

              {/* Novo alerta inserido aqui */}
              <p className="disclaimer mt-4 bg-blue-50 p-3 rounded-lg text-sm text-blue-800 flex items-center justify-center gap-2 border border-blue-100">
                <i className="fas fa-info-circle"></i> O IMC e o peso ideal não levam em consideração se sua massa é magra ou gordura.
              </p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .section-title { text-align: center; font-size: 2.8em; font-weight: 700; color: #1a202c; margin-bottom: 50px; position: relative; }
        .section-title::after { content: ''; width: 80px; height: 4px; background-color: #0a84ff; border-radius: 2px; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); }
        .resultado-bloco { margin-bottom: 20px; padding: 25px; background-color: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
        .resultado-bloco h3 { margin-top: 0; margin-bottom: 20px; color: #2d3748; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-weight: 700; font-size: 1.25rem; }
        .info-item { margin-bottom: 15px; font-size: 1.1em; display: flex; align-items: center; justify-content: space-between; }
        .info-item span:first-child { font-weight: 600; }
        .info-item strong { color: #0a84ff; font-weight: 700; }
        .info-item strong.text-gray-700 { color: #4a5568; }
        .disclaimer { font-size: 0.9em; color: #718096; text-align: center; }
      `}</style>
    </section>
  );
}
