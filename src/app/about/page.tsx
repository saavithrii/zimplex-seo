"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface LogEntry {
  id: number;
  time: string;
  type: "success" | "info" | "purple" | "yellow" | "white";
  text: string;
}

const stats = [
  { number: "$120M+", label: "Client Organic Revenue", codeTag: "[0x1 REVENUE]" },
  { number: "99.4%", label: "Enterprise Retention", codeTag: "[SLA 99.4%]" },
  { number: "1,500+", label: "#1 SERP Rankings", codeTag: "[SERP #1]" },
  { number: "24h SLA", label: "Guaranteed Turnaround", codeTag: "[24h LOG]" },
];

const poolLogs = [
  { type: "success", text: "CRAWL AGENT: Googlebot-Desktop HTTP/2 200 OK — 14ms" },
  { type: "info", text: "INDEX CHECK: 99.8% Indexation Rate verified across 24,000 pages" },
  { type: "purple", text: "NLP PARSER: Vector embedding similarity score: 0.964 [TOP MATCH]" },
  { type: "yellow", text: "BOT AUDIT: Blocked 42 malicious scraper IPs from consuming crawl budget" },
  { type: "success", text: "SERP TRACKER: +14 positions gained for keyword 'SaaS Technical SEO'" },
  { type: "info", text: "HREFLANG MAPPER: Validated 18 multi-region language subdomains" },
  { type: "purple", text: "BACKLINK AUDIT: Disavowed 12 spam domain footprints [CLEAN EQUITY]" },
];

