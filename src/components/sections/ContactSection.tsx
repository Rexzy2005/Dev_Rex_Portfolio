import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Loader2, Download, Github, Linkedin, Twitter, MessageCircle, Loader } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Modal from '../ui/modal';
import Spinner from "../ui/Spinner";


export const ContactSection: React.FC = () => {
  const [isSending, setIsSending] = useState(false);

  const [ref, isVisible] = useScrollReveal(0.3);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // const [modal, setModal] = useState({
  //   isOpen: false,
  //   modalMessage: "",
  //   status: "Loading" as "Loading" | "success" | "error"
  // });
  // const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setLoading(true);
    // setStatus(null);
    // setLoading(true);
    // Handle form submission logic here
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyID = import.meta.env.VITE_EMAILJS_AUTOREPLY_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // send main email to me
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message

    }, publicKey)
      .then(() => {
        // send auto reply to my client
        return emailjs.send(serviceID, autoReplyID, {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
        }, publicKey);
      })
      .then(() => {
        // setModal({ 
        //   isOpen: true,
        //   modalMessage: "Message sent!",
        //   status: "success"
        //  });
        // setStatus("success");
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        // setModal({ 
        //   isOpen: true,
        //   modalMessage: "Failed to send message. Try again.",
        //   status: "error"
        //  });
        // setStatus("error");
        console.error("EmailJS Error:", err);

      })
    // .finally(() => setLoading(false));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pererattimothy025@email.com',
      href: 'mailto:pererattimothy025@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 8133153568',
      href: 'tel:+2348133153568'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Rexzy2005', label: 'GitHub', username: '@Rexzy_2005' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/pererat-timothy-b33a51375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', username: 'Pererat Timothy' },
    { icon: Twitter, href: 'https://x.com/Dev_Rexzy', label: 'Twitter', username: '@Dev_rexzy' },
    { icon: MessageCircle, href: 'https://wa.me/2348133153568', label: 'WhatsApp', username: 'Chat Now' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2">
            <span className=" font-medium text-[var(--color-accent)] text-3xl">Get In Touch</span>
          </div>

          <h2 className="text-4xl font-bold text-[var(--color-text-primary)]">
            Let's Work Together
          </h2>

          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects
            and opportunities for collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-left' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder='Enter your name'
                    onChange={handleInputChange}
                    className="dark:glass-subtle border-[var(--color-glass-border)]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className="dark:glass-subtle border-[var(--color-glass-border)]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="dark:glass-subtle border-[var(--color-glass-border)]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder='Enter your message...'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="dark:glass-subtle border-[var(--color-glass-border)] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)] hover:opacity-90 transition-opacity text-base"
              >
                {isSending ? (
                  <>
                    <Loader className='w-6 h-6 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-2" />
                    Send Message
                  </>

                )}

              </Button>

              {/* {status === "success" && (
                <p className="text-green-600 text-center mt-2">
                  ✅ Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-center mt-2">
                  ❌ Failed to send message. Try again.
                </p>
              )} */}
            </form>

            {/* modal */}
            {/* <Modal 
              isOpen={modal.isOpen}
              modalMessage={modal.modalMessage}
              status={modal.status as "Loading" | "success" | "error"}
              onClose={() => setModal({ ...modal, isOpen: false})}
            /> */}

          </div>

          {/* Contact Info & Resume */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : ''}`}>
            {/* Resume Download */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Download Resume
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Get a comprehensive overview of my experience, skills, and accomplishments.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-alt)] hover:opacity-90 transition-opacity text-base"
              >
                <Download className="w-6 h-6 mr-2" />
                <a href="/remue.pdf" download>Download PDF Resume</a>
              </Button>
            </div>

            {/* Contact Information */}
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg dark:glass-subtle border border-[var(--color-glass-border)] hover:bg-[var(--color-accent)]/10 transition-colors ${isVisible ? 'animate-fade-in' : ''
                      }`}
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <info.icon className="w-5 h-5 text-[var(--color-accent)]" />
                    <div>
                      <div className="text-sm text-[var(--color-text-secondary)]">{info.label}</div>
                      <div className="text-[var(--color-text-primary)]">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
          {/* Social Links */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg dark:glass-subtle border border-[var(--color-glass-border)] hover:bg-[var(--color-accent)]/10 transition-colors ${isVisible ? 'animate-fade-in' : ''
                    }`}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <social.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)]">{social.label}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`sm:flex sm:justify-between sm:items-center mt-16 pt-8 border-t border-[var(--color-border)] text-center ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '800ms' }}>
          <p className="text-[var(--color-text-secondary)]">
            © 2025 Pererat Timothy. Built with passion and modern web technologies.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] mt-5">
            <span className="text-[var(--color-accent)]">@Dev_rex</span>
          </p>
        </div>
      </div>
    </section>
  );
};