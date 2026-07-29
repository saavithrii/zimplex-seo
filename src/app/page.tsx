"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Play, Zap, Activity, Layers, ArrowUp, BarChart2, Plus, Search, Menu, Bell } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  /* ---- Refs ---- */
  const heroBadgeRef  = useRef<HTMLDivElement>(null);
  const heroTitleRef  = useRef<HTMLHeadingElement>(null);
  const heroDescRef   = useRef<HTMLParagraphElement>(null);
  const heroCtasRef   = useRef<HTMLDivElement>(null);
  const statWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---- New Hero: Badge fade-in ---- */
      gsap.from(heroBadgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      });

      /* ---- New Hero: Title slide-up ---- */
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      /* ---- New Hero: Description fade-in ---- */
      gsap.from(heroDescRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.35,
      });

      /* ---- New Hero: CTAs slide-up ---- */
      gsap.from(heroCtasRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      });

      /* ---- New Hero: Floating tags stagger pop-in ---- */
      gsap.from(".floating-tag", {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        stagger: 0.04,
        ease: "back.out(1.5)",
        delay: 0.6,
      });

      /* ---- Scroll Parallax for Scattered Tags ---- */
      gsap.to(".absolute-tag:nth-child(3n+1)", {
        scrollTrigger: {
          trigger: ".new-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        x: -80,
        y: -30,
      });

      gsap.to(".absolute-tag:nth-child(3n+2)", {
        scrollTrigger: {
          trigger: ".new-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        x: 80,
        y: 30,
      });

      gsap.to(".absolute-tag:nth-child(3n)", {
        scrollTrigger: {
          trigger: ".new-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        x: -40,
        y: 60,
      });

      /* ---- Section 2: content card slides up on scroll ---- */
      gsap.from(".content-section", {
        scrollTrigger: {
          trigger: ".content-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ---- Section 2: widget cards stagger in ---- */
      gsap.from([".widget-light", ".widget-dark"], {
        scrollTrigger: {
          trigger: ".widgets-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      /* ---- Section 2: 45% counter counts up ---- */
      const statsObj = { val: 0 };
      ScrollTrigger.create({
        trigger: ".stats-section",
        start: "top 80%",
        onEnter: () => {
          gsap.to(statsObj, {
            val: 45,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".stats-number");
              if (el) el.textContent = Math.round(statsObj.val) + "%";
            },
          });
          gsap.from(".stats-section", {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
          });
        },
        once: true,
      });

      /* ---- Section 3: headline words slide up ---- */
      gsap.from(".maximize-word-dark, .maximize-word-faded", {
        scrollTrigger: {
          trigger: ".maximize-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      /* ---- Section 3: stat widget pops in ---- */
      gsap.from(statWidgetRef.current, {
        scrollTrigger: {
          trigger: statWidgetRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scale: 0.7,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(2)",
      });

      /* ---- Section 3: yellow pill slides in from right ---- */
      gsap.from(".yellow-pill", {
        scrollTrigger: {
          trigger: ".yellow-pill",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      /* ---- Section 3: bottom CTA row fades up ---- */
      gsap.from(".maximize-bottom", {
        scrollTrigger: {
          trigger: ".maximize-bottom",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* Header */}
      <header className="new-header">
        <div className="new-logo">
          zimplex
        </div>

        <nav className="new-nav">
          <Link href="#">How it Works</Link>
          <Link href="#">Benefits</Link>
          <Link href="#">Testimonials</Link>
        </nav>

        <div className="new-actions">
          <Link href="#" className="new-login">Log In</Link>
          <Link href="#" className="new-btn-primary">Start Practicing</Link>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="new-hero">
        <div ref={heroBadgeRef} className="new-hero-badge">
          ✨ Introducing
        </div>

        <h1 ref={heroTitleRef} className="new-hero-title">
          A platform that helps you <span className="blue-highlight">rank</span>,<br />
          not just <span className="blue-highlight">track</span>
          <svg className="hand-cursor-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 28C10.5 28 9.5 27 9 25.5L4.5 14C3.8 12.3 4.8 10.5 6.5 10.5C7.2 10.5 7.8 10.8 8.3 11.3L11 14V4.5C11 2.8 12.3 1.5 14 1.5C15.7 1.5 17 2.8 17 4.5V11C17 9.3 18.3 8 20 8C21.7 8 23 9.3 23 11V12.5C23 11.4 24.1 10.5 25.2 10.5C26.3 10.5 27.2 11.4 27.2 12.5V15.5C27.2 14.7 28.1 14 29 14C29.9 14 30.8 14.7 30.8 15.8V21C30.8 24.9 27.6 28 23.8 28H12Z" fill="#EBF5FB" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </h1>

        <p ref={heroDescRef} className="new-hero-desc">
          Master search engine visibility through personalized audits, keyword targeting, and AI-driven optimizations.
        </p>

        <div ref={heroCtasRef} className="new-hero-ctas">
          <Link href="#" className="new-btn-text">How it works</Link>
          <Link href="#" className="new-btn-blue">Start practicing</Link>
        </div>

        {/* Floating Tags Section */}
        <div className="scattered-tags-container">
          <span className="floating-tag absolute-tag tag-blue" style={{ left: "2%", top: "60px", transform: "rotate(-18deg)" }}>Rank Tracker</span>
          <span className="floating-tag absolute-tag tag-green" style={{ left: "5%", top: "15px", transform: "rotate(-12deg)" }}>Keyword Research</span>
          <span className="floating-tag absolute-tag tag-purple" style={{ left: "13%", top: "65px", transform: "rotate(2deg)" }}>On-Page SEO</span>
          <span className="floating-tag absolute-tag tag-green" style={{ left: "18%", top: "10px", transform: "rotate(-10deg)" }}>Link Building</span>
          <span className="floating-tag absolute-tag tag-green" style={{ left: "17%", top: "85px", transform: "rotate(-2deg)" }}>Site Audit</span>
          <span className="floating-tag absolute-tag tag-blue" style={{ left: "26%", top: "40px", transform: "rotate(-22deg)" }}>Competitor Analysis</span>
          <span className="floating-tag absolute-tag tag-green" style={{ left: "39%", top: "65px", transform: "rotate(-15deg)" }}>Content Optimizer</span>
          <span className="floating-tag absolute-tag tag-purple" style={{ left: "46%", top: "35px", transform: "rotate(-10deg)" }}>Local SEO</span>
          <span className="floating-tag absolute-tag tag-green" style={{ left: "56%", top: "60px", transform: "rotate(-60deg)" }}>Backlink Monitor</span>
          <span className="floating-tag absolute-tag tag-blue" style={{ left: "62%", top: "100px", transform: "rotate(3deg)" }}>Traffic Growth</span>
          <span className="floating-tag absolute-tag tag-blue" style={{ left: "66%", top: "25px", transform: "rotate(-20deg)" }}>Core Web Vitals</span>
          <span className="floating-tag absolute-tag tag-purple" style={{ left: "76%", top: "80px", transform: "rotate(-15deg)" }}>Daily Tasks</span>
          <span className="floating-tag absolute-tag tag-purple" style={{ left: "83%", top: "30px", transform: "rotate(-8deg)" }}>Analytics</span>
          <span className="floating-tag absolute-tag tag-green" style={{ left: "88%", top: "85px", transform: "rotate(-12deg)" }}>Search visibility</span>
        </div>
      </section>

      {/* ===== Section 2: Key Benefits ===== */}
      <section className="content-section" style={{ width: "100%", maxWidth: "80rem", marginTop: "4rem" }}>
        <div className="content-header">
          <h2 className="content-title">Your key to strategic success through analytics</h2>
          <p className="content-subtitle">Ready for exciting, instantaneous, all-accessible insights in real time?</p>
        </div>

        {/* Widgets Grid */}
        <div className="widgets-grid">

          {/* Light Card */}
          <div className="widget-light">
            <div className="widget-light-content">
              <div className="report-badge">Setting up reports</div>
              <h3 className="widget-light-title">Fast and easy access to analytics</h3>
              <p className="widget-light-desc">
                One platform is a comprehensive system of solutions that will be the first step towards digitalization of your business!
              </p>
            </div>

            {/* Sales Statistic Card */}
            <div className="sales-card">
              <h4 className="sales-header">Sales statistic</h4>
              <div className="sales-profit-row">
                <div className="profit-icon"><Layers size={26} /></div>
                <div>
                  <div className="profit-label">Total profit</div>
                  <div className="profit-value">$ 264,2K</div>
                </div>
              </div>
              <div className="visitors-box">
                <div className="visitors-label">Visitors</div>
                <div className="visitors-row">
                  <span className="visitors-value">56K</span>
                  <span className="badge-green"><ArrowUp size={11} /> +14%</span>
                </div>
              </div>
              <div>
                <div className="visit-stats-label">Visit statistics</div>
                <svg width="100%" height="75" viewBox="0 0 260 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 65 L37 48 L74 55 L111 38 L148 45 L185 18 L222 28 L260 8" stroke="var(--accent-yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <circle cx="0"   cy="65" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="37"  cy="48" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="74"  cy="55" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="111" cy="38" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="148" cy="45" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="185" cy="18" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="222" cy="28" r="3.5" fill="var(--accent-yellow)" />
                  <circle cx="260" cy="8"  r="3.5" fill="var(--accent-yellow)" />
                </svg>
                <div className="rate-badge">
                  <div className="rate-label">Rate</div>
                  <div className="rate-value">+ 58%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Card */}
          <div className="widget-dark">
            <div className="dark-widgets-row">
              <div className="dark-mini-card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Layers size={34} color="var(--accent-yellow)" style={{ marginBottom: "1rem" }} />
                <div className="avatar-stack">
                  <div className="avatar" style={{ background: "#FE4F32" }}>A</div>
                  <div className="avatar" style={{ background: "#34D399" }}>B</div>
                  <div className="avatar" style={{ background: "#3B82F6" }}>C</div>
                </div>
              </div>
              <div className="dark-mini-card" style={{ textAlign: "left" }}>
                <div className="transactions-label">Transactions</div>
                <div className="transactions-badge"><ArrowUp size={13} /> +14%</div>
                <div className="transactions-value">43K</div>
              </div>
            </div>
            <h3 className="widget-dark-title">Widget control</h3>
            <p className="widget-dark-desc">Reports provide a comprehensive overview of important aspects of web analytics</p>
          </div>
        </div>

        {/* Stats — counter animates on scroll */}
        <div className="stats-section">
          <div className="stats-left">
            <span className="stats-upto">Up to</span>
            <span className="stats-number">0%</span>
          </div>
          <p className="stats-desc">
            Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time for analysis and save time for making important, informed decisions
          </p>
        </div>
      </section>
      {/* ===== Section 3: Maximize Efficiency ===== */}
      <section className="maximize-section" style={{ width: "100%", maxWidth: "80rem", marginTop: "3rem" }}>

        {/* Headline */}
        <div className="maximize-headline">
          <div className="maximize-line">
            <span className="maximize-word-dark">Maximize</span>
            <span className="maximize-word-faded">efficiency</span>
          </div>
          <div className="maximize-line">
            <span className="maximize-word-dark">with our intuitive</span>
          </div>
        </div>

        {/* Middle Row */}
        <div className="maximize-middle">
          <div ref={statWidgetRef} className="stat-widget">
            <div className="stat-icon-gray">
              <Activity size={30} strokeWidth={2.5} color="#ff4f32" />
            </div>
            <div className="stat-yellow-circle">
              <div className="stat-percent">45%</div>
              <div className="stat-label">System grow<br/>faster</div>
            </div>
          </div>

          <div style={{ flex: 1 }} />

          <div className="yellow-pill">
            <div className="yellow-pill-track">
              <span>zimplex seo service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
              <span>zimplex seo service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
              <span>zimplex seo service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
              <span>zimplex seo service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>

        <div className="maximize-divider" />

        <div className="maximize-bottom">
          <p className="maximize-desc">
            Explore traffic sources, page behavior, conversions and more to gain deep insight
            into your audience. With us, your business doesn&apos;t just adapt – it evolves
          </p>
          <div className="maximize-ctas">
            <a href="#" className="btn-demo">Request a demo</a>
            <a href="#" className="btn-start">Start for free</a>
          </div>
        </div>

      </section>

      {/* ===== Section 4: Full Control ===== */}
      <section className="control-section" style={{ maxWidth: "80rem" }}>
        <div className="control-headline">
          <div className="control-line">We give you full</div>
          <div className="control-line"><span className="control-word-faded">control</span> over your data</div>
        </div>

        <div className="control-grid">
          {/* Card 1 */}
          <div className="control-card">
            <div className="control-card-grid-bg"></div>
            <div className="control-card-content">
              <div className="control-mockup-wrapper">
                
                {/* Conversion Rate Card */}
                <div className="mockup-conv-rate">
                  <div className="conv-header">Conversion rate</div>
                  <div className="conv-val-box">2,3%</div>
                  <div className="conv-desc">Percentage of website visitors</div>
                </div>

                {/* Sales Revenue Card */}
                <div className="mockup-sales-revenue">
                  <div className="sales-rev-header">Sales revenue</div>
                  <div className="sales-rev-val">$ 131,2K</div>
                  <div className="sales-rev-bar"></div>
                  
                  <div className="sales-rev-stat-row">
                    <span>Min. price</span>
                    <span>1,200 $</span>
                  </div>
                  <div className="sales-rev-stat-row">
                    <span>Max. price</span>
                    <span>2,320 $</span>
                  </div>
                  <div className="sales-rev-stat-row">
                    <span>Engagement rate</span>
                    <span>47.84%</span>
                  </div>
                </div>

              </div>

              <h3>Improved customer service</h3>
              <p>
                SEO insights help optimize conversion processes by providing information on how to improve interactions with customers and increase their satisfaction.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="control-card">
            <div className="control-card-grid-bg"></div>
            <div className="control-card-content">
              <div className="control-mockup-wrapper">
                
                {/* Finance Reports tab */}
                <div className="mockup-finance-report">
                  <Layers size={14} color="#888"/>
                  <span>Finance reports</span>
                </div>

                {/* Insights Main Card */}
                <div className="mockup-insights-card">
                  <div className="insights-header">
                    <Activity size={12} color="#888"/>
                    <span>Insights</span>
                  </div>
                  
                  <div className="insights-profit-row">
                    <div>
                      <div className="mockup-label" style={{fontSize: "0.75rem", marginBottom: "4px"}}>Total profit</div>
                      <div className="insights-profit-val">$ 264,2K</div>
                      <div className="insights-pill">Data visualization</div>
                    </div>

                    {/* Mini chart visual */}
                    <div className="insights-chart-preview">
                      <div className="insights-chart-bar" style={{height: "30px"}}></div>
                      <div className="insights-chart-bar" style={{height: "45px"}}></div>
                      <div className="insights-chart-bar active" style={{height: "60px"}}></div>
                      <div className="insights-chart-bar" style={{height: "25px"}}></div>
                    </div>
                  </div>
                </div>

              </div>

              <h3>Monitoring key indicators</h3>
              <p>
                SEO platforms allow businesses to track KPIs, an important tool for measuring success and achieving goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Get Started (Final Section) ===== */}
      <section className="get-started-section">
        {/* Soft shadow orange icon */}
        <div className="get-started-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        </div>

        <h2 className="get-started-title">Get Started</h2>
        <p className="get-started-desc">
          Turn information into advantage! Start using<br/>Zimplex today. Sign up for a free trial.
        </p>

        <div className="get-started-ctas">
          <a href="#" className="btn-demo-pill">Request a demo</a>
          <a href="#" className="btn-start-pill">Start for free</a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer-section">
        <div className="footer-container">
          {/* Top Row: Links & Email */}
          <div className="footer-top-row">
            <div className="footer-nav-links">
              <a href="#">About</a>
              <a href="#">Why Us</a>
              <a href="#">Platform</a>
              <a href="#">Pricing</a>
              <a href="#">Contacts</a>
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
              <div className="footer-address" style={{ marginLeft: "5rem" }}>
                <h4>Saint Louis</h4>
                <p>1366 Penn Street 63101</p>
              </div>
            </div>
            
            <div className="footer-socials">
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>

          {/* Bottom Row: Logo & Policy & QR */}
          <div className="footer-bottom-row">
            <div className="footer-logo">
              Zimplex<sup>®</sup>
            </div>
            
            <div className="footer-policies">
              <a href="#">Privacy policy</a>
              <a href="#">License agreement</a>
            </div>

            <div className="footer-qr-container">
              <div className="footer-qr-code">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                  <path d="M14 14h2v2h-2z"/>
                  <path d="M18 16h3v3h-3z"/>
                  <path d="M14 18h2v3h-2z"/>
                  <path d="M20 14h1v1h-1z"/>
                  <path d="M16 20h2v1h-2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
