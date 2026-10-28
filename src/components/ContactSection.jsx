import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight,
  Loader2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Centralized access key placeholder for Web3Forms
// Replace "YOUR_ACCESS_KEY" with your free key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setFormStatus('loading');
    setStatusMessage('');

    // If key is unconfigured, provide graceful simulation & mailto fallback
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY' || !WEB3FORMS_ACCESS_KEY) {
      setTimeout(() => {
        setFormStatus('success');
        setStatusMessage(
          'Message received! (Demo mode: To receive messages directly into your inbox, configure your free key in src/components/ContactSection.jsx)'
        );
        // Also prepare mailto link
        const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 700);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Contact from Portfolio: ${formData.name}`,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setStatusMessage('Your message has been sent successfully. I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      setFormStatus('error');
      setStatusMessage(
        'Failed to deliver message via Web3Forms. Launching your email client as fallback...'
      );
      // Graceful fallback
      const mailtoSubject = encodeURIComponent(formData.subject || `Contact from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 border-b border-black-border relative bg-black-deep overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Headline & Direct Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-ultra font-mono text-cream-muted">
                  SECTION 05 // CONNECT
                </span>
                <span className="h-px w-8 bg-black-border" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-cream mb-6 leading-none">
                Have A Project In Mind?
              </h2>

              <p className="text-base text-cream-muted font-light leading-relaxed mb-10">
                I'm open to opportunities, freelance projects, collaborations, and interesting digital products. Let's discuss building something structured and useful.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 mb-10">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center justify-between p-4 bg-black-secondary border border-black-border hover:border-cream/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cream" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-cream-secondary font-mono">
                        Direct Email
                      </span>
                      <span className="text-sm font-medium text-cream">{personalInfo.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cream-secondary group-hover:text-cream transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-black-secondary border border-black-border hover:border-cream/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-cream" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-cream-secondary font-mono">
                        Code Repository
                      </span>
                      <span className="text-sm font-medium text-cream">GitHub Profile</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cream-secondary group-hover:text-cream transition-colors" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-black-secondary border border-black-border hover:border-cream/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-cream" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-cream-secondary font-mono">
                        Professional Network
                      </span>
                      <span className="text-sm font-medium text-cream">LinkedIn Profile</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cream-secondary group-hover:text-cream transition-colors" />
                </a>
              </div>
            </div>

            {/* Location Note */}
            <div className="flex items-center gap-2 text-xs text-cream-secondary pt-4 border-t border-black-border/60">
              <MapPin className="w-3.5 h-3.5 text-cream-muted" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-black-secondary border border-black-border p-8 md:p-10">
              <div className="pb-6 mb-8 border-b border-black-border flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-cream">
                    Send A Direct Message
                  </h3>
                  <p className="text-xs text-cream-secondary mt-1">
                    Fill out the form below or reach out via email.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cream-muted border border-black-border px-2 py-1">
                  SECURE FORM
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider text-cream-muted font-mono"
                    >
                      Your Name <span className="text-cream">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full bg-black-surface border border-black-border px-4 py-3 text-cream text-sm focus:outline-none focus:border-cream transition-colors placeholder:text-cream-dark"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-wider text-cream-muted font-mono"
                    >
                      Email Address <span className="text-cream">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      required
                      className="w-full bg-black-surface border border-black-border px-4 py-3 text-cream text-sm focus:outline-none focus:border-cream transition-colors placeholder:text-cream-dark"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs uppercase tracking-wider text-cream-muted font-mono"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full bg-black-surface border border-black-border px-4 py-3 text-cream text-sm focus:outline-none focus:border-cream transition-colors placeholder:text-cream-dark"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider text-cream-muted font-mono"
                  >
                    Message <span className="text-cream">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    required
                    className="w-full bg-black-surface border border-black-border px-4 py-3 text-cream text-sm focus:outline-none focus:border-cream transition-colors placeholder:text-cream-dark resize-none"
                  />
                </div>

                {/* Feedback message banner */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full group flex items-center justify-center gap-3 py-4 bg-cream text-black-deep hover:bg-cream-light font-semibold text-xs uppercase tracking-widest transition-all duration-200 disabled:opacity-50"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
