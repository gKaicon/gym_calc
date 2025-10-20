// src/components/InfoSection.jsx
export default function InfoSection({ id, title, theme = 'light', children }) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#1a202c]' : 'bg-background-light';
  const textColor = isDark ? 'text-text-light' : 'text-text-dark';
  
  return (
    <section id={id} className={`${bgColor} ${textColor} py-20`}>
      <div className="container mx-auto px-5 max-w-3xl">
        <h2 className={`section-title ${isDark ? 'light' : ''}`}>{title}</h2>
        <div className={`text-${isDark ? 'white' : 'black'} text-center md:text-left`} >
          {children}
        </div>
      </div>
      {/* Estilos específicos que são mais fáceis de definir aqui */}
      <style jsx>{`
        .section-title { text-align: center; font-size: 2.8em; font-weight: 700; margin-bottom: 50px; position: relative; }
        .section-title.light { color: white; }
        .section-title::after { content: ''; width: 80px; height: 4px; background-color: #0a84ff; border-radius: 2px; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); }
      `}</style>
    </section>
  );
}