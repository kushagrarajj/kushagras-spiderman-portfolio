import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Top Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleScrollToTop}
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Kushagra</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Web Developer passionate about creating beautiful, 
              functional, and user-friendly digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-smooth text-sm mx-auto md:mx-0"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-secondary">Let's Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>kushagra@example.com</div>
              <div>+1 (555) 123-4567</div>
              <div>New York, NY</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Kushagra. All rights reserved.
            </div>

            {/* Made with Love */}
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            {/* Tech Stack */}
            <div className="text-sm text-muted-foreground">
              Built with React & Tailwind CSS
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-primary/10 blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-secondary/10 blur-xl animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;