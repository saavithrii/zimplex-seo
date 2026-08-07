import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Zimplex SEO Studio",
  description: "Learn how Zimplex SEO collects, protects, and handles your data and domain analytics.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page-wrapper">
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
          <Link href="/services">services</Link>
          <Link href="/about">about</Link>
          <Link href="/blog">blog</Link>
        </nav>

        <div className="studio-actions">
          <Link href="/contact" className="studio-contact">
            contact us
          </Link>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="legal-hero">
        <div className="legal-meta-badge">
          <span>Effective Date: August 4, 2026</span>
        </div>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">
          At Zimplex SEO Studio, we take transparency and user privacy seriously. This document details how we collect, store, and process client information and analytics.
        </p>
      </section>

      {/* ===== Main Content Area ===== */}
      <div className="legal-container">
        <div className="legal-layout">
          {/* Sidebar TOC */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar-title">Contents</div>
            <nav className="legal-sidebar-nav">
              <a href="#overview" className="legal-sidebar-link">1. Overview & Scope</a>
              <a href="#data-collected" className="legal-sidebar-link">2. Data We Collect</a>
              <a href="#search-analytics" className="legal-sidebar-link">3. Search & SEO Metrics</a>
              <a href="#data-use" className="legal-sidebar-link">4. How We Use Data</a>
              <a href="#cookies" className="legal-sidebar-link">5. Cookies & Tracking</a>
              <a href="#security" className="legal-sidebar-link">6. Data Security</a>
              <a href="#your-rights" className="legal-sidebar-link">7. Your Rights</a>
              <a href="#contact" className="legal-sidebar-link">8. Contact Us</a>
            </nav>
          </aside>

          {/* Legal Article Content */}
          <main className="legal-content">
            <section id="overview" className="legal-section">
              <h2 className="legal-section-h2">1. Overview & Scope</h2>
              <p>
                Zimplex SEO (&quot;Zimplex&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides enterprise SEO optimization, organic growth strategies, and digital advisory services. This Privacy Policy governs all visitors, clients, and partners interacting with our platform, website (zimplex.com), and consulting tools.
              </p>
              <div className="legal-callout">
                <strong>Key Takeaway:</strong> We never sell your personal data or domain strategy insights to third-party advertisers. All audited data remains strictly confidential under enterprise NDA standards.
              </div>
            </section>

            <section id="data-collected" className="legal-section">
              <h2 className="legal-section-h2">2. Data We Collect</h2>
              <p>We collect information to deliver tailored SEO proposals and high-impact strategy services:</p>
              <ul>
                <li><strong>Account & Contact Info:</strong> Full name, work email address, telephone number, and company name provided via our contact or consultation forms.</li>
                <li><strong>Domain & Technical Data:</strong> Website URLs, target domain properties, Search Console access permissions (when explicitly granted), and technical audit logs.</li>
                <li><strong>Usage & Device Metrics:</strong> IP address, browser type, referral URLs, operating system, and pages visited during your session.</li>
              </ul>
            </section>

            <section id="search-analytics" className="legal-section">
              <h2 className="legal-section-h2">3. Search & SEO Metrics Handling</h2>
              <p>
                To perform keyword tracking, backlink audits, and technical crawls, Zimplex utilizes enterprise APIs (e.g., Google Search Console, Ahrefs, SEMrush). Any credential or API token shared with us is encrypted end-to-end using AES-256 standards and stored in isolated client enclaves.
              </p>
            </section>

            <section id="data-use" className="legal-section">
              <h2 className="legal-section-h2">4. How We Use Information</h2>
              <p>We use collected data solely for legitimate business purposes:</p>
              <ul>
                <li>Generating custom organic visibility reports and technical SEO roadmaps.</li>
                <li>Communicating strategy proposals, monthly growth KPIs, and campaign milestones.</li>
                <li>Improving site performance, page load velocity, and user experience.</li>
                <li>Complying with legal obligations and enterprise security benchmarks.</li>
              </ul>
            </section>

            <section id="cookies" className="legal-section">
              <h2 className="legal-section-h2">5. Cookies & Tracking Technologies</h2>
              <p>
                Zimplex uses essential first-party cookies to optimize navigation and remember user preferences. We employ privacy-focused analytics tools to measure anonymous aggregated page traffic without cross-site behavioral tracking.
              </p>
            </section>

            <section id="security" className="legal-section">
              <h2 className="legal-section-h2">6. Data Security & Storage</h2>
              <p>
                We enforce multi-factor authentication, encrypted backups, and restricted access protocols across all internal repositories. Access to client search data is strictly scoped on a need-to-know basis for assigned account strategists.
              </p>
            </section>

            <section id="your-rights" className="legal-section">
              <h2 className="legal-section-h2">7. Your Rights & Control</h2>
              <p>
                Depending on your jurisdiction (GDPR, CCPA/CPRA), you possess the right to access, rectify, port, or request complete deletion of your personal and domain data. You may revoke API integration access at any time directly through your Google Search Console or platform settings.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2 className="legal-section-h2">8. Contact Data Protection Officer</h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise your privacy rights, please contact our Data Officer:
              </p>
              <div className="legal-callout">
                <strong>Data Protection Office:</strong> privacy@zimplex.com<br />
                <strong>Address:</strong> Zimplex SEO Studio, 750 Lexington Ave, New York, NY 10022
              </div>
            </section>
          </main>
        </div>
      </div>

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
              <Link href="/privacy-policy" style={{ color: "#ffffff", fontWeight: 600 }}>Privacy policy</Link>
              <Link href="/license-agreement">License agreement</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
