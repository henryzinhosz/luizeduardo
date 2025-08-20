import { Star } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-stellar" data-testid="about-title">
          Sobre Mim
        </h2>
        
        <div className="glassmorphism rounded-2xl p-8 md:p-12 relative overflow-hidden" data-testid="about-card">
          {/* Constellation decoration */}
          <div className="absolute top-4 right-4 opacity-20">
            <Star className="w-10 h-10 text-stellar-blue" />
          </div>
          
          <div className="text-lg leading-relaxed text-gray-200 space-y-4">
            <p data-testid="bio-paragraph-1">
              Sou um desenvolvedor full stack apaixonado por criar soluções digitais inovadoras que conectam tecnologia e experiência do usuário. Com experiência sólida em desenvolvimento web moderno, busco sempre entregar projetos que não apenas funcionem perfeitamente, mas que também inspirem e engajem.
            </p>
            <p data-testid="bio-paragraph-2">
              Minha jornada na programação começou com curiosidade sobre como as coisas funcionam no mundo digital. Hoje, especializo-me em React, JavaScript e Python, sempre explorando novas tecnologias e metodologias para criar experiências web excepcionais. Acredito que a programação é uma forma de arte que combina lógica, criatividade e resolução de problemas.
            </p>
            <p data-testid="bio-paragraph-3">
              Quando não estou codificando, gosto de estudar astronomia e explorar o universo dos games. Essas paixões me inspiram a pensar fora da caixa e a trazer uma perspectiva única para cada projeto que desenvolvo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
