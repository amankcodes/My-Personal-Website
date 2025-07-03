import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataEncoded = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formDataEncoded.append(key, value);
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `form-name=contact&${formDataEncoded.toString()}`,
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'amankr1705@gmail.com', href: 'mailto:amankr1705@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8252363485', href: 'tel:+91 8252363485' }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/dev-aman-kr17/', color: 'hover:text-blue-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/BackendbyAman', color: 'hover:text-gray-400' },
    { icon: Code, label: 'HackerRank', href: 'https://www.hackerrank.com/profile/amankr17', color: 'hover:text-green-500' },
    { icon: Trophy, label: 'LeetCode', href: 'https://leetcode.com/u/amankr_2005/', color: 'hover:text-yellow-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
          Let's Connect!
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* 🧩 Netlify Hidden Form to Detect */}
          <form name="contact" netlify hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message" />
          </form>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="bg-gradient-to-r from-orange-500 to-teal-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{contact.label}</p>
                        <p className="text-white font-semibold">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Connect Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 group ${social.color}`}
                    >
                      <IconComponent className="mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <span className="font-semibold">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

