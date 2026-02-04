import React, { useState } from 'react';
import Button from './Button';

const SCRIPT_URL= "https://script.google.com/macros/s/AKfycbx2Pw-ZTKi6YoaESeaXuRsczN_8z43oRcI0Hr_04BBI3l1h6ZUObS8s3xwpMkSGU3IJPQ/exec"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form state after 3 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 animate-reveal">
      {formState === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-success-500/20 text-success-500 text-center">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {formState === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-error-500/20 text-error-500 text-center">
          Something went wrong. Please try again later.
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-navy-800 border border-navy-700 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          placeholder="Your Name"
          disabled={formState === 'submitting'}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-navy-800 border border-navy-700 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          placeholder="your.email@example.com"
          disabled={formState === 'submitting'}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 rounded-lg bg-navy-800 border border-navy-700 text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          placeholder="Your message here..."
          disabled={formState === 'submitting'}
        ></textarea>
      </div>
      
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;