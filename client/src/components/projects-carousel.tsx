import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Site Social",
    description: "Um site de apresentação minha, de meus amigos e de meus projetos com design moderno e interativo. Desenvolvido com Html e Css",
    image: "https://media.discordapp.net/attachments/1390540377030791240/1408076485251694702/image.png?ex=68a86cea&is=68a71b6a&hm=aa2f0468f57767f3fda21e63f23675ac7b4b7ae9c10ed7701051bc61a71e0f07&=&format=webp&quality=lossless&width=1464&height=693",
    technologies: ["React", "HTML", "CSS"],
    demoLink: "https://theworldofoz.vercel.app/",
    githubLink: "https://github.com/henryzinhosz",
    gradient: "from-stellar-blue to-stellar-cyan"
  },
  {
    id: 2,
    title: "Sona Music",
    description: "Bot de música que junta qualidade de áudio com a praticidade de uma dashboard player interativa.",
    image: "https://media.discordapp.net/attachments/1390540377030791240/1408076902895456297/image.png?ex=68a86d4e&is=68a71bce&hm=43becce52578f41fa3c30970822f05209874a4bb0b9456dc44f00d1ae18796d6&=&format=webp&quality=lossless&width=1464&height=693",
    technologies: ["Discord.js", "LavaLink", "Erela.js", "MongoDB"],
    demoLink: "https://sonamusic.vercel.app/",
    githubLink: "https://github.com/henryzinhosz",
    gradient: "from-stellar-purple to-glow-purple"
  },
  {
    id: 3,
    title: "Site Social",
    description: "Site para o grupo Discord Nyxion Family, com apresentação de membros, história do grupo e cards interativos",
    image: "https://media.discordapp.net/attachments/1390540377030791240/1408077046202105947/image.png?ex=68a86d70&is=68a71bf0&hm=55f6a35af103913bca5adc1cf00823f54bdf96786fab308e376991210a66a80b&=&format=webp&quality=lossless&width=1454&height=693",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "https://github.com/henryzinhosz",
    gradient: "from-stellar-cyan to-glow-cyan"
  },
  {
    id: 4,
    title: "Contador de rosto",
    description: "Sistema inteligente de detecção facial usando Python que conta rostos em imagens e vídeos com precisão.",
    image: "https://revistasegurancaeletronica.com.br/wp-content/uploads/2025/03/Guia-de-tecnologias-de-reconhecimento-facial-para-profissionais-de-seguranca.jpg",
    technologies: ["Python", "OpenCV"],
    githubLink: "https://github.com/henryzinhosz/Contador-de-rosto",
    gradient: "from-stellar-cyan to-glow-cyan"
  },
  {
    id: 5,
    title: "Calculadora de Idade",
    description: "Aplicação Python integrada com Firebase para calcular idades precisas a partir de informações pessoais.",
    image: "https://www.mobills.com.br/blog/wp-content/uploads/2023/02/imagem-destaque-calculadora-de-idade-mobills.png",
    technologies: ["Python", "Firebase"],
    githubLink: "https://github.com/henryzinhosz/Calculadora-de-idade",
    gradient: "from-stellar-cyan to-glow-cyan"
  }
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getTechColor = (tech: string) => {
    if (tech === 'React' || tech === 'Next.js' || tech === 'React Native') return 'bg-stellar-blue/20 text-stellar-blue';
    if (tech === 'Node.js' || tech === 'TypeScript' || tech === 'Firebase') return 'bg-stellar-purple/20 text-stellar-purple';
    return 'bg-stellar-cyan/20 text-stellar-cyan';
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-stellar" data-testid="projects-title">
          Projetos
        </h2>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-5xl mx-auto h-[450px]" data-testid="projects-carousel">
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
              const isNext = index === (currentIndex + 1) % projects.length;
              const isVisible = isActive || isPrev || isNext;
              
              if (!isVisible) return null;
              
              let positionClass = '';
              if (isPrev) {
                positionClass = 'scale-75 -translate-x-24 blur-sm opacity-50';
              } else if (isNext) {
                positionClass = 'scale-75 translate-x-24 blur-sm opacity-50';
              } else {
                positionClass = 'scale-100 z-20';
              }
              
              return (
                <div
                  key={project.id}
                  className={`glassmorphism rounded-2xl p-6 w-80 h-96 flex flex-col transition-all duration-700 ease-in-out absolute left-1/2 transform -translate-x-1/2 ${positionClass}`}
                  data-testid={`project-card-${project.id}`}
                >
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 overflow-hidden`}>
                    <img 
                      src={project.image}
                      alt={`${project.title} Interface`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 flex-grow" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded-full ${getTechColor(tech)}`}
                        data-testid={`project-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.demoLink}
                      className="flex-1 bg-gradient-to-r from-stellar-blue to-stellar-purple text-white py-2 px-4 rounded-lg text-center text-sm hover:opacity-80 transition-opacity flex items-center justify-center gap-1"
                      data-testid={`project-demo-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="flex-1 glassmorphism py-2 px-4 rounded-lg text-center text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-1"
                      data-testid={`project-github-${project.id}`}
                    >
                      <SiGithub className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group z-30"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-glow-cyan transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group z-30"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-glow-cyan transition-colors" />
          </button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2" data-testid="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentIndex ? 'bg-stellar-blue' : 'bg-gray-500'
              }`}
              data-testid={`carousel-indicator-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
