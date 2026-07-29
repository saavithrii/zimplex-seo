"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Play, Zap, Activity, Layers, ArrowUp, BarChart2, Plus, Search, Menu, Bell } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  /* ---- Refs ---- */
  const iconGrayRef   = useRef<HTMLDivElement>(null);
  const iconOrangeRef = useRef<HTMLDivElement>(null);
  const iconYellowRef = useRef<HTMLDivElement>(null);
  const laptopRef     = useRef<HTMLDivElement>(null);
  const playRef       = useRef<HTMLDivElement>(null);
  const statWidgetRef = useRef<HTMLDivElement>(null);
  const heroLinesRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---- Hero: stagger in the text lines ---- */
      gsap.from(".hero-line", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });

      /* ---- Hero: icons pop in with spring-like elastic ease ---- */
      gsap.from(iconGrayRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 0.3,
      });

      gsap.from(iconOrangeRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 0.45,
      });

      gsap.from(iconYellowRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 0.6,
      });

      /* ---- Hero: laptop slides in from right ---- */
      gsap.from(laptopRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.35,
      });

      /* ---- Hero: play button pops in ---- */
      gsap.from(playRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(3)",
        delay: 1.0,
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
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "5rem" }}>

      {/* Header */}
      <div style={{ width: "100%", padding: "0 1rem", maxWidth: "80rem", margin: "0 auto" }}>
        <header className="header-nav">
          <div className="header-logo">
            <div className="logo-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </div>
            zimplex
          </div>

          <nav className="nav-links">
            <Link href="#">Services</Link>
            <Link href="#">Rankings</Link>
            <Link href="#">Audit</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Contact</Link>
          </nav>

          <Link href="#" className="btn-signup">Get Started</Link>
        </header>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="hero-section" style={{ maxWidth: "80rem" }}>
        <div className="hero-content" ref={heroLinesRef}>

          {/* Line 1: [gray+orange icons] SEO */}
          <div className="hero-line">
            <div className="icon-pair">
              <div ref={iconGrayRef} className="icon-gray">
                <Zap size={34} strokeWidth={2.5} fill="currentColor" />
              </div>
              <div ref={iconOrangeRef} className="icon-orange">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  <circle cx="18" cy="12" r="2.5" fill="white" stroke="none"></circle>
                  <circle cx="6" cy="12" r="2.5" fill="white" stroke="none"></circle>
                </svg>
              </div>
            </div>
            <h1 className="hero-title">SEO</h1>
          </div>

          {/* Line 2: that ranks you */}
          <div className="hero-line">
            <h1 className="hero-title">that</h1>
            <h1 className="hero-title hero-helps">ranks</h1>
            <h1 className="hero-title">you</h1>
          </div>

          {/* Line 3: higher [yellow icon] in search */}
          <div className="hero-line">
            <h1 className="hero-title">higher</h1>
            <div ref={iconYellowRef} className="icon-yellow">
              <BarChart2 size={36} strokeWidth={2.5} />
            </div>
            <h1 className="hero-title">in search</h1>
          </div>
        </div>

        {/* Laptop Graphic */}
        <div ref={laptopRef} className="laptop-graphic-container">
          <div className="laptop-bg-gray"></div>
          <div className="laptop-bg-blue"></div>

          <div className="laptop-device">
            <div className="laptop-screen-container">
              <div className="laptop-display-header">1,342,567</div>
              <div className="laptop-chart-orange"></div>
              <div className="laptop-chart-yellow"></div>
            </div>
            <div className="laptop-keyboard"></div>
            <div className="laptop-keyboard-thickness"></div>
          </div>

          <div ref={playRef} className="play-btn">
            <Play size={24} fill="currentColor" style={{ marginLeft: "4px" }} />
          </div>
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

      {/* ===== Section 3: Turning Data into Actions ===== */}
      <section className="actions-section" style={{ width: "100%", maxWidth: "80rem", marginTop: "2rem" }}>
        <div className="actions-bg-grid"></div>

        <div className="actions-content-row">
          {/* Left Column */}
          <div className="actions-text-col">
            <h2 className="actions-heading">Turning data into real<br/>actions and ideas.</h2>
            
            <div className="accordion-list">
              <div className="accordion-item">
                <span>Instant Insights</span>
                <button className="accordion-btn"><Plus size={16} strokeWidth={2.5}/></button>
              </div>
              <div className="accordion-item">
                <span>AI technology</span>
                <button className="accordion-btn"><Plus size={16} strokeWidth={2.5}/></button>
              </div>
              <div className="accordion-item">
                <span>Easy integration</span>
                <button className="accordion-btn"><Plus size={16} strokeWidth={2.5}/></button>
              </div>
            </div>
          </div>

          {/* Right Column: Devices Mockup */}
          <div className="devices-mockup-col">
             {/* Tablet */}
             <div className="tablet-mockup">
                <div className="tablet-screen">
                  <div className="tablet-header-bar">
                    <div className="tablet-logo-pill">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                      </svg>
                      zimplex
                    </div>
                    <div className="tablet-search-pill"><Search size={12}/> Search</div>
                  </div>
                  <div className="tablet-body-content">
                     <div className="mockup-label">Revenue amount</div>
                     <div className="mockup-value">$1 342,567 <span className="mockup-badge"><ArrowUp size={10}/> +21%</span></div>
                     
                     <div className="tablet-chart-bars"></div>
                     <div className="tablet-chart-area"></div>
                  </div>
                </div>
             </div>

             {/* Phone */}
             <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-notch"></div>
                  <div className="phone-header-icons">
                     <Menu size={18} strokeWidth={2.5} /> <Bell size={18} strokeWidth={2.5} />
                  </div>
                  <div className="phone-body-content">
                     <div className="mockup-label">Revenue amount</div>
                     <div className="mockup-value" style={{fontSize: "1.8rem"}}>$1 342,567 <span className="mockup-badge"><ArrowUp size={10}/> +21%</span></div>
                     
                     <div className="phone-chart-area"></div>
                     <div className="phone-chart-bars"></div>
                     
                     <div className="phone-report-card">
                        <div className="phone-card-title">Data report</div>
                        <div className="phone-report-grid">
                           <div className="phone-report-stat">
                              <div className="phone-stat-icon-red"><Activity size={10} color="white"/></div>
                              <div>
                                <div className="phone-stat-label">Total profit</div>
                                <div className="phone-stat-val">$ 264.2K</div>
                              </div>
                           </div>
                           <div className="phone-report-stat">
                              <div className="phone-stat-icon-yellow"><BarChart2 size={10}/></div>
                              <div>
                                <div className="phone-stat-label">Sales revenue</div>
                                <div className="phone-stat-val">$ 132.4K</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Giant Red Text */}
        <div className="giant-bg-text">Zimplex</div>
      </section>

      {/* ===== Section 4: Maximize Efficiency ===== */}
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
              <span>analytics service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
              <span>analytics service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
              <span>analytics service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
              <span>analytics service&nbsp;&nbsp;•&nbsp;&nbsp;</span>
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
    </div>
  );
}
