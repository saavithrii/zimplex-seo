"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Play, Zap, Activity, Layers, ArrowUp, BarChart2, Plus, Search, Menu, Bell, Sparkles, Users, Target, TrendingUp, UserCheck, ChevronUp, ChevronDown, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_DYNAMIC_WORDS = [
  { text: "SEO growth", gradient: "linear-gradient(135deg, #FE4F32 0%, #FFD13B 100%)" },
  { text: "digital traffic", gradient: "linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)" },
  { text: "market rank", gradient: "linear-gradient(135deg, #34D399 0%, #FBBF24 100%)" },
  { text: "revenue ROI", gradient: "linear-gradient(135deg, #F43F5E 0%, #FFD13B 100%)" },
];

const PERSONAS_DATA = [
  {
    id: "sales",
    title: "Sales Teams",
    icon: Users,
    accentColor: "#FFD13B",
    cardTitle: "Sales & Lead Analytics",
    btnText: "Filter Leads",
    contacts: [
      {
        name: "High-Intent Search Leads",
        role: "B2B Enterprise Search Traffic • +142% MoM",
        match: "96% Match",
        matchType: "green",
        avatarBg: "#FE4F32",
        avatarIcon: Zap
      },
      {
        name: "Competitor Keyword Hijacking",
        role: "1.8K Conversions • #1 Commercial Rank",
        match: "99% High ROI",
        matchType: "green",
        featured: true,
        avatarBg: "#F59E0B",
        avatarIcon: Target
      },
      {
        name: "Outbound Search Signals",
        role: "Intent-Triggered Buyer Traffic • $184K Pipeline",
        match: "94% Qualified",
        matchType: "green",
        avatarBg: "#38BDF8",
        avatarIcon: TrendingUp
      }
    ]
  },
  {
    id: "leadership",
    title: "Leadership & Strategy",
    icon: Target,
    accentColor: "#8B5CF6",
    cardTitle: "Executive SEO & Growth Audit",
    btnText: "Full Report",
    contacts: [
      {
        name: "Organic Market Share",
        role: "Search Visibility vs Competitors • #1 Rank Leader",
        match: "+214% Growth",
        matchType: "green",
        avatarBg: "#8B5CF6",
        avatarIcon: BarChart2
      },
      {
        name: "Revenue Attributed to SEO",
        role: "Total Organic ARR Growth • $1.42M Revenue",
        match: "99% Dominant",
        matchType: "green",
        featured: true,
        avatarBg: "#34D399",
        avatarIcon: Layers
      },
      {
        name: "Domain Authority & PR Links",
        role: "High-PR Backlink Campaign • 88 DR Score",
        match: "95% Strong",
        matchType: "green",
        avatarBg: "#F43F5E",
        avatarIcon: Activity
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Growth",
    icon: TrendingUp,
    accentColor: "#FE4F32",
    cardTitle: "SEO & Content Performance",
    btnText: "Analyze Keywords",
    contacts: [
      {
        name: "Organic Search Visitors",
        role: "Monthly Active Search Visitors • 482K Traffic/mo",
        match: "+184% MoM",
        matchType: "green",
        avatarBg: "#60A5FA",
        avatarIcon: Search
      },
      {
        name: "Top 3 Keyword Rankings",
        role: "High-Volume Commercial Keywords • 1,482 #1 Ranks",
        match: "99% Rank #1",
        matchType: "green",
        featured: true,
        avatarBg: "#F59E0B",
        avatarIcon: Zap
      },
      {
        name: "Technical SEO & Speed Score",
        role: "Google Core Web Vitals • 99/100 Lighthouse",
        match: "98% Optimized",
        matchType: "green",
        avatarBg: "#10B981",
        avatarIcon: Activity
      }
    ]
  },
  {
    id: "product",
    title: "People & Product",
    icon: UserCheck,
    accentColor: "#34D399",
    cardTitle: "Product Demand & Search Intent",
    btnText: "View Insights",
    contacts: [
      {
        name: "Feature Search Demand",
        role: "User Demand for Next Features • 28.4K Searches/mo",
        match: "95% Trending",
        matchType: "green",
        avatarBg: "#EC4899",
        avatarIcon: BarChart2
      },
      {
        name: "Organic Conversion Funnel",
        role: "Search Visitor to Paid User • 4.8% Conversion Rate",
        match: "99% High Intent",
        matchType: "green",
        featured: true,
        avatarBg: "#8B5CF6",
        avatarIcon: Target
      },
      {
        name: "Branded Search Growth",
        role: "Direct Brand Keyword Traffic • 124K Searches/mo",
        match: "97% Growth",
        matchType: "green",
        avatarBg: "#06B6D4",
        avatarIcon: TrendingUp
      }
    ]
  }
];

export default function Home() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [heroWordIndex, setHeroWordIndex] = useState(0);

  /* ---- Refs ---- */
  const heroBadgeRef  = useRef<HTMLDivElement>(null);
  const heroTitleRef  = useRef<HTMLHeadingElement>(null);
  const heroDescRef   = useRef<HTMLParagraphElement>(null);
  const heroCtasRef   = useRef<HTMLDivElement>(null);
  const statWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ---- Hero: Dynamic text & gradient color changing animation ---- */
    const heroTextInterval = setInterval(() => {
      gsap.to(".hero-dynamic-text", {
        y: -22,
        opacity: 0,
        duration: 0.32,
        ease: "power2.in",
        onComplete: () => {
          setHeroWordIndex((prev) => (prev + 1) % HERO_DYNAMIC_WORDS.length);
          gsap.fromTo(
            ".hero-dynamic-text",
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.48, ease: "back.out(1.7)" }
          );
        },
      });
    }, 2800);

    const ctx = gsap.context(() => {

      /* ---- Studio Hero: Badge fade-in ---- */
      gsap.from(heroBadgeRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
      });

      /* ---- Studio Hero: Title slide-up ---- */
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      /* ---- Studio Hero: Awards fade-in ---- */
      gsap.from(heroCtasRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.45,
      });

      /* ---- Studio Hero: Showreel card slide-in/scale ---- */
      gsap.from(heroDescRef.current, {
        opacity: 0,
        scale: 0.95,
        x: 30,
        duration: 0.85,
        ease: "power3.out",
        delay: 0.35,
      });

      /* ---- Hero Analytics: Organic Visibility counter ---- */
      const heroStats1 = { val: 0 };
      gsap.to(heroStats1, {
        val: 78.4,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.4,
        onUpdate: () => {
          const el = document.querySelector(".organic-val");
          if (el) el.textContent = heroStats1.val.toFixed(1) + "%";
        },
      });

      /* ---- Hero Analytics: Keywords in Top 3 counter ---- */
      const heroStats2 = { val: 0 };
      gsap.to(heroStats2, {
        val: 1482,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.4,
        onUpdate: () => {
          const el = document.querySelector(".keywords-val");
          if (el) el.textContent = Math.round(heroStats2.val).toLocaleString();
        },
      });

      /* ---- Hero Analytics: SVG Trend Line Draw ---- */
      const chartPath = document.querySelector(".hero-chart-path");
      if (chartPath) {
        const pathLen = (chartPath as SVGPathElement).getTotalLength();
        gsap.set(chartPath, { strokeDasharray: pathLen, strokeDashoffset: pathLen });
        gsap.to(chartPath, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.inOut",
          delay: 0.5,
        });
      }

      /* ---- Hero Analytics: Dots pop sequence ---- */
      gsap.from(".hero-chart-dot", {
        scale: 0,
        transformOrigin: "center center",
        stagger: 0.2,
        duration: 0.5,
        ease: "back.out(2)",
        delay: 0.7,
      });

      /* ---- Hero Analytics: Floating Keyword badge spring entrance ---- */
      gsap.from(".dashboard-keyword-float", {
        opacity: 0,
        y: 25,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.7)",
        delay: 0.9,
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

      /* ---- Section 2: Widgets Grid Counters & SVG Chart Animations ---- */
      ScrollTrigger.create({
        trigger: ".widgets-grid",
        start: "top 80%",
        onEnter: () => {
          // Total Profit Counter
          const profitObj = { val: 0 };
          gsap.to(profitObj, {
            val: 264.2,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec2-profit-val");
              if (el) el.textContent = `$ ${profitObj.val.toFixed(1)}K`;
            },
          });

          // Visitors Counter
          const visitorsObj = { val: 0 };
          gsap.to(visitorsObj, {
            val: 56,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec2-visitors-val");
              if (el) el.textContent = `${Math.round(visitorsObj.val)}K`;
            },
          });

          // Transactions Counter
          const transObj = { val: 0 };
          gsap.to(transObj, {
            val: 43,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec2-trans-val");
              if (el) el.textContent = `${Math.round(transObj.val)}K`;
            },
          });

          // Rate Counter
          const rateObj = { val: 0 };
          gsap.to(rateObj, {
            val: 58,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec2-rate-val");
              if (el) el.textContent = `+ ${Math.round(rateObj.val)}%`;
            },
          });

          // SVG Line Path Draw
          const sec2Path = document.querySelector(".sec2-chart-path");
          if (sec2Path) {
            const pLen = (sec2Path as SVGPathElement).getTotalLength();
            gsap.set(sec2Path, { strokeDasharray: pLen, strokeDashoffset: pLen });
            gsap.to(sec2Path, {
              strokeDashoffset: 0,
              duration: 1.6,
              ease: "power2.inOut",
            });
          }

          // SVG Dots Pop
          gsap.from(".sec2-chart-dot", {
            scale: 0,
            transformOrigin: "center center",
            stagger: 0.1,
            duration: 0.4,
            ease: "back.out(2)",
            delay: 0.3,
          });

          // Dark Card Avatars Stagger Pop
          gsap.from(".avatar-stack .avatar", {
            scale: 0,
            opacity: 0,
            stagger: 0.12,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.4,
          });
        },
        once: true,
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
      gsap.from(".maximize-word-dark, .maximize-word-gradient", {
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

      /* ---- Section 3: 45% stat widget counter ---- */
      const sec3StatObj = { val: 0 };
      ScrollTrigger.create({
        trigger: ".maximize-section",
        start: "top 80%",
        onEnter: () => {
          gsap.to(sec3StatObj, {
            val: 45,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".stat-percent-val");
              if (el) el.textContent = Math.round(sec3StatObj.val) + "%";
            },
          });
        },
        once: true,
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

      /* ---- Section 4 (Full Control): Cards & Live Analytics Animations ---- */
      gsap.from(".control-card", {
        scrollTrigger: {
          trigger: ".control-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        trigger: ".control-section",
        start: "top 75%",
        onEnter: () => {
          // Conversion Rate Counter: 2.3%
          const convObj = { val: 0 };
          gsap.to(convObj, {
            val: 2.3,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec4-conv-val");
              if (el) el.textContent = `${convObj.val.toFixed(1)}%`;
            },
          });

          // Sales Revenue Counter: $ 131.2K
          const salesObj = { val: 0 };
          gsap.to(salesObj, {
            val: 131.2,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec4-revenue-val");
              if (el) el.textContent = `$ ${salesObj.val.toFixed(1)}K`;
            },
          });

          // Engagement Rate Counter: 47.84%
          const engageObj = { val: 0 };
          gsap.to(engageObj, {
            val: 47.84,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec4-engage-val");
              if (el) el.textContent = `${engageObj.val.toFixed(2)}%`;
            },
          });

          // Total Profit Counter: $ 264.2K
          const sec4ProfitObj = { val: 0 };
          gsap.to(sec4ProfitObj, {
            val: 264.2,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              const el = document.querySelector(".sec4-profit-val");
              if (el) el.textContent = `$ ${sec4ProfitObj.val.toFixed(1)}K`;
            },
          });

          // Mini Bar Chart Heights animation
          gsap.fromTo(
            ".insights-chart-bar",
            { height: 0, opacity: 0 },
            {
              height: (i, target) => target.getAttribute("data-height") || "40px",
              opacity: 1,
              stagger: 0.12,
              duration: 0.8,
              ease: "back.out(1.5)",
              delay: 0.2,
            }
          );
        },
        once: true,
      });

      /* ---- Personas Section: ScrollTriggers ---- */
      gsap.from(".personas-badge, .personas-title", {
        scrollTrigger: {
          trigger: ".personas-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".persona-tab-btn", {
        scrollTrigger: {
          trigger: ".personas-tabs",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all"
      });

      gsap.from(".personas-mockup-box", {
        scrollTrigger: {
          trigger: ".personas-mockup-box",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        scale: 0.92,
        y: 40,
        opacity: 0,
        duration: 0.85,
      });

    });

    return () => {
      clearInterval(heroTextInterval);
      ctx.revert();
    };
  }, []);

  const handleRoleChange = (index: number) => {
    setActiveRoleIndex(index);

    gsap.fromTo(
      ".personas-card",
      { opacity: 0, y: 15, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
    );
  };

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* Header */}
      <header className="studio-header">
        <div className="studio-logo">
          <svg className="studio-logo-icon" width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="black"/>
            <path d="M26 62C24 54 26 44 32 36C40 28 52 24 64 28C69 30 73 34 75 39C76 41 73 44 70 44C65 44 59 46 54 49C49 52 46 57 46 62C46 65 42 67 39 67C34 67 27 64 26 62Z" fill="white"/>
            <circle cx="56" cy="36" r="3.5" fill="black"/>
          </svg>
          zimplex
        </div>

        <nav className="studio-nav">
          <Link href="#">work</Link>
          <Link href="#">services</Link>
          <Link href="#">about</Link>
          <Link href="#">blog</Link>
          <Link href="#">lab</Link>
        </nav>

        <div className="studio-actions">
          <span className="studio-lang">UA</span>
          <Link href="#" className="studio-contact">contact us</Link>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="studio-hero">
        <div className="studio-hero-container">
          {/* Left Column */}
          <div className="studio-hero-left">
            <div className="studio-hero-badge" ref={heroBadgeRef}>
              WE ARE A DESIGN & SEO STUDIO
            </div>
            
            <h1 className="studio-hero-title" ref={heroTitleRef}>
              <div>Crafting</div>
              <div>
                <span className="hero-dynamic-text-wrapper">
                  <span
                    className="hero-dynamic-text"
                    style={{ "--active-gradient": HERO_DYNAMIC_WORDS[heroWordIndex].gradient } as React.CSSProperties}
                  >
                    {HERO_DYNAMIC_WORDS[heroWordIndex].text}
                  </span>
                </span>
              </div>
              <div>and brands</div>
            </h1>

            <div className="studio-hero-awards" ref={heroCtasRef}>
              <div className="awards-label">INTEGRATIONS & GOOGLE SEO PARTNER</div>
              <div className="awards-logos">
                <div className="award-logo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", verticalAlign: "middle" }}>
                    <rect x="3" y="14" width="4" height="6" rx="1"/>
                    <rect x="10" y="8" width="4" height="12" rx="1"/>
                    <rect x="17" y="3" width="4" height="17" rx="1"/>
                  </svg>
                  <span>Analytics</span>
                </div>
                <div className="award-logo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", verticalAlign: "middle" }}>
                    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <path d="M7 11h6"/>
                  </svg>
                  <span>Search Console</span>
                </div>
                <div className="award-logo">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px", verticalAlign: "middle" }}>
                    <path d="M12 2L9 8h6l-3-6z"/>
                    <path d="M9 8h6v12H9z"/>
                    <path d="M6 20h12"/>
                  </svg>
                  <span>Lighthouse</span>
                </div>
                <div className="award-logo">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "6px", verticalAlign: "middle", display: "inline-block" }}>
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 1.56-1.56 2.95-3.24 3.51v2.77h5.08c3.07-2.83 4.82-7 4.82-11.83 0-.6-.05-1.18-.15-1.72z" fill="#4285F4"/>
                    <path d="M12.18 21.43c2.75 0 5.06-.91 6.75-2.46l-5.08-2.77c-1.37.93-3.14 1.47-5.08 1.47-3.91 0-7.22-2.64-8.4-6.22H1.2v2.85c2.32 4.6 7.07 7.13 11.98 7.13z" fill="#34A853"/>
                    <path d="M3.78 11.45c-.3-1-.3-2.07 0-3.07V5.53H1.2a11.94 11.94 0 0 0 0 8.77l2.58-2.85z" fill="#FBBC05"/>
                    <path d="M12.18 2.57c1.88 0 3.57.65 4.9 1.92l3.66-3.66A11.95 11.95 0 0 0 1.2 5.53l2.58 2.85c1.18-3.58 4.49-6.22 8.4-6.22z" fill="#EA4335"/>
                  </svg>
                  <span>Google Partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="studio-hero-right" ref={heroDescRef}>
            <div className="seo-dashboard-container">
              {/* Header inside the dashboard */}
              <div className="dashboard-header">
                <div className="dashboard-title-group">
                  <div className="dashboard-badge">LIVE TRACKING</div>
                  <h4 className="dashboard-title">SEO Overview</h4>
                </div>
                <span className="dashboard-sync-tag">Updated 2m ago</span>
              </div>

              {/* Grid of Mini Stats */}
              <div className="dashboard-stats-grid">
                <div className="dash-stat-card">
                  <div className="dash-stat-label">Organic Visibility</div>
                  <div className="dash-stat-value-row">
                    <span className="dash-stat-value organic-val">0.0%</span>
                    <span className="dash-stat-change green"><ArrowUp size={12} /> +12.8%</span>
                  </div>
                </div>

                <div className="dash-stat-card">
                  <div className="dash-stat-label">Keywords in Top 3</div>
                  <div className="dash-stat-value-row">
                    <span className="dash-stat-value keywords-val">0</span>
                    <span className="dash-stat-change green"><ArrowUp size={12} /> +46</span>
                  </div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="dashboard-chart-box">
                <div className="chart-header">
                  <span className="chart-title">Visibility Growth</span>
                  <span className="chart-legend">Oct 1 - Oct 30</span>
                </div>
                <div className="chart-svg-wrapper">
                  <svg width="100%" height="110" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="320" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="55" x2="320" y2="55" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="90" x2="320" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                    
                    {/* Gradient Area under curve */}
                    <path d="M0 90 L40 70 L80 80 L120 50 L160 65 L200 30 L240 40 L280 15 L320 25 L320 110 L0 110 Z" fill="url(#chartGrad)" opacity="0.15" />
                    
                    {/* Line path */}
                    <path className="hero-chart-path" d="M0 90 L40 70 L80 80 L120 50 L160 65 L200 30 L240 40 L280 15 L320 25" stroke="#FE4F32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    {/* Pulsing Dots */}
                    <circle className="hero-chart-dot" cx="40"  cy="70" r="4" fill="#FE4F32" />
                    <circle className="hero-chart-dot" cx="120" cy="50" r="4" fill="#FE4F32" />
                    <circle className="hero-chart-dot" cx="200" cy="30" r="4" fill="#FE4F32" />
                    <circle className="hero-chart-dot" cx="280" cy="15" r="5" fill="#FE4F32" stroke="white" strokeWidth="2" />
                    
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="110" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE4F32" />
                        <stop offset="1" stopColor="#FE4F32" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Mini keyword tracker widget floating */}
              <div className="dashboard-keyword-float">
                <div className="keyword-header">
                  <span className="keyword-title">Top Rankings</span>
                  <span className="badge-yellow">1st Page</span>
                </div>
                <div className="keyword-rows">
                  <div className="keyword-row">
                    <span className="keyword-name">zimplex seo service</span>
                    <span className="keyword-rank">#1</span>
                  </div>
                  <div className="keyword-row">
                    <span className="keyword-name">rank tracking dashboard</span>
                    <span className="keyword-rank-up">#3 <ArrowUp size={10} /> +4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Key Benefits (Widgets Grid) ===== */}
      <section className="content-section" style={{ width: "100%", maxWidth: "80rem", marginTop: "2.2rem" }}>
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
                  <div className="profit-value sec2-profit-val">$ 0K</div>
                </div>
              </div>
              <div className="visitors-box">
                <div className="visitors-label">Visitors</div>
                <div className="visitors-row">
                  <span className="visitors-value sec2-visitors-val">0K</span>
                  <span className="badge-green"><ArrowUp size={11} /> +14%</span>
                </div>
              </div>
              <div>
                <div className="visit-stats-label">Visit statistics</div>
                <svg width="100%" height="75" viewBox="0 0 260 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="sec2-chart-path" d="M0 65 L37 48 L74 55 L111 38 L148 45 L185 18 L222 28 L260 8" stroke="var(--accent-yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <circle className="sec2-chart-dot" cx="0"   cy="65" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="37"  cy="48" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="74"  cy="55" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="111" cy="38" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="148" cy="45" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="185" cy="18" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="222" cy="28" r="3.5" fill="var(--accent-yellow)" />
                  <circle className="sec2-chart-dot" cx="260" cy="8"  r="3.5" fill="var(--accent-yellow)" />
                </svg>
                <div className="rate-badge">
                  <div className="rate-label">Rate</div>
                  <div className="rate-value sec2-rate-val">+ 0%</div>
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
                <div className="transactions-value sec2-trans-val">0K</div>
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


      {/* ===== Section: Personas ("Smarter data for every role") ===== */}
      <section className="personas-section">
        {/* Left Column: Title & Role Tabs */}
        <div className="personas-left">
          <div className="personas-badge">
            <Sparkles size={14} color="#FE4F32" />
            <span>Personas</span>
          </div>

          <h2 className="personas-title">
            Smarter data<br />
            <span className="personas-title-gradient">for every role</span>
          </h2>

          <div className="personas-tabs">
            {PERSONAS_DATA.map((persona, index) => {
              const IconComp = persona.icon;
              const isActive = activeRoleIndex === index;
              return (
                <button
                  key={persona.id}
                  onClick={() => handleRoleChange(index)}
                  className={`persona-tab-btn ${isActive ? "active" : "inactive"}`}
                  style={{ "--accent-color": persona.accentColor } as React.CSSProperties}
                >
                  <div className="persona-tab-btn-content">
                    <div className="persona-tab-icon-wrapper">
                      <IconComp size={18} />
                    </div>
                    <span>{persona.title}</span>
                  </div>
                  {isActive && <div className="persona-tab-accent-indicator" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Mockup Card & Accordions */}
        <div className="personas-right">
          {/* Top Card Box with Grid Background & Ambient Lighting */}
          <div className="personas-mockup-box">
            <div className="personas-card">
              <div className="personas-card-header">
                <div className="personas-card-header-left">
                  <User size={18} color="#0F172A" />
                  <span>{PERSONAS_DATA[activeRoleIndex].cardTitle}</span>
                  <span className="personas-live-tag">
                    <span className="personas-live-dot" /> LIVE
                  </span>
                </div>
                <button className="personas-find-all-btn">
                  {PERSONAS_DATA[activeRoleIndex].btnText}
                </button>
              </div>

              <div className="personas-contact-rows">
                {PERSONAS_DATA[activeRoleIndex].contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className={`persona-contact-row ${contact.featured ? "featured" : ""}`}
                  >
                    <div className="persona-contact-left">
                      <div
                        className="persona-avatar"
                        style={{ backgroundColor: contact.avatarBg }}
                      >
                        {contact.avatarIcon && <contact.avatarIcon size={18} color="#FFFFFF" />}
                      </div>
                      <div className="persona-contact-info">
                        <div className="persona-contact-name">{contact.name}</div>
                        <div className="persona-contact-role">{contact.role}</div>
                      </div>
                    </div>
                    <div className={`persona-match-badge ${contact.matchType}`}>
                      {contact.match}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Section 3: Maximize Efficiency ===== */}
      <section className="maximize-section" style={{ width: "100%", maxWidth: "80rem", marginTop: "1.8rem" }}>

        {/* Headline */}
        <div className="maximize-headline">
          <div className="maximize-line">
            <span className="maximize-word-dark">Maximize</span>
            <span className="maximize-word-gradient">efficiency</span>
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
              <div className="stat-percent stat-percent-val">0%</div>
              <div className="stat-label">System grow<br/>faster</div>
            </div>
          </div>

          {/* Interactive Automation Chips replacing the old marquee pill */}
          <div className="automation-chips-row">
            <div className="automation-chip chip-yellow">
              <Zap size={16} color="#0F172A" />
              <span>Automated Rank Tracking</span>
              <span className="chip-badge">+14.2%</span>
            </div>
            <div className="automation-chip chip-dark">
              <Sparkles size={16} color="#FFD13B" />
              <span>AI Keyword Optimization</span>
              <span className="chip-pulse-dot" />
            </div>
            <div className="automation-chip chip-white">
              <TrendingUp size={16} color="#34D399" />
              <span>Real-Time Traffic Scaling</span>
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
                  <div className="conv-val-box sec4-conv-val">0.0%</div>
                  <div className="conv-desc">Percentage of website visitors</div>
                </div>

                {/* Sales Revenue Card */}
                <div className="mockup-sales-revenue">
                  <div className="sales-rev-header">Sales revenue</div>
                  <div className="sales-rev-val sec4-revenue-val">$ 0K</div>
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
                    <span className="sec4-engage-val">0.00%</span>
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
                      <div className="insights-profit-val sec4-profit-val">$ 0K</div>
                      <div className="insights-pill">Data visualization</div>
                    </div>

                    {/* Mini chart visual */}
                    <div className="insights-chart-preview">
                      <div className="insights-chart-bar" data-height="30px" style={{height: "0px"}}></div>
                      <div className="insights-chart-bar" data-height="45px" style={{height: "0px"}}></div>
                      <div className="insights-chart-bar active" data-height="60px" style={{height: "0px"}}></div>
                      <div className="insights-chart-bar" data-height="25px" style={{height: "0px"}}></div>
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