export default function AboutPage() {

  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 1, time: "01:08:10", type: "info", text: "Initializing Zimplex Neural Crawler v4.8.0-release..." },
    { id: 2, time: "01:08:11", type: "success", text: "AUTHENTICATED: Googlebot Search Console API [OAuth 2.0 TOKEN OK]" },
    { id: 3, time: "01:08:12", type: "purple", text: "AI SEMANTIC ENGINE: Generated 48 topic clusters & 1,200 entity nodes" },
    { id: 4, time: "01:08:14", type: "success", text: "CORE WEB VITALS: LCP = 0.65s (Fast) | CLS = 0.00 | INP = 18ms" },
    { id: 5, time: "01:08:15", type: "yellow", text: "INJECTING Schema.org JSON-LD microdata into layout boundary..." },
    { id: 6, time: "01:08:17", type: "success", text: "SERP RANK BOOST: #1 Position Captured for 'Enterprise Organic Search'" },
  ]);

  const [isPaused, setIsPaused] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(3);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const randomLog = poolLogs[Math.floor(Math.random() * poolLogs.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];

      setLogs((prevLogs) => {
        const nextId = prevLogs.length ? prevLogs[prevLogs.length - 1].id + 1 : 1;
        const updated = [...prevLogs, { id: nextId, time: timeStr, type: randomLog.type as LogEntry["type"], text: randomLog.text }];
        // Keep last 15 logs
        return updated.slice(-15);
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const handleRestartScan = () => {
    setLogs([
      { id: Date.now(), time: new Date().toTimeString().split(" ")[0], type: "info", text: "RE-RUNNING FULL DOMAIN AUDIT SCAN..." },
      { id: Date.now() + 1, time: new Date().toTimeString().split(" ")[0], type: "success", text: "RE-AUTHENTICATED SEARCH ENGINE API CLUSTER [OK]" },
    ]);
  };

  // Auto-cycle active timeline milestone every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const timeline = [
    {
      year: "2021",
      tag: "[INCEPTION]",
      title: "Audit Lab Inception",
      desc: "Founded in New York as a specialized JS crawlability & log audit engineering lab.",
      metricVal: "1,200+",
      metricLbl: "Log Audits Run",
      detail: "Developed initial server-side rendering parser and Googlebot HTTP/2 crawl monitoring scripts.",
    },
    {
      year: "2023",
      tag: "[AI CLUSTERS]",
      title: "Semantic AI Clustering",
      desc: "Pioneered proprietary LLM semantic scoring and E-E-A-T entity mapping algorithms.",
      metricVal: "45+ SaaS",
      metricLbl: "Domains Scaled",
      detail: "Deployed vectorized NLP entity scoring engine to eliminate cannibalization across enterprise content graphs.",
    },
    {
      year: "2025",
      tag: "[GLOBAL SLA]",
      title: "Global Hub Expansion",
      desc: "Expanded enterprise operations to London & New York, managing multi-region hreflang engines.",
      metricVal: "18 Regions",
      metricLbl: "Hreflang Hubs",
      detail: "Scaled international search infrastructure, resolving cross-border indexation conflicts for multi-national brands.",
    },
    {
      year: "2026",
      tag: "[REVENUE ROIC]",
      title: "$120M+ Revenue Milestone",
      desc: "Achieved $120M+ cumulative organic growth impact for client domains across SaaS & Ecommerce.",
      metricVal: "$120M+",
      metricLbl: "Organic Impact",
      detail: "Established 99.4% retention SLA benchmark connecting organic rank captures directly to pipeline revenue.",
    },
  ];


  return (
    <div className="about-page-wrapper">
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
          <Link href="/about" style={{ fontWeight: 700, color: "#4338CA" }}>about</Link>
          <Link href="/blog">blog</Link>
        </nav>

        <div className="studio-actions">
          <Link href="/contact" className="studio-contact">contact us</Link>
        </div>
      </header>

      {/* ===== Cyber Hacker Hero Section ===== */}
      <section className="cyber-hero-section">
        <div className="cyber-badge">
          <span className="contact-badge-dot"></span>
          {/* SYSTEM.INIT :: ZIMPLEX_CORE_ENGINE */}
          {"// SYSTEM.INIT :: ZIMPLEX_CORE_ENGINE"}
        </div>

        <h1 className="cyber-hero-title">
          Architecting the Future of <span className="cyber-title-glow">Search Visibility.</span>
        </h1>

        <p className="cyber-hero-subtitle">
          Zimplex is an elite team of technical SEO engineers, data analysts, and content strategists built to help ambitious brands dominate organic search and scale market share.
        </p>

        {/* Cyber Stats Grid */}
        <div className="cyber-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <span className="about-stat-code-tag">
                <span className="contact-badge-dot" style={{ width: "5px", height: "5px" }}></span>
                {stat.codeTag}
              </span>
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Interactive Cyber Terminal Engine (Hacker / Code Vibe) ===== */}
      <section className="cyber-terminal-wrapper" style={{ padding: "0 2rem" }}>
        <div className="cyber-terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="t-dot t-dot-red"></span>
              <span className="t-dot t-dot-yellow"></span>
              <span className="t-dot t-dot-green"></span>
            </div>

            <div className="terminal-title-text">
              <span>zimplex-bot-crawler-engine v4.8.0</span>
              <span className="terminal-live-badge">
                <span className="contact-badge-dot" style={{ width: "6px", height: "6px" }}></span>
                LIVE LOG STREAM
              </span>
            </div>

            <div className="terminal-controls">
              <button
                className="terminal-btn"
                onClick={() => setIsPaused(!isPaused)}
              >
                {isPaused ? "▶ Resume Stream" : "⏸ Pause Stream"}
              </button>
              <button
                className="terminal-btn"
                onClick={handleRestartScan}
              >
                ↺ Re-run Audit
              </button>
            </div>
          </div>

          <div className="terminal-body" ref={terminalBodyRef}>
            {logs.map((log) => (
              <div key={log.id} className="t-line">
                <span className="t-time">[{log.time}]</span>
                <span className="t-prompt">sys@zimplex:~$</span>
                <span className={
                  log.type === "success" ? "t-text-green" :
                  log.type === "purple" ? "t-text-purple" :
                  log.type === "yellow" ? "t-text-yellow" :
                  log.type === "info" ? "t-text-cyan" : "t-text-white"
                }>
                  {log.text}
                </span>
              </div>
            ))}
            <div className="t-line" style={{ marginTop: "4px" }}>
              <span className="t-prompt">sys@zimplex:~$</span>
              <span className="t-cursor"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bento Grid Section ===== */}
      <section className="bento-section">
        <div className="bento-header">
          <h2 className="bento-header-title">Our Core Architecture</h2>
          <p className="bento-header-desc">
            An engineering-first methodology built to outperform generic marketing agencies.
          </p>
        </div>

        <div className="bento-grid">
          {/* Tile 1: 8-Column Large Card */}
          <div className="bento-card bento-span-8">
            <div>
              <span className="bento-pill-tag">Infrastructure Engine</span>
              <h3 className="bento-card-title">Crawlability & Log File Engineering</h3>
              <p className="bento-card-text">
                We eliminate crawl budget bottlenecks, indexation leaks, and SSR rendering delays by analyzing real-time Googlebot server log files.
              </p>
            </div>

            <div className="bento-code-box">
              <span className="bento-code-purple">[2026-08-04 01:08:12]</span> Googlebot-Image/1.0 crawl event detected<br />
              <span className="bento-code-green">✔ GET /api/v2/render-schema HTTP/2 200 OK - 14ms</span><br />
              <span className="bento-code-yellow">⚡ Core Web Vitals LCP: 0.8s | INP: 24ms | CLS: 0.00</span>
            </div>
          </div>

          {/* Tile 2: 4-Column Dark Card */}
          <div className="bento-card bento-card-dark bento-span-4">
            <div>
              <span className="bento-pill-tag bento-pill-tag-dark">Enterprise SLA</span>
              <h3 className="bento-card-title">99.4% Client Retention</h3>
              <p className="bento-card-text">
                Our clients stay because we deliver predictable, rank-tracking ROI connected directly to pipeline revenue.
              </p>
            </div>

            <div className="contact-status-pill" style={{ marginTop: "2rem" }}>
              <span className="status-dot-green"></span>
              Live 24h SLA Active
            </div>
          </div>

          {/* Tile 3: 6-Column Card */}
          <div className="bento-card bento-span-6">
            <div>
              <span className="bento-pill-tag">Algorithm Immunity</span>
              <h3 className="bento-card-title">Algorithm-Resistant Organic Equity</h3>
              <p className="bento-card-text">
                We build organic moats using verified E-E-A-T entity signals and white-hat digital PR placements that withstand major Google core update shifts.
              </p>
            </div>
          </div>

          {/* Tile 4: 6-Column Card */}
          <div className="bento-card bento-span-6">
            <div>
              <span className="bento-pill-tag">AI Semantic Intelligence</span>
              <h3 className="bento-card-title">LLM Semantic Topic Clustering</h3>
              <p className="bento-card-text">
                We leverage custom semantic NLP algorithms to identify high-converting commercial search queries before competitors capture them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Timeline Section ===== */}
      <section className="timeline-section">
        <div className="bento-header" style={{ marginBottom: "1rem" }}>
          <h2 className="bento-header-title">Our Growth Milestones</h2>
          <p className="bento-header-desc">
            How Zimplex evolved from an audit lab into an international enterprise search agency. Auto-playing key milestones below.
          </p>
        </div>

        <div className="timeline-track">
          {timeline.map((node, idx) => (
            <div
              key={idx}
              className={`timeline-node ${activeMilestone === idx ? "active-node" : ""}`}
              onClick={() => setActiveMilestone(idx)}
            >
              <div className="timeline-dot"></div>
              <span className="timeline-tag-code">{node.tag}</span>
              <div className="timeline-year">{node.year}</div>
              <h4 className="timeline-title">{node.title}</h4>
              <p className="timeline-desc">{node.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
