'use client';

import { contentConfig } from '@/config/content';
import { useState } from 'react';

export default function Contact() {
  const { contact, company } = contentConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    // You could add a success message here
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-12 pb-20 paper-texture relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blueprint-blue mb-4 structural-accent">{contact.title}</h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto font-mono">{contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-blueprint-blue mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center bg-cream-darker p-4 rounded-lg blueprint-border">
                <div className="text-3xl text-blueprint-blue mr-4">📞</div>
                <div>
                  <h4 className="text-lg font-semibold text-blueprint-blue">Phone</h4>
                  <p className="text-charcoal font-mono">{company.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center bg-cream-darker p-4 rounded-lg blueprint-border">
                <div className="text-3xl text-blueprint-blue mr-4">✉️</div>
                <div>
                  <h4 className="text-lg font-semibold text-blueprint-blue">Email</h4>
                  <p className="text-charcoal font-mono">{company.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start bg-cream-darker p-4 rounded-lg blueprint-border">
                <div className="text-3xl text-blueprint-blue mr-4 mt-1">📍</div>
                <div>
                  <h4 className="text-lg font-semibold text-blueprint-blue">Address</h4>
                  <p className="text-charcoal font-mono">{company.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream-paper p-6 rounded-lg blueprint-border">
            <h3 className="text-xl font-semibold text-blueprint-blue mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blueprint-blue mb-2">
                  {contact.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-blueprint-blue rounded-md focus:outline-none focus:ring-2 focus:ring-blueprint-light bg-cream-paper text-charcoal font-mono"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blueprint-blue mb-2">
                  {contact.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-blueprint-blue rounded-md focus:outline-none focus:ring-2 focus:ring-blueprint-light bg-cream-paper text-charcoal font-mono"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blueprint-blue mb-2">
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border-2 border-blueprint-blue rounded-md focus:outline-none focus:ring-2 focus:ring-blueprint-light bg-cream-paper text-charcoal font-mono"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blueprint-blue text-cream-paper py-3 px-4 rounded-md hover:bg-blueprint-light transition-colors blueprint-border font-medium"
              >
                {contact.form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}