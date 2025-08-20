import { Github, Mail, Linkedin, Instagram } from 'lucide-react';

export default function ContactFooter() {
  return (
    <>
      {/* Contact Footer */}
      <footer className="py-8 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins text-lg md:text-xl font-medium mb-4 text-gradient-stellar" data-testid="contact-title">
            Contatos
          </h2>
          
          <div className="flex justify-center gap-6 mb-6" data-testid="contact-links">
            <a 
              href="https://github.com/henryzinhosz" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-github"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 group-hover:text-glow-cyan transition-colors" />
            </a>
            
            <a 
              href="mailto:luizedurj31@gmail.com" 
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-email"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 group-hover:text-stellar-purple transition-colors" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/luizeduarddo" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 group-hover:text-stellar-blue transition-colors" />
            </a>

            <a 
              href="https://www.instagram.com/luizazeveddo" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-instagram"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </footer>
      
      {/* Sub-footer */}
      <div className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p className="mb-2" data-testid="copyright">© 2024 Todos os direitos reservados</p>
          <p className="text-sm">
            Desenvolvido por{' '}
            <span className="text-stellar-cyan font-medium cursor-pointer hover:text-glow-cyan transition-colors" data-testid="developer-name">
              henrysz
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
