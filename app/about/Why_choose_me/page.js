"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function WhyChooseMePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main style={{ 
      backgroundColor: 'white', 
      minHeight: '120dvh', 
      width: '100%', 
      position: 'relative', 
      padding: '160px 40px 80px 40px', 
      boxSizing: 'border-box' 
    }}>
      
      {/* TOP FADE MASK */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '180px', 
        background: 'linear-gradient(to bottom, white 65%, transparent 100%)',
        zIndex: 80, pointerEvents: 'none' 
      }} />

      {/* FIXED NAVIGATION */}
      <nav style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 150 }}>
        <Link href="/about" style={{ textDecoration: 'none' }}>
          <motion.div 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </motion.div>
        </Link>
      </nav>

      {/* FIXED PROGRESS BAR */}
      <div style={{ position: 'fixed', top: '104px', left: 0, right: 0, height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      {/* TYPOGRAPHY CONTENT COMPONENT */}
      <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 20 }}>
        
        {/* MAIN TITLE */}
        <h1 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '700', 
          color: '#000000',
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          margin: 0,
          marginBottom: '32px'
        }}>
          Why Choose Me
        </h1>
        
        {/* PARAGRAPH & SUBTITLE STACK */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            Having spent seven years in this craft, I no longer think of writing as one skill but treat it as a discipline that needs to be learned for every audience, every industry, and every voice that the brand needs to sound like. This range did not happen by accident but resulted from thousands of pieces I wrote across formats and industries that hardly overlap.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            A track record measured in millions of words
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            In my career so far, I have moved from part-time to full-time, and throughout it, I’ve personally analyzed more than 11 million words through Grammarly alone, not to mention this number does not count the substantial volumes written and refined on clients’ own paid accounts across numerous projects. Each and every one of these words was revised, scrutinized, and held to a standard before they reached the target readers.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            Range, Not Repetition
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            Throughout these years, I have written blogs, press releases, articles, and social media captions by the thousands for industries that demand differing instincts:
          </p>

          <p style={{ 
  fontFamily: '"Cormorant Garamond", serif', 
  fontSize: '21px', 
  lineHeight: '1.8', 
  textAlign: 'justify', 
  color: '#000000', 
  letterSpacing: '0.01em', 
  margin: 0 
}}>
  <a 
    href="https://drive.google.com/drive/folders/1Q6fKuTXiYe7ytxM1W1YgCM-WF0hoW4jJ" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Car Restoration</strong>
  </a> — Technical accuracy while respecting craft.<br />

  <a 
    href="https://drive.google.com/drive/folders/15P2elBD_gxw_KtTkgZ7TxBsAIk_SKxe2" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Career Training</strong>
  </a> — Utmost clarity, but with a motivating tone.<br />

  <a 
    href="https://drive.google.com/drive/folders/1uePuHeO3kA_0lnJZgWYfZMIg49SYRHAI" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Dental Health</strong>
  </a> — Trust-first content for clients where even one wrong claim can cost credibility.<br />

  <a 
    href="https://drive.google.com/drive/folders/123VA7rTxy_xaWhWLl8EVZWW6ccJEC0Cg" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Domestic and International Tour</strong>
  </a> — Destination and itinerary content that is especially built to inform and inspire.<br />

  <a 
    href="https://drive.google.com/drive/folders/19kRxMqqhiyM7LrjWcsXNwSQBpy9aGnSH" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Firearms (US-based client)</strong>
  </a> — Compliance-aware precision that is entirely free from careless phrasing.<br />

  <a 
    href="https://drive.google.com/drive/folders/1g1rvzZnnaggcRFO9z-PHqjsxn8BjHkj6" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Healthcare</strong>
  </a> — Highly-researched and clear content that addresses the anxiety of readers while being scientifically accurate.<br />

  <a 
    href="https://drive.google.com/drive/folders/1on11sRv_RMrV2eHLug9iBbJ01aENLmoh" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Luxury Car Care</strong>
  </a> — Detail and precision-led writing for an audience that always expects high standards.<br />

  <a 
    href="https://drive.google.com/drive/folders/1Aj4Fn_g_OsMTYicwOSsSDcDr-vD1l1qe" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Luxury Travel</strong>
  </a> — Wrote for some high-end luxury travel agencies dedicated to Palace on Wheels and Maharajas Express, where writing must match the experience by being refined, evocative, and worthy of the journey that it is describing.<br />

  <a 
    href="https://drive.google.com/drive/folders/1Zb6ltoinR5fpYM7t7GT7RYDQIZR9293z" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Makeup & Wellness</strong>
  </a> — Content that is voice-driven and elegantly balances honesty with aspiration.<br />

  <a 
    href="https://drive.google.com/drive/folders/1pjvrklPNY-fKufE2EAVN4g-jkVyXputh" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Photography</strong>
  </a> — Aimed at delivering visual craft into words with precision.<br />

  <a 
    href="https://drive.google.com/drive/folders/1yG8-zE_8VIiJdVP_2msR49Q1UGklkwUX" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Property Care</strong>
  </a> — Detail-driven and practical content that must be able to hold the reader’s attention.<br />

  <a 
    href="https://drive.google.com/drive/folders/1OAsIkc4fI_j5prsH2xfhZ05_go1VBd4h" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '4px' }}
  >
    <strong>Web Development & SEO</strong>
  </a> — Writing where technical accuracy must not come at the cost of readability or the reverse.
</p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            Academic Rigor, When the Work Calls For It
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            My experience is not limited to commercial SEO writing only because I have also written thesis-level academic work — an area with strict conventions, from Harvard-style referencing to correct <em>et al.</em> usage in citations. It is a whole different discipline as compared to blog writing with zero room for looseness. Experience in these is the main reason why precision is not optional in anything that I write.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            A Longer Pursuit, Alongside the Shorter Ones
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            Underneath these client works lies a novella-in-progress, <em>The Kings We End Up Making</em> — the type of writing with no brief, no deadline, and no one to answer to but the story itself. This is a very different muscle as compared to commercial copy. But I am building it with the same instinct: paying close attention to get the words precisely right, even if no one is checking. I will be uploading it chapter-wise on this website in the My Works/Story section.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            What This Range Means For You
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            Many writers specialise because they think that switching registers is difficult — moving from one technical web dev explainer to the lyrical tone that a luxury train journey deserves needs very different instincts, and my past seven years have been spent building that same. I have written for so many industries that very few briefs surprise me anymore.
          </p>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            If you need content that is technically sound, emotionally resonant, and highly on-brand — no matter how demanding or niche the subject is — that is the exact work I have been doing, at scale, for years.
          </p>

        </div>

      </div>

    </main>
  );
}