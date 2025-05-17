import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card rounded-xl shadow-md p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:razine.bensari@gmail.com" className="text-primary hover:underline">
                    razine.bensari@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-foreground/70">Montreal, QC</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <i className="fas fa-clock text-primary"></i>
                </div>
                <div>
                  <p className="font-medium text-foreground">Availability</p>
                  <p className="text-foreground/70">Available for freelance projects, consultation in a part-time capacity</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-foreground mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/razine-bensari"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors" 
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-foreground/70"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/razine-bensari"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors" 
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-foreground/70"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl shadow-md p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-foreground font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
