import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
        { name: 'JavaScript', level: 90, icon: '⚡' },
        { name: 'React', level: 88, icon: '⚛️' },
        { name: 'TypeScript', level: 85, icon: '📘' }
      ]
    },
    {
      title: 'Backend Development', 
      skills: [
        { name: 'Node.js', level: 82, icon: '🟢' },
        { name: 'Python', level: 78, icon: '🐍' },
        { name: 'C++', level: 85, icon: '⚙️' },
        { name: 'MongoDB', level: 80, icon: '🍃' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, icon: '📋' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Figma', level: 82, icon: '🎨' }
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Analytics Certified',
    'Meta Frontend Developer',
    'MongoDB University'
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass p-6 hover:shadow-glow transition-smooth"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                      style={{
                        '--progress-foreground': categoryIndex === 0 
                          ? 'hsl(var(--primary))' 
                          : categoryIndex === 1 
                          ? 'hsl(var(--secondary))' 
                          : 'hsl(var(--accent))'
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {['HTML', 'CSS', 'JavaScript', 'C++'].map((skill, index) => (
            <Card 
              key={skill} 
              className="glass p-8 text-center hover:shadow-neon transition-bounce group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">
                {skill === 'HTML' && '🌐'}
                {skill === 'CSS' && '🎨'}
                {skill === 'JavaScript' && '⚡'}
                {skill === 'C++' && '⚙️'}
              </div>
              <h4 className="font-semibold text-lg group-hover:text-primary transition-smooth">
                {skill}
              </h4>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass p-4 rounded-lg hover:bg-primary/10 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'GraphQL', 'Machine Learning', 'Web3'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium hover:bg-secondary/30 transition-smooth animate-pulse"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;