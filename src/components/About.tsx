import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that follows best practices'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges and finding innovative solutions'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with designers, developers, and stakeholders'
    },
    {
      icon: Coffee,
      title: 'Always Learning',
      description: 'Staying updated with the latest technologies and industry trends'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate web developer with a strong foundation in modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated full-stack web developer with over 3 years of experience 
              creating digital solutions that make a difference. My journey started with 
              a curiosity about how websites work, and it has evolved into a passion for 
              building exceptional user experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. When I'm not 
              coding, you can find me exploring new frameworks, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  User-first design thinking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Mobile-responsive development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Continuous learning and improvement
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="glass p-6 hover:shadow-glow transition-smooth group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-smooth">
                    <Icon size={40} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;