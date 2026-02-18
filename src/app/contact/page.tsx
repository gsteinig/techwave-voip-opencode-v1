"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="font-body bg-background text-text-primary">
        <main className="pt-16">
          <section className="py-24">
            <div className="max-w-[600px] mx-auto px-6 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="material-symbols-outlined text-4xl">check</span>
              </div>
              <h1 className="font-heading text-[34px] font-bold text-text-primary mb-4">
                We got it!
              </h1>
              <p className="text-lg text-text-primary/60 mb-8">
                Thanks for sending your bill. We'll review it and get back to you within 24 hours with a savings estimate.
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-[5px] bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-all"
              >
                Back to Home
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="font-body bg-background text-text-primary">
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-bg-light">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-heading text-[34px] font-bold tracking-tight text-text-primary sm:text-5xl">
              Send us your bill. We'll show you what you could save.
            </h1>
            <p className="font-body mx-auto mt-6 max-w-2xl text-xl text-text-primary/60">
              Upload your current phone bill and we'll provide a Same-Day Savings Estimate. 
              No pressure, no commitment—just data.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="border-2 border-dashed border-black/10 rounded-[5px] p-8 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="hidden"
                  id="bill-upload"
                />
                <label htmlFor="bill-upload" className="cursor-pointer">
                  <span className="material-symbols-outlined text-4xl text-text-primary/40 mb-4 block mx-auto">
                    upload_file
                  </span>
                  <p className="font-medium text-text-primary mb-2">
                    {file ? file.name : "Upload your phone bill (PDF, JPG, PNG)"}
                  </p>
                  <p className="text-sm text-text-primary/50">
                    Click to browse or drag and drop
                  </p>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-[5px] border border-black/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-[5px] border border-black/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-[5px] border border-black/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-[5px] border border-black/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-[5px] border border-black/10 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your current phone system or any specific questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-[5px] bg-accent px-10 py-4 text-lg font-bold text-white transition-all hover:bg-accent/90 hover:shadow-xl active:scale-95"
              >
                Get My Free Savings Estimate
              </button>

              <p className="text-sm text-text-primary/50">
                By submitting, you agree to our privacy policy. We'll review your bill and get back to you within 24 hours.
              </p>
            </form>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="py-16 bg-bg-light">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block mx-auto">
                  phone
                </span>
                <h3 className="font-heading font-bold text-text-primary mb-2">Phone</h3>
                <a href="tel:+17273141215" className="text-text-primary/60 hover:text-primary">(727) 314-1215</a>
              </div>
              <div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block mx-auto">
                  email
                </span>
                <h3 className="font-heading font-bold text-text-primary mb-2">Email</h3>
                <p className="text-text-primary/60">hello@techwavevoip.com</p>
              </div>
              <div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block mx-auto">
                  schedule
                </span>
                <h3 className="font-heading font-bold text-text-primary mb-2">Hours</h3>
                <p className="text-text-primary/60">Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
