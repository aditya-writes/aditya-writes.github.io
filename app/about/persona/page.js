"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function PersonaPage() {
  // 1. Hook into the viewport scroll for the reading progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main style={{ 
      backgroundColor: 'white', 
      minHeight: '120dvh', // Extra height to guarantee scroll runway
      width: '100%', 
      position: 'relative', 
      padding: '160px 40px 80px 40px', 
      boxSizing: 'border-box' 
    }}>
      
      {/* 2. TOP FADE MASK: Ensures text ghosts out beautifully as you scroll up */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '180px', 
        background: 'linear-gradient(to bottom, white 65%, transparent 100%)',
        zIndex: 80, pointerEvents: 'none' 
      }} />

      {/* 3. FIXED NAVIGATION: Exact match to the list page layout */}
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

      {/* 4. PROGRESS BAR: Anchored exactly at top 104px to maintain global alignment */}
      <div style={{ position: 'fixed', top: '104px', left: 0, right: 0, height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      {/* TYPOGRAPHY & CONTENT CONTAINER */}
      <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 20 }}>
        
        {/* SECTION 1: TITLE */}
        <h1 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '700', 
          color: '#000000',
          marginBottom: '45px',
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }}>
          Beyond What Meets the Eye
        </h1>
        
        {/* SECTION 1: BODY TEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '60px' }}>
          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', // Corrected text justification property
            color: '#000000', 
            letterSpacing: '0.01em'
          }}>
            I see myself as a person who is drawn to details that usually don’t grab much attention. 
            Whether it be the pacing of a narrative, the tone hidden beneath conversation, or other 
            elements that shape the larger experience, I am always interested in what lies beneath 
            the surface. This instinct is used on a daily basis to find out why certain ideas resonate 
            and what makes clarity win against excess. I strongly believe that it is attention to detail 
            that separates ordinary work from the one that feels thoughtfully constructed. 
          </p>
        </div>

        {/* SECTION 2: TITLE */}
        <h1 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '700', 
          color: '#000000',
          marginBottom: '45px',
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }}>
          The Habit That Stayed
        </h1>

        {/* SECTION 2: BODY TEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '60px' }}>
          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8',
            textAlign: 'justify', // Corrected text justification property
            color: '#000000', 
            letterSpacing: '0.01em'
          }}>
            Relationship with literature is not limited to books alone. Enjoying storytelling 
            in many forms is my interest, which includes novels, poetry, music, films, essays, 
            and even long-form conversations that reveal something meaningful about people and 
            the world. I think it's mainly because what intrigues me is not the medium but the 
            exceptional ability of a story to leave a lasting impression through perspective or 
            even silence. Most of the way I observe, think, and communicate has been shaped by 
            the exploration of these varying aspects. 
          </p>
        </div>

        {/* SECTION 3: TITLE */}
        <h1 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '700', 
          color: '#000000',
          marginBottom: '45px',
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }}>
          A Delayed Recognition
        </h1>

        {/* SECTION 3: BODY TEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '60px' }}>
          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8',
            textAlign: 'justify', // Corrected text justification property
            color: '#000000', 
            letterSpacing: '0.01em'
          }}>
            I have worked as a web developer and ABAP developer in the past, but writing 
            was always a part of my daily routine. I had some clients to write for throughout 
            my journey. Despite prevailing zeal for storytelling, I viewed creative work as less 
            significant than development (though I enjoyed writing more). This is the main reason 
             why I delayed my willingness to identify as a writer. But some recent situations 
             changed my perception significantly, and I care less about what others will think. 
          </p>
        </div>

        {/* SECTION 4: TITLE */}
        <h1 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: '700', 
          color: '#000000',
          marginBottom: '45px',
          lineHeight: '1.1',
          letterSpacing: '-0.01em'
        }}>
          Proving the Power of Words
        </h1>

        {/* SECTION 4: BODY TEXT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8',
            textAlign: 'justify', // Corrected text justification property
            color: '#000000', 
            letterSpacing: '0.01em'
          }}>
            I focus on adding substance to the internet through writing that can hold attention 
            and educate without relying on visuals and short-term distractions. To me, reading 
            is still the best experience that rewards patience, and it is the dimension where focus, 
            understanding, and imagination work together at their highest level. And what better way 
            to express the learnings from reading than writing!
          </p>
        </div>
        
      </div>

    </main>
  );
}