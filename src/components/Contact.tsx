import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative tech solutions? Let's discuss how we can create impact together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:freddiekarimah@gmail.com" className="flex items-center p-4 glass-card rounded-lg hover-scale transition-all duration-300 group">
                  <Mail className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300 mr-4" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground font-medium">freddiekarimah@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+254792313604" className="flex items-center p-4 glass-card rounded-lg hover-scale transition-all duration-300 group">
                  <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300 mr-4" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-foreground font-medium">+254 792 313 604</div>
                  </div>
                </a>
                <div className="flex items-center p-4 glass-card rounded-lg">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground font-medium">Nairobi, Kenya 🇰🇪</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-foreground font-medium">Available for collaboration</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Actively seeking opportunities in tech-for-good projects and leadership roles.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-secondary/20 border-secondary focus:border-primary"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-secondary/20 border-secondary focus:border-primary"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-secondary/20 border-secondary focus:border-primary"
              />
              <Textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-secondary/20 border-secondary focus:border-primary min-h-[120px]"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-3 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;