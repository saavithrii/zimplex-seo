import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PostData {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  codeSnippet: string;
  takeawayTitle: string;
  takeawayText: string;
  contentParagraphs: string[];
  subheadings: { title: string; text: string }[];
}

const articlesMap: Record<string, PostData> = {
  "1": {
    id: "1",
    category: "Technical SEO",
    readTime: "7 min read",
    date: "Aug 02, 2026",
    title: "Optimizing JavaScript SSR & Crawl Budgets for Enterprise Next.js Apps",
    summary: "A comprehensive engineering breakdown on how to configure dynamic server-side rendering, inspect Googlebot crawl logs, and prevent indexation leaks in large-scale Next.js web applications.",
    codeSnippet: `// Googlebot Server Log Parser - Next.js SSR Middleware
export async function middleware(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || '';
  if (userAgent.includes('Googlebot')) {
    console.log('[BOT CRAWL]', req.nextUrl.pathname, new Date().toISOString());
    // Direct pre-rendered HTML payload from Edge Cache
    return NextResponse.next({ headers: { 'X-Cache-Status': 'HIT-EDGE' } });
  }
}`,
    takeawayTitle: "ENGINEERING RECOMMENDATION",
    takeawayText: "Always ensure your server-side rendered routes yield a LCP under 0.8 seconds to maximize Googlebot's crawl allocation across high-traffic SaaS sub-routes.",
    contentParagraphs: [
      "In modern JavaScript frameworks like Next.js and Remix, search engine crawlers often encounter rendering delays if hydration cycles are unoptimized. When Googlebot parses client-side heavy applications, it allocates a strict crawl budget per domain based on response latency and server capacity.",
      "By analyzing real-time server log files, we can isolate exactly where Googlebot encounters rendering bottlenecks, timeouts, or unnecessary 301 redirect chains. Below, we break down the four critical steps for optimizing Next.js crawl budgets for enterprise applications.",
    ],
    subheadings: [
      {
        title: "1. Implementing Edge-Cached Dynamic SSR",
        text: "Static site generation (SSG) is ideal for static pages, but enterprise SaaS platforms with thousands of dynamic routes require Incremental Static Regeneration (ISR) or Edge SSR caching. Serving pre-rendered HTML payloads directly from CDN edge nodes reduces Time to First Byte (TTFB) to under 20ms.",
      },
      {
        title: "2. Eliminating Crawl Budget Leaks",
        text: "Facetted navigation, filter parameters, and session tokens can explode your URL parameters space. Ensure your robots.txt file cleanly restricts non-canonical query strings while maintaining clean XML sitemap indexing.",
      },
    ],
  },
  "2": {
    id: "2",
    category: "Algorithm Updates",
    readTime: "10 min read",
    date: "Jul 28, 2026",
    title: "Decoding the Google Core Update: Defensive Strategies & Recovery Playbooks",
    summary: "Step-by-step audit framework to identify quality penalties, thin content flags, and link equity shifts after a major search engine algorithm update.",
    codeSnippet: `// SERP Volatility Tracker - Python Ranking Script
def analyze_serp_shift(historical_ranks, current_ranks):
    volatility = calculate_delta(historical_ranks, current_ranks)
    if volatility > 0.35:
        trigger_alert("ALGORITHM UPDATE DETECTED: SERP Shift > 35%")
    return volatility`,
    takeawayTitle: "ALGORITHM DEFENSE PRINCIPLE",
    takeawayText: "Core algorithm updates evaluate domain-level quality signals over 90-day cycles. Focus on entity authority and E-E-A-T trust signals over quick-fix technical patches.",
    contentParagraphs: [
      "Whenever Google rolls out a broad core update, thousands of domains experience sudden rank volatility. Rather than making panicked content edits, enterprise SEO teams must execute a systematic forensic audit.",
      "This guide outlines the precise post-update diagnostic workflow used by Zimplex SEO Studio to evaluate traffic shifts and restore rank momentum.",
    ],
    subheadings: [
      {
        title: "1. Diagnostic Data Collection",
        text: "Compare Google Search Console impressions and clicks across pre-update and post-update 28-day windows. Isolate whether traffic drops affected specific subfolders, specific template layouts, or domain-wide brand queries.",
      },
      {
        title: "2. E-E-A-T Trust Alignment",
        text: "Ensure author credentials, original primary research citations, and transparent editorial review policies are embedded directly into schema microdata.",
      },
    ],
  },
  "3": {
    id: "3",
    category: "AI & LLM Search",
    readTime: "6 min read",
    date: "Jul 21, 2026",
    title: "Generative Engine Optimization (GEO): Ranking inside Search GPT & Gemini",
    summary: "How to structure JSON-LD schema microdata, entity graph relations, and direct citation sources to secure visibility inside AI-driven search answers.",
    codeSnippet: `<!-- Enterprise Schema.org JSON-LD Entity Graph -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Generative Engine Optimization (GEO) Guide",
  "author": { "@type": "Organization", "name": "Zimplex SEO Studio" },
  "publisher": { "@type": "Organization", "name": "Zimplex Global Pvt Ltd" }
}
</script>`,
    takeawayTitle: "AI SEARCH TAKEAWAY",
    takeawayText: "LLMs prioritize structured entity facts with verified web citations. Clean JSON-LD graphs ensure AI search agents cite your domain as the primary source.",
    contentParagraphs: [
      "As AI search engines like SearchGPT, Perplexity, and Google Gemini become primary research interfaces, traditional keyword density is replaced by vector similarity and direct citation authority.",
      "Generative Engine Optimization (GEO) focuses on structuring your digital content so LLM crawlers extract key facts and present your brand as the canonical answer.",
    ],
    subheadings: [
      {
        title: "1. Structuring Direct Fact Entities",
        text: "LLMs favor concise, data-backed declarations backed by authoritative citations. Format core definitions, statistics, and takeaways with clear semantic headings.",
      },
      {
        title: "2. Schema Knowledge Graph Interlinking",
        text: "Explicitly declare relationships between your brand, authors, and industry concepts using connected Schema.org entities.",
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = articlesMap[id] || articlesMap["1"];
  return {
    title: `${post.title} — Zimplex SEO Insights`,
    description: post.summary,
  };
}

export default async function SingleArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = articlesMap[id] || articlesMap["1"];

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

      {/* ===== Post Hero Banner ===== */}
      <section className="post-hero">
        <div className="post-breadcrumbs">
          <Link href="/blog">← Back to Insights</Link>
          <span>/</span>
          <span>{post.category}</span>
        </div>

        <div className="post-meta-bar">
          <span className="article-category-tag" style={{ margin: 0 }}>{post.category}</span>
          <span style={{ color: "#64748B", fontSize: "0.875rem", fontWeight: 500 }}>Published {post.date}</span>
          <span style={{ color: "#4338CA", fontSize: "0.875rem", fontWeight: 700 }}>• {post.readTime}</span>
        </div>

        <h1 className="post-title">{post.title}</h1>
        <p className="post-lead-summary">{post.summary}</p>
      </section>

      {/* ===== Main Article Body ===== */}
      <main className="post-article-container">
        <div className="post-body-content">
          {post.contentParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          {/* Syntax Code Block */}
          {post.codeSnippet && (
            <div className="post-code-block">
              <pre>{post.codeSnippet}</pre>
            </div>
          )}

          {/* Strategic Takeaway Box */}
          {post.takeawayText && (
            <div className="post-takeaway-box">
              <div className="post-takeaway-title">{post.takeawayTitle}</div>
              <div className="post-takeaway-text">{post.takeawayText}</div>
            </div>
          )}

          {/* Subheading Breakdown Sections */}
          {post.subheadings.map((sub, idx) => (
            <div key={idx}>
              <h2>{sub.title}</h2>
              <p>{sub.text}</p>
            </div>
          ))}

          <h2 style={{ marginTop: "3rem" }}>Conclusion & Next Steps</h2>
          <p>
            Dominating modern search engines requires aligning core infrastructure with semantic content clarity. By applying these engineering principles, enterprise domains establish organic equity that scales over time.
          </p>
        </div>

        {/* Call to Action Banner */}
        <section className="services-cta-banner" style={{ marginTop: "4rem" }}>
          <h2 className="services-cta-title">Need Help Scaling Your Domain's Technical SEO?</h2>
          <p className="services-cta-subtitle">
            Speak with our senior strategy team today to review your domain metrics and unlock custom growth targets.
          </p>
          <Link href="/contact" className="contact-submit-btn" style={{ maxWidth: "260px", margin: "0 auto" }}>
            Schedule Discovery Call →
          </Link>
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
