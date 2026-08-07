import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License Agreement — Zimplex SEO Studio",
  description: "Terms of service, licensing terms, and SLA benchmarks for Zimplex SEO Studio deliverables.",
};

export default function LicenseAgreementPage() {
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
        <h1 className="legal-title">License Agreement</h1>
        <p className="legal-subtitle">
          Terms of service, client licensing rights, and operational service level agreements for Zimplex SEO software tools, strategy blueprints, and audit reports.
        </p>
      </section>

      {/* ===== Main Content Area ===== */}
      <div className="legal-container">
        <div className="legal-layout">
          {/* Sidebar TOC */}
          <aside className="legal-sidebar">
            <div className="legal-sidebar-title">Contents</div>
            <nav className="legal-sidebar-nav">
              <a href="#grant-license" className="legal-sidebar-link">1. Grant of License</a>
              <a href="#deliverables" className="legal-sidebar-link">2. IP & Deliverables</a>
              <a href="#restrictions" className="legal-sidebar-link">3. Usage Restrictions</a>
              <a href="#client-duties" className="legal-sidebar-link">4. Client Obligations</a>
              <a href="#sla" className="legal-sidebar-link">5. Service Guarantees</a>
              <a href="#liability" className="legal-sidebar-link">6. Limitation of Liability</a>
              <a href="#termination" className="legal-sidebar-link">7. Term & Termination</a>
              <a href="#governing-law" className="legal-sidebar-link">8. Governing Law</a>
            </nav>
          </aside>

          {/* Legal Article Content */}
          <main className="legal-content">
            <section id="grant-license" className="legal-section">
              <h2 className="legal-section-h2">1. Grant of License</h2>
              <p>
                Subject to the terms and conditions of this Agreement, Zimplex SEO grants the Client a non-exclusive, non-transferable, worldwide license to access, view, and utilize proprietary audit reports, software tools, dashboard metrics, and custom organic search strategies created during the active service period.
              </p>
              <div className="legal-callout">
                <strong>Commercial Ownership:</strong> All final custom client strategy documents, technical fix code, and content deliverables produced specifically for your domain become 100% your property upon full invoice payment.
              </div>
            </section>

            <section id="deliverables" className="legal-section">
              <h2 className="legal-section-h2">2. Intellectual Property Rights</h2>
              <p>
                Zimplex retains sole ownership and IP rights over underlying analytics software, proprietary SEO scraping tools, custom crawling scripts, internal algorithms, and standardized frameworks (&quot;Zimplex Core IP&quot;).
              </p>
              <ul>
                <li><strong>Client Materials:</strong> Clients retain full ownership of existing website content, logos, trademarks, and search analytics data.</li>
                <li><strong>Custom Reports:</strong> Audit reports generated specifically for the client remain perpetual property of the client.</li>
              </ul>
            </section>

            <section id="restrictions" className="legal-section">
              <h2 className="legal-section-h2">3. Usage Restrictions</h2>
              <p>Under this License, the Client agrees not to:</p>
              <ul>
                <li>Reverse engineer, decompile, or attempt to extract source code from proprietary Zimplex dashboard software or scraping scripts.</li>
                <li>Resell, sublicense, or white-label Zimplex core strategy templates to unaffiliated third-party agencies without express written authorization.</li>
                <li>Use automated bots or crawlers to overload Zimplex client portal infrastructure.</li>
              </ul>
            </section>

            <section id="client-duties" className="legal-section">
              <h2 className="legal-section-h2">4. Client Responsibilities</h2>
              <p>
                Successful organic search execution requires active collaboration. Clients agree to provide timely access to necessary CMS tools, DNS configurations, or Search Console properties required for technical execution.
              </p>
            </section>

            <section id="sla" className="legal-section">
              <h2 className="legal-section-h2">5. Service Level Agreement (SLA)</h2>
              <p>
                Zimplex guarantees 99.9% uptime for client metric dashboards and commits to a 24-hour SLA response window for technical emergency audit requests during business days.
              </p>
            </section>

            <section id="liability" className="legal-section">
              <h2 className="legal-section-h2">6. Limitation of Liability</h2>
              <p>
                Search engine algorithms (such as Google core updates) are subject to independent third-party changes outside the control of Zimplex. In no event shall Zimplex be liable for indirect, punitive, or consequential damages exceeding the total retainer fees paid by the client in the 3 months preceding any claim.
              </p>
            </section>

            <section id="termination" className="legal-section">
              <h2 className="legal-section-h2">7. Term & Termination</h2>
              <p>
                Either party may terminate monthly retainer agreements upon 30 days written notice. Upon termination, all client data and audit archives will be exported and transferred securely to the client.
              </p>
            </section>

            <section id="governing-law" className="legal-section">
              <h2 className="legal-section-h2">8. Governing Law & Dispute Resolution</h2>
              <p>
                This Agreement shall be governed by and construed in accordance with the laws of the State of New York, USA, without regard to its conflict of law principles.
              </p>
              <div className="legal-callout">
                <strong>Legal Inquiries:</strong> legal@zimplex.com<br />
                <strong>Address:</strong> Zimplex SEO Studio, Legal Department, 750 Lexington Ave, New York, NY 10022
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
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/license-agreement" style={{ color: "#ffffff", fontWeight: 600 }}>License agreement</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
