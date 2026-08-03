"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [activeTier, setActiveTier] = useState<"growth" | "scale" | "enterprise">("scale");

  const coreServices = [
    {
      id: "technical-seo",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Technical & Core Web Vitals SEO",
      desc: "Eliminate crawl budget bottlenecks, indexation leaks, and site speed impairments with technical audit engineering.",
      deliverables: [
        "JS & SSR Crawlability Diagnostics",
        "Core Web Vitals & LCP/CLS Optimization",
        "Schema & Structured Data Architecture",
        "Log File Analysis & Bot Budgeting",
      ],
    },
    {
      id: "organic-growth",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Organic Keyword & Search Architecture",
      desc: "Identify high-intent keyword gaps, content silos, and semantic topic clusters that drive sustainable commercial revenue.",
      deliverables: [
        "Intent-Driven Keyword Clustering",
        "Competitor Market Gap Analysis",
        "Information Architecture & Internal Links",
        "SERP Feature & Snippet Capture",
      ],
    },
    {
      id: "content-intelligence",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Content Intelligence & E-E-A-T Optimization",
      desc: "Transform standard copy into authoritative, expert-verified content assets designed for maximum search engine relevance.",
      deliverables: [
        "E-E-A-T Quality Guidelines Alignment",
        "Semantic Relevance & NLP Scoring",
        "Content Decay & Refresh Frameworks",
        "Editorial Briefs & Conversion Copy",
      ],
    },
    {
      id: "link-authority",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: "Digital PR & Link Authority Building",
      desc: "Earn contextual, high-DR domain references through strategic PR outreach, original research data, and industry placement.",
      deliverables: [
        "Data-Driven Digital PR Campaigns",
        "High-DR Editorial Link Acquisition",
        "Toxic Backlink Audit & Disavow",
        "Brand Entity & Knowledge Graph Building",
      ],
    },
    {
      id: "global-expansion",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Global & Multi-Region Hreflang SEO",
      desc: "Scale into international markets seamlessly with localized search strategies, hreflang mapping, and multi-currency SEO.",
      deliverables: [
        "Hreflang Implementation & Validation",
        "Multi-Regional Search Targeting",
        "Local Search Engine Customization",
        "Geo-Targeted Content Localization",
      ],
    },
    {
      id: "analytics-roi",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Analytics, Attribution & Rank Tracking",
      desc: "Measure exact organic search ROI with custom Looker Studio dashboards, revenue attribution, and real-time rank tracking.",
      deliverables: [
        "Custom Looker & GA4 Executive Dashboards",
        "Organic Revenue & Conversion Attribution",
        "Daily Keyword Rank Tracking & Alerts",
        "Algorithmic Change Impact Reports",
      ],
    },
  ];

  return (
    <div className="services-page-wrapper">
      {/* ===== Header ===== */}
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
          <Link href="/services" style={{ fontWeight: 700, color: "#4338CA" }}>services</Link>
          <Link href="/">about</Link>
          <Link href="/blog">blog</Link>
        </nav>

        <div className="studio-actions">
          <Link href="/contact" className="studio-contact">contact us</Link>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="services-hero">
        <div className="services-badge">
          <span className="contact-badge-dot"></span>
          ENTERPRISE SEARCH & ORGANIC GROWTH
        </div>
        <h1 className="services-title">
          SEO Services Built for <span className="contact-title-accent">Unfair Market Share.</span>
        </h1>
        <p className="services-subtitle">
          We combine technical engineering, semantic AI models, and high-authority digital PR to dominate search engines and convert organic traffic into recurring revenue.
        </p>
      </section>

      {/* ===== Main Services Showcase ===== */}
      <main className="services-container">
        <div className="services-grid">
          {coreServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="service-deliverables-list">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="service-deliverable-item">
                      <span className="service-deliverable-check">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="service-card-action">
                Consult With an SEO Engineer →
              </Link>
            </div>
          ))}
        </div>

        {/* ===== Tier Comparison Section ===== */}
        <section className="services-tier-section">
          <div className="services-tier-header">
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0F172A", marginBottom: "0.75rem" }}>
              Engagement Models & Packages
            </h2>
            <p style={{ fontSize: "1rem", color: "#64748B" }}>
              Select the tier that aligns with your organization's organic search ambitions.
            </p>
          </div>

          <div className="tier-tabs">
            <button
              className={`tier-tab ${activeTier === "growth" ? "active" : ""}`}
              onClick={() => setActiveTier("growth")}
            >
              Growth Tier
            </button>
            <button
              className={`tier-tab ${activeTier === "scale" ? "active" : ""}`}
              onClick={() => setActiveTier("scale")}
            >
              Scale Tier (Popular)
            </button>
            <button
              className={`tier-tab ${activeTier === "enterprise" ? "active" : ""}`}
              onClick={() => setActiveTier("enterprise")}
            >
              Enterprise Tier
            </button>
          </div>

          <div className="tier-cards-grid">
            {/* Growth Tier */}
            <div className={`tier-card ${activeTier === "growth" ? "featured" : ""}`}>
              <div>
                <h3 className="tier-name">Growth SEO</h3>
                <p className="tier-desc">Ideal for high-growth startups targeting key category keywords.</p>
                <div className="tier-features-list">
                  <div className="tier-feature-item">✓ Full Technical & Crawl Audit</div>
                  <div className="tier-feature-item">✓ Up to 50 Target Keywords</div>
                  <div className="tier-feature-item">✓ Monthly Content Optimization</div>
                  <div className="tier-feature-item">✓ Bi-Weekly Performance Calls</div>
                </div>
              </div>
              <Link href="/contact" className="tier-btn tier-btn-outline">
                Get Started
              </Link>
            </div>

            {/* Scale Tier */}
            <div className={`tier-card ${activeTier === "scale" ? "featured" : ""}`}>
              <div className="tier-featured-tag">Most Popular</div>
              <div>
                <h3 className="tier-name">Scale SEO</h3>
                <p className="tier-desc">Designed for scaling companies wanting category dominance.</p>
                <div className="tier-features-list">
                  <div className="tier-feature-item">✓ Everything in Growth</div>
                  <div className="tier-feature-item">✓ Up to 200 Target Keywords</div>
                  <div className="tier-feature-item">✓ High-DR Digital PR Backlinks</div>
                  <div className="tier-feature-item">✓ Dedicated Senior Strategist</div>
                  <div className="tier-feature-item">✓ Custom Looker Studio Dashboard</div>
                </div>
              </div>
              <Link href="/contact" className="tier-btn tier-btn-filled">
                Request Scale Proposal
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className={`tier-card ${activeTier === "enterprise" ? "featured" : ""}`}>
              <div>
                <h3 className="tier-name">Enterprise SEO</h3>
                <p className="tier-desc">Custom organic growth engine for global brands & multi-domain orgs.</p>
                <div className="tier-features-list">
                  <div className="tier-feature-item">✓ Everything in Scale</div>
                  <div className="tier-feature-item">✓ Multi-Region & Hreflang SEO</div>
                  <div className="tier-feature-item">✓ 24/7 SLA Technical Hotline</div>
                  <div className="tier-feature-item">✓ Custom AI Semantic Engineering</div>
                  <div className="tier-feature-item">✓ Executive Board Reports</div>
                </div>
              </div>
              <Link href="/contact" className="tier-btn tier-btn-outline">
                Contact Enterprise Team
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Bottom CTA Banner ===== */}
        <section className="services-cta-banner">
          <h2 className="services-cta-title">Ready to Outrank the Competition?</h2>
          <p className="services-cta-subtitle">
            Get a comprehensive technical SEO audit and a custom 12-month organic search roadmap tailored to your domain.
          </p>
          <Link href="/contact" className="contact-submit-btn" style={{ maxWidth: "260px", margin: "0 auto" }}>
            Book Strategic Audit →
          </Link>
        </section>
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
              <Link href="/services">Pricing</Link>
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
