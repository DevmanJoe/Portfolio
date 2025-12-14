'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle, Linkedin, Github, Twitter,
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('x50ne3HakHZhRliVD'); // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Joseph Abu',
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_g5x45en', // Replace with your EmailJS service ID
        'template_atdln7f', // Replace with your EmailJS template ID
        templateParams
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-5 md:space-y-6 mb-8">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'josephabu808@gmail.com',
                    href: 'mailto:josephabu808@gmail.com'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+234 701 277 5182',
                    href: 'tel:+2347012775182'
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    content: 'Kaduna, Nigeria',
                    href: '#'
                  }
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect with me</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: Github, href: 'https://github.com/devmanjoe', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/joseph-abu-917671325/', label: 'LinkedIn' },
                    { icon: Twitter, href: 'https://x.com/devmanjoe', label: 'Twitter' }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 md:h-6 md:w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 md:py-12"
                >
                  <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for your message. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {error && (
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm md:text-base"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm md:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm md:text-base"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none text-sm md:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition text-sm md:text-base ${
                      isSubmitting
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5 mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}