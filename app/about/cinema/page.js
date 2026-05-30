"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';

// Your three specific cinematic review entries
const reviews = [
  { title: "Severance", slug: "severance" },
  { title: "True Detective S-1", slug: "true-detective-s1" },
  { title: "GATTACA", slug: "gattaca" }
];

function ReviewItem({ title, slug }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.1, 1, 0.1]);
  const scale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.95, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      className="category-gap" // Inherits the compact mobile spacing from globals.css
      style={{ 
        opacity, scale, display: 'flex',
        alignItems: 'center', justifyContent: 'center', width: '100%',
        position: 'relative', zIndex: 20
      }}
    >
      <Link 
        href={`/about/cinema/${slug}`} 
        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'block', width: '100%' }}
      >
        <h2 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', 
          fontWeight: '700', // Locked to bold deep black
          letterSpacing: '0.02em', 
          textAlign: 'center', 
          margin: 0, 
          lineHeight: '1.1', 
          color: '#000000'
        }}>
          {title}
        </h2>
      </Link>
    </motion.div>
  );
}

export default function CinemaIndexPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%', position: 'relative', overflowX: 'hidden' }}>
      
      {/* TOP GRADIENT FADE MASK */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '180px', 
        background: 'linear-gradient(to bottom, white 65%, transparent 100%)',
        zIndex: 80, pointerEvents: 'none' 
      }} />

      {/* FIXED BACK BUTTON: Points smoothly back to main /about list */}
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

      {/* STATIC FIXED HEADER: Title for the collection sub-index */}
      <div style={{ position: 'fixed', top: '42px', right: '40px', zIndex: 140 }}>
        <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '12px', uppercase: 'true', letterSpacing: '0.15em', color: 'rgba(0,0,0,0.4)' }}>
          COLLECTION / CINEMA
        </span>
      </div>

      {/* READING PROGRESS BAR */}
      <div style={{ position: 'fixed', top: '104px', left: 0, right: 0, height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      {/* INTERACTIVE REVIEW SCROLL LIST */}
      <div style={{ paddingTop: '45vh', paddingBottom: '45vh' }}>
        {reviews.map((item) => (
          <ReviewItem key={item.slug} title={item.title} slug={item.slug} />
        ))}
      </div>

    </main>
  );
}