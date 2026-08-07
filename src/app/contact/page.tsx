"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    budget: "$5,000 - $10,000",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Organic Growth",
    "Technical Audit",
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "Organic Growth",
    "Technical Audit",
    "Keyword Strategy",
    "Link Authority",
    "Enterprise SEO",
    "Content Intelligence",
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="contact-page-wrapper">
      {/* ===== Studio Header ===== */}
      <header className="studio-header">
        <Link href="/" className="studio-logo" style={{ textDecoration: "none" }}>
          <svg className="studio-logo-icon" width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="black"/>
            <path d="M26 62C24 54 26 44 32 36C40 28 52 24 64 28C69 30 73 34 75 39C76 41 73 44 70 44C65 44 59 46 54 49C49 52 46 57 46 62C46 65 42 67 39 67C34 67 27 64 26 62Z" fill="white"/>
            <circle cx="56" cy="36" r="3.5" fill="black"/>
          </svg>
          zimplex
        </Link>

        <nav className="studio-nav">
          <Link href="/">work</Link>
          <Link href="/services">services</Link>
          <Link href="/about">about</Link>
          <Link href="/blog">blog</Link>
        </nav>

        <div className="studio-actions">
          <Link href="/contact" className="studio-contact" style={{ background: "#4338CA", color: "#ffffff" }}>
            contact us
          </Link>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="contact-hero-section">
        <div className="contact-badge">
          <span className="contact-badge-dot"></span>
          LET&apos;S BUILD SOMETHING GREAT
        </div>
        <h1 className="contact-title">
          Dominating Search Starts with a <span className="contact-title-accent">Conversation.</span>
        </h1>
        <p className="contact-subtitle">
          Ready to scale your organic visibility and outperform the competition? Tell us about your goals and our SEO specialists will get in touch within 24 hours.
        </p>
      </section>

      {/* ===== Main Contact Grid ===== */}
      <main className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Form or Success Card */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-card">
                <div className="contact-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.5rem" }}>Message Received!</h3>
                <p style={{ fontSize: "0.98rem", color: "#15803D", marginBottom: "1.5rem" }}>
                  Thank you, <strong>{formData.fullName || "friend"}</strong>. Our growth team has received your message and is already reviewing your site details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="contact-submit-btn"
                  style={{ maxWidth: "220px", margin: "0 auto", background: "#166534" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send Us a Project Inquiry</h2>
                  <p className="contact-form-desc">
                    Fill out the form below to get a custom SEO audit & strategic proposal tailored to your business.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-field-group">
                      <label className="contact-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        className="contact-input"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="contact-field-group">
                      <label className="contact-label">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className="contact-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field-group">
                      <label className="contact-label">Website URL</label>
                      <input
                        type="url"
                        placeholder="https://yourbrand.com"
                        className="contact-input"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                    <div className="contact-field-group">
                      <label className="contact-label">Monthly SEO Budget</label>
                      <select
                        className="contact-input"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="< $3,000">&lt; $3,000 / month</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000 / month</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000 / month</option>
                        <option value="$10,000+">$10,000+ / month (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Chips */}
                  <div className="contact-field-group">
                    <label className="service-chips-label">Services You&apos;re Interested In</label>
                    <div className="service-chips-grid">
                      {availableServices.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            className={`service-chip ${isSelected ? "active" : ""}`}
                            onClick={() => toggleService(service)}
                          >
                            {isSelected ? "✓ " : "+ "} {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="contact-field-group">
                    <label className="contact-label">Project Details / Current Challenges</label>
                    <textarea
                      required
                      placeholder="Tell us about your organic search targets, timeline, or current technical blockers..."
                      className="contact-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit-btn" disabled={submitting}>
                    {submitting ? (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin">
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                          <path d="M12 2 a10 10 0 0 1 10 10" />
                        </svg>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Request Custom Audit
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right Column: Office & Info Cards */}
          <div className="contact-sidebar">
            {/* Info Card */}
            <div className="contact-info-card">
              <h3 className="contact-info-title">Direct Contacts</h3>
              
              <div className="contact-channel-list">
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-channel-label">Strategy Team Email</div>
                    <a href="mailto:hello@zimplex.com" className="contact-channel-val">
                      hello@zimplex.com
                    </a>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-channel-label">Global Headquarters</div>
                    <div className="contact-channel-val" style={{ fontSize: "0.95rem" }}>
                      750 Lexington Ave, Floor 18<br />
                      New York, NY 10022
                    </div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-channel-label">Consultation Hours</div>
                    <div className="contact-channel-val" style={{ fontSize: "0.95rem" }}>
                      Mon - Fri: 8:00 AM - 7:00 PM EST
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-status-pill">
                <span className="status-dot-green"></span>
                SLA: Guaranteed 24-Hour Proposal Turnaround
              </div>
            </div>

            {/* FAQ Card */}
            <div className="contact-faq-card">
              <h4 className="contact-faq-title">What happens after you reach out?</h4>
              
              <div className="contact-faq-item">
                <div className="contact-faq-q">1. Initial Site & Tech Analysis</div>
                <div className="contact-faq-a">Our SEO engineers analyze your domain metrics, indexation status, and competitive footprint.</div>
              </div>

              <div className="contact-faq-item">
                <div className="contact-faq-q">2. 30-Minute Discovery Session</div>
                <div className="contact-faq-a">We align on your business targets, revenue channels, and keyword opportunities.</div>
              </div>

              <div className="contact-faq-item">
                <div className="contact-faq-q">3. Custom Growth Roadmap</div>
                <div className="contact-faq-a">You receive a clear, actionable organic search roadmap built for long-term ROI.</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer-section" style={{ width: "100%" }}>
        <div className="footer-container">
          {/* Top Row: Links & Email */}
          <div className="footer-top-row">
            <div className="footer-nav-links">
              <Link href="/">About</Link>
              <Link href="/">Why Us</Link>
              <Link href="/">Platform</Link>
              <Link href="/">Pricing</Link>
              <Link href="/contact">Contacts</Link>
            </div>
            <a href="mailto:hello@zimplex.com" className="footer-email">
              hello@zimplex.com
            </a>
          </div>

          <div className="footer-divider"></div>

          {/* Middle Row: Addresses & Socials */}
          <div className="footer-middle-row">
            <div className="footer-addresses">
              <div className="footer-address">
                <h4>Warrensville Heights</h4>
                <p>14418 Vineyard Drive, NC 44128</p>
              </div>
            </div>
            
            <div className="footer-socials">
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>

          {/* Bottom Row: Logo & Copyright Bar */}
          <div className="footer-bottom-row">
            <div className="footer-logo">
              Zimplex SEO<sup>®</sup>
            </div>
          </div>

          <div className="footer-legal-bar">
            <div className="footer-copyright">
              © 2026 Zimplex Global Pvt Ltd. All rights reserved.
            </div>
            
            <div className="footer-policies">
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/license-agreement">License agreement</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
