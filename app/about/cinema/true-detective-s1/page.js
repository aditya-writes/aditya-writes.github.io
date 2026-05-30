"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function TrueDetectiveReviewPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main style={{ 
      backgroundColor: 'white', minHeight: '120dvh', width: '100%', 
      position: 'relative', padding: '160px 40px 80px 40px', boxSizing: 'border-box' 
    }}>
      
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '180px', background: 'linear-gradient(to bottom, white 65%, transparent 100%)', zIndex: 80, pointerEvents: 'none' }} />

      <nav style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 150 }}>
        <Link href="/about/cinema" style={{ textDecoration: 'none' }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </motion.div>
        </Link>
      </nav>

      <div style={{ position: 'fixed', top: '104px', left: 0, right: 0, height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative', zIndex: 20 }}>
        <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '700', color: '#000000', marginBottom: '45px', lineHeight: '1.1', letterSpacing: '-0.01em' }}>
          True Detective Season 1: Cosmic Horror in the Bayou
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '21px', lineHeight: '1.8', textAlign: 'justify', color: '#000000', letterSpacing: '0.01em' }}>
            The first season of True Detective stands as a monumental achievement in television history, seamlessly bleeding neo-noir detective dynamics with heavy, philosophical cosmic horror. The landscape of Southern Louisiana functions less like a backdrop and more like an ominous entity that swallows human ambition whole.
          </p>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '21px', lineHeight: '1.8', textAlign: 'justify', color: '#000000', letterSpacing: '0.01em' }}>
            Through the structural friction of dual timelines, the series dissects the heavy toll of obsession. Nic Pizzolatto's writing forces a deep exploration into the cyclic nature of human violence, framed beautifully by Rust Cohle's bleak, uncompromising worldview.
          </p>
        </div>
      </div>
    </main>
  );
}