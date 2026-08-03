"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Article {
  id: number;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "All",
    "Technical SEO",
    "Algorithm Updates",
    "AI & LLM Search",
    "Content Strategy",
    "Digital PR",
  ];

  const articles: Article[] = [
    {
      id: 1,
      category: "Technical SEO",
      readTime: "7 min read",
      title: "Optimizing JavaScript SSR & Crawl Budgets for Enterprise Next.js Apps",
      excerpt: "Learn how to configure dynamic rendering, server logs monitoring, and hydrations to ensure 100% indexation of dynamic pages.",
      date: "Aug 02, 2026",
    },
    {
      id: 2,
      category: "Algorithm Updates",
      readTime: "10 min read",
      title: "Decoding the Google Core Update: Defensive Strategies & Recovery Playbooks",
      excerpt: "Step-by-step audit framework to identify quality penalties, thin content flags, and link equity shifts after a search update.",
      date: "Jul 28, 2026",
    },
    {
      id: 3,
      category: "AI & LLM Search",
      readTime: "6 min read",
      title: "Generative Engine Optimization (GEO): Ranking inside Search GPT & Gemini",
      excerpt: "How to structure schema microdata, entity graph relations, and direct citation sources to secure visibility in AI answers.",
      date: "Jul 21, 2026",
    },
    {
      id: 4,
      category: "Content Strategy",
      readTime: "8 min read",
      title: "Building E-E-A-T Topical Authority Clusters That Dominate SERP Page 1",
      excerpt: "Why standalone keyword targeting fails in 2026, and how entity-based content architecture drives sustainable organic traffic growth.",
      date: "Jul 15, 2026",
    },
    {
      id: 5,
      category: "Digital PR",
      readTime: "5 min read",
      title: "The Data-Driven Digital PR Playbook: Securing Tier-1 Tech Editorial Links",
      excerpt: "How we turn proprietary domain metrics into viral industry reports that naturally earn high-DR backlinks from Forbes, TechCrunch, and Wired.",
      date: "Jul 09, 2026",
    },
    {
      id: 6,
      category: "Technical SEO",
      readTime: "9 min read",
      title: "Mastering International SEO: Hreflang Architecture & Multi-Region SLA",
      excerpt: "A technical deep-dive into resolving canonical conflicts, ccTLD routing, and geo-targeted sitemaps across enterprise domains.",
      date: "Jun 30, 2026",
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((art) => art.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="blog-page-wrapper">
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
          <Link href="/blog" style={{ fontWeight: 700, color: "#4338CA" }}>blog</Link>
        </nav>

        <div className="studio-actions">
          <Link href="/contact" className="studio-contact">contact us</Link>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="blog-hero">
        <div className="about-badge">
          <span className="contact-badge-dot"></span>
          ZIMPLEX INSIGHTS & INSIDER PLAYBOOKS
        </div>

        <h1 className="about-title">
          Engineering-First <span className="contact-title-accent">Search & Growth Insights.</span>
        </h1>

        <p className="about-subtitle">
          In-depth technical breakdowns, algorithm update teardowns, SERP case studies, and enterprise SEO playbooks written by senior search strategists.
        </p>
      </section>

      {/* ===== Main Blog Container ===== */}
      <main className="blog-container">
        {/* Category Filter Bar */}
        <div className="blog-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Card (shown on All) */}
        {activeCategory === "All" && (
          <Link href="/blog/1" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
            <div className="featured-article-card">
              <div>
                <div className="featured-badge-bar">
                  <span className="featured-tag">Featured Breakdown</span>
                  <span className="read-time">• 12 min read</span>
                </div>

                <h2 className="featured-title">
                  The 2026 Technical SEO Architecture Blueprint for Enterprise SaaS
                </h2>

                <p className="featured-excerpt">
                  An exhaustive engineering guide detailing how we restructured server-side log rendering, Core Web Vitals, and semantic entity scoring to generate $42M+ in organic ARR.
                </p>

                <div className="author-date" style={{ color: "#94A3B8", fontSize: "0.875rem" }}>
                  Published Aug 04, 2026
                </div>
              </div>

              <div className="featured-visual-box">
                <div className="code-preview-window">
                  <span className="t-text-purple">[LOG ENGINE]</span> Analyzing 142k URLs...<br />
                  <span className="t-text-green">✔ LCP Score: 0.62s [PERFECT]</span><br />
                  <span className="t-text-cyan">⚡ Entity Score: 98.4% E-E-A-T Match</span><br />
                  <span className="t-text-yellow">★ SERP Status: Position #1 Secured</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="article-card"
            >
              <div className="article-header">
                <span className="article-category-tag">{article.category}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
              </div>

              <div className="article-footer">
                <div className="author-date" style={{ color: "#64748B", fontSize: "0.85rem", fontWeight: 500 }}>
                  {article.date}
                </div>
                <span className="read-time" style={{ color: "#4338CA", fontWeight: 600 }}>
                  {article.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Subscription Banner */}
        <section className="newsletter-box">
          <h2 className="newsletter-title">Stay Ahead of Search Algorithm Shifts</h2>
          <p className="newsletter-subtitle">
            Join 15,000+ VPs of Growth and SEO Directors receiving our weekly technical teardowns and SERP analysis every Tuesday.
          </p>

          {subscribed ? (
            <div style={{ background: "rgba(16, 185, 129, 0.2)", border: "1px solid #10B981", borderRadius: "9999px", padding: "12px 28px", display: "inline-block", color: "#34D399", fontWeight: 700 }}>
              ✔ Thank you for subscribing! Check your inbox for our latest teardown.
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your work email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
              />
              <button type="submit" className="contact-submit-btn" style={{ maxWidth: "160px", padding: "12px 24px" }}>
                Subscribe →
              </button>
            </form>
          )}
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="footer-section" style={{ width: "100%" }}>
        <div className="footer-container">
          {/* Top Row: Links & Email */}
          <div className="footer-top-row">
            <div className="footer-nav-links">
              <Link href="/about">About</Link>
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
