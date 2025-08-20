import { Github, Mail, Linkedin } from 'lucide-react';

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
              href="#" 
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-github"
            >
              <Github className="w-6 h-6 group-hover:text-glow-cyan transition-colors" />
            </a>
            
            <a 
              href="mailto:contact@henrysz.dev" 
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-email"
            >
              <Mail className="w-6 h-6 group-hover:text-stellar-purple transition-colors" />
            </a>
            
            <a 
              href="#" 
              className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
              data-testid="contact-linkedin"
            >
              <Linkedin className="w-6 h-6 group-hover:text-stellar-blue transition-colors" />
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
