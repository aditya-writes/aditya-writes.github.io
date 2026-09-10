"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';

const works = [
  { 
    title: "The Illusion of Autonomy", 
    slug: "the-illusion-of-autonomy" 
  },
  { 
    title: "Calm Your Fingers, Calm Your Mind", 
    slug: "calm-your-fingers-calm-your-mind" 
  }
];

function WorkItem({ title, slug }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.2, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.96, 1, 0.96]);

  return (
    <motion.div 
      ref={ref}
      style={{ 
        opacity, 
        scale, 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%',
        margin: '24px 0',        // Controlled distance between the two entries
        position: 'relative', 
        zIndex: 20
      }}
    >
      <Link 
        href={`/works/${slug}`} 
        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-block', maxWidth: '90%' }}
      >
        <h2 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.9rem, 5vw, 3.4rem)', 
          fontWeight: '600',
          letterSpacing: '-0.01em', 
          textAlign: 'center', 
          margin: 0, 
          lineHeight: '1.08',    // Tightens the space between lines inside the same title
          color: '#000000',
          padding: '0 12px',
          display: 'inline-flex',
          alignItems: 'baseline', // Keeps the bullet anchored to line 1 even when wrapped
          justifyContent: 'center',
          gap: '10px'
        }}>
          <span style={{ 
            fontSize: '0.6em', 
            transform: 'translateY(-2px)',
            opacity: 0.7 
          }}>
            •
          </span>
          <span>{title}</span>
        </h2>
      </Link>
    </motion.div>
  );
}

export default function WorksIndexPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%', position: 'relative', overflowX: 'hidden' }}>
      
      {/* TOP FADE MASK */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '180px', 
        background: 'linear-gradient(to bottom, white 65%, transparent 100%)',
        zIndex: 80, pointerEvents: 'none' 
      }} />

      {/* FIXED NAVIGATION */}
      <nav style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 150 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              border: '1px solid rgba(0,0,0,0.1)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: 'white' 
            }}
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

      {/* WORKS LIST CONTAINER */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        paddingTop: '24vh', 
        paddingBottom: '24vh' 
      }}>
        {works.map((item) => (
          <WorkItem key={item.slug} title={item.title} slug={item.slug} />
        ))}
      </div>

    </main>
  );
}