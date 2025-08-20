import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Photo with Glow Effect */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden animate-pulse-glow border-4 border-glow-cyan">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="henrysz - Desenvolvedor Profissional" 
              className="w-full h-full object-cover"
              data-testid="profile-photo"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-glow-cyan to-glow-purple opacity-20 blur-xl"></div>
        </div>
        
        {/* Name with Glow Effect */}
        <h1 className="font-poppins text-6xl md:text-8xl font-bold mb-4 text-gradient-stellar animate-float" data-testid="name-title">
          henrysz
        </h1>
        
        {/* Professional Info */}
        <div className="space-y-2 mb-8 text-lg md:text-xl text-gray-300">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-stellar-cyan" />
            <span data-testid="location">São Paulo, Brasil</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 text-stellar-purple flex items-center justify-center">💻</span>
            <span data-testid="role">Desenvolvedor Full Stack</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="w-5 h-5 text-stellar-blue flex items-center justify-center">🎓</span>
            <span data-testid="education">Ciência da Computação</span>
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="#" 
            className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            data-testid="link-github"
          >
            <Github className="w-6 h-6 group-hover:text-glow-cyan transition-colors" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-6 h-6 group-hover:text-stellar-blue transition-colors" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            data-testid="link-instagram"
          >
            <Instagram className="w-6 h-6 group-hover:text-glow-purple transition-colors" />
          </a>
          <a 
            href="mailto:contact@henrysz.dev" 
            className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
            data-testid="link-email"
          >
            <Mail className="w-6 h-6 group-hover:text-stellar-cyan transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
