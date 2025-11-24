import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Got it!",
      description: "We'll be in touch soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-semibold mb-3 text-foreground">
                Contact Us
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Questions? Ideas? Just want to chat? Drop us a line and we'll get back to you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-medium mb-4 text-foreground">Ways to reach us</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-blue-600/20 rounded-md">
                        <IoIosMail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-muted-foreground mb-1">Email</p>
                        <a 
                          href="mailto:dentimap527@gmail.com" 
                          className="text-foreground hover:text-green-600 hover:underline text-base transition-colors"
                        >
                          dentimap527@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-blue-600/20 rounded-md">
                        <FaPhoneAlt className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-muted-foreground mb-1">Phone</p>
                        <a 
                          href="tel:+16052027777" 
                          className="text-foreground hover:text-green-600 hover:underline text-base transition-colors"
                        >
                          +1 605 202 7777
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-blue-600/20 rounded-md">
                        <IoLocation className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-muted-foreground mb-1">Location</p>
                        <p className="text-foreground text-base">
                          414 E Clark St<br />
                          Vermillion, SD 57069
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're thinking..."
                      required
                      rows={5}
                      className="resize-none text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base"
                  >
                    <IoIosSend className="mr-2 h-5 w-5" />
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
