import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text animate-glow">Kushagra</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-in">
            Full Stack Web Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I create beautiful, responsive, and user-friendly web applications 
            using modern technologies. Passionate about clean code, innovative solutions, 
            and bringing ideas to life through development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={handleScrollToProjects}
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/80 glow-pink transition-bounce"
            >
              View My Work
            </Button>
            <Button 
              onClick={handleScrollToContact}
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-blue transition-bounce"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth p-3 rounded-full hover:bg-card animate-float"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-smooth p-3 rounded-full hover:bg-card animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:kushagra@example.com"
              className="text-muted-foreground hover:text-primary transition-smooth p-3 rounded-full hover:bg-card animate-float"
              style={{ animationDelay: '1s' }}
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;