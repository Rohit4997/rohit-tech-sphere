import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Heart,
  Coffee,
  Code,
  Music,
  Target,
  Gamepad2,
  Mountain
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohitrkd4997@gmail.com",
      href: "mailto:rohitrkd4997@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7425004997",
      href: "tel:+917425004997"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@Rohit4997",
      href: "https://github.com/Rohit4997",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "rohit-4997",
      href: "https://www.linkedin.com/in/rohit-4997/",
      color: "hover:text-blue-400"
    }
  ];

  const interests = [
    { icon: Code, text: "Coding", color: "text-blue-400" },
    { icon: Coffee, text: "Coffee", color: "text-yellow-600" },
    { icon: Music, text: "Lo-fi Music", color: "text-purple-400" },
    { icon: Gamepad2, text: "Gaming", color: "text-green-400" },
    { icon: Mountain, text: "Running", color: "text-orange-400" },
    { icon: Target, text: "AI/ML", color: "text-red-400" }
  ];

  const philosophy = {
    primary: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
    personal: "The best code is no code at all. The second best is elegant, readable code.",
    personalAuthor: "Me"
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-electric-blue/15 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 right-1/3 text-6xl opacity-5 animate-rotate-slow text-neon-green">📧</div>
        <div className="absolute bottom-1/3 left-1/4 text-5xl opacity-5 animate-bounce-gentle text-neon-orange">💬</div>
        <div className="absolute top-2/3 right-1/5 text-4xl opacity-5 animate-scale-pulse text-neon-purple">🤝</div>
        <div className="absolute top-1/6 left-1/3 text-3xl opacity-5 animate-float text-electric-blue">✨</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            🤝 Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ✨ I'm always excited to discuss new opportunities, collaborate on projects, or just chat about tech!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="glass-card p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-neon-green" />
              📧 Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-muted/20 border-muted focus:border-primary transition-smooth"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-muted/20 border-muted focus:border-primary transition-smooth"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-muted/20 border-muted focus:border-primary transition-smooth"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  className="bg-muted/20 border-muted focus:border-primary transition-smooth resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full gradient-bg hover:opacity-90 transition-smooth animate-glow-pulse">
                <Send className="w-5 h-5 mr-2" />
                🚀 Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Information */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">📱 Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-smooth group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">🌐 Follow Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-smooth group ${social.color}`}
                  >
                    <div className="p-3 rounded-full bg-muted/20 group-hover:bg-muted/30 transition-smooth">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{social.label}</div>
                      <div className="text-sm text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Fun Zone */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-neon-pink animate-scale-pulse" />
                💖 What I Love
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-smooth"
                  >
                    <interest.icon className={`w-4 h-4 ${interest.color}`} />
                    <span className="text-sm font-medium">{interest.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Philosophy Section */}
        <Card className="glass-card p-8 max-w-4xl mx-auto text-center animate-slide-up">
          <h3 className="text-2xl font-bold mb-8">💭 My Philosophy</h3>
          
          <div className="space-y-6">
            <blockquote className="text-lg italic text-muted-foreground">
              "{philosophy.primary}"
              <footer className="text-sm mt-2 text-primary">— {philosophy.author}</footer>
            </blockquote>
            
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            
            <blockquote className="text-lg italic text-muted-foreground">
              "{philosophy.personal}"
              <footer className="text-sm mt-2 text-accent">— {philosophy.personalAuthor}</footer>
            </blockquote>
          </div>
        </Card>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            🚀 Ready to build something amazing together?
          </p>
          <Button size="lg" className="gradient-bg hover:opacity-90 transition-smooth animate-glow-pulse">
            <Mail className="w-5 h-5 mr-2" />
            💬 Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;