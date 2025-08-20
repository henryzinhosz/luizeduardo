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
              Olá! Meu nome é Luiz, mas na internet sou conhecido como "Henry" e "Aslam". Sou do Rio de Janeiro (RJ), Brasil. Sou um grande entusiasta de café e livros. Meu escritor favorito é Sun Tzu, sou verdadeiramente fascinado por sua filosofia e pela arte chinesa. Suas reflexões me transportam para um universo majestoso e estratégico. A Arte da Guerra está entre minhas obras prediletas, oferecendo insights profundos sobre liderança, conquista e honra.
            </p>
            <p data-testid="bio-paragraph-2">
              Minhas grandes paixões incluem: programação Front-End — pela liberdade de customização e pela imersão na experiência do usuário —, segurança da informação — com foco na proteção de servidores e dados confidenciais —, e artes marciais — sou competidor de Jiu-Jitsu e Muay Thai. Minha jornada na programação começou aos 13 anos, quando visitava meu tio e passava horas observando ele desenvolver códigos complexos. Aquele universo me cativou e, desde então, busquei me aprofundar na área por meio de cursos em instituições reconhecidas, como a Cisco Brasil, e formações gratuitas oferecidas pela Harvard. Atualmente, curso Engenharia de Software na Universidade Veiga de Almeida, no Rio de Janeiro.
            </p>
            <p data-testid="bio-paragraph-3">
              Além disso, sou membro da Destiny Org, uma organização brasileira privada de ensino, onde nos dedicamos à aprender e compreender sobre tecnologia, sociologia, filosofia e ciência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
