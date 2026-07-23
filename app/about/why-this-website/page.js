"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function WhyThisWebsitePage() {
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
          Why This Website
        </h1>
        
        {/* PARAGRAPH CONTENT WRAPPER */}
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
            I have enjoyed writing very much, but most of the job is built around constraints 
            that I simply don’t choose, which include the specific brand voice of a client, 
            expectations of the target readers, keywords that must appear where the algorithm wants, 
            and much more. This work, just like all other works, has its own discipline and I totally 
            respect it. But most of what I write there is not writing for its own sake but writing in 
            service of clients’ goals.
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
            But this website exists for just the opposite reason.
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
            Here, I have no client to satisfy, no person to write for, no keyword density to maintain, 
            no tone guidance, no SEO checklist, no audience I’m trying to convert. The website contains 
            just the ideas that I follow and wherever they lead. It is the place where I will purely 
            write only because something is worth saying - not because it is optimized to be read.
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
            Everything that you see on this website has been shaped by the same instinct. The interface 
            you see, the layout, the fonts, the way every element sits and behaves - none of these have 
            been borrowed from a template or modeled after some site I admired. It's pure my mind. 
            In case this design reminds you of some website, that would completely surprise me - 
            because I didn’t build it to resemble anything.
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
            Please consider this as my unfiltered practice ground, like a place to think in public, 
            occasionally get it wrong, and stay completely honest about it. If the entire internet 
            is built for someone/something, this small corner I have built is for no one but the thought 
            itself - down to the last tiny choice.
          </p>

        </div>

      </div>

    </main>
  );
}