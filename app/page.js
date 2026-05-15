"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TypewriterSequence = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("loading");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const title = "Content Writer";
    const slogan = "Shaping Ideas Into Words That Inform, Persuade, and Endure.";
    
    if (phase === "loading") {
      setTimeout(() => setPhase("writingTitle"), 800); // Shorter initial wait
    } 
    
    else if (phase === "writingTitle") {
      if (text.length < title.length) {
        setTimeout(() => setText(title.slice(0, text.length + 1)), 50); // Faster typing
      } else {
        setTimeout(() => setPhase("erasing"), 1200); // Shorter hold
      }
    } 
    
    else if (phase === "erasing") {
      if (text.length > 0) {
        setTimeout(() => setText(text.slice(0, -1)), 30); // Fast erase
      } else {
        setPhase("writingSlogan");
      }
    } 
    
    else if (phase === "writingSlogan") {
      if (text.length < slogan.length) {
        setTimeout(() => setText(slogan.slice(0, text.length + 1)), 25); // Very fast slogan typing
      } else {
        // Delay before showing buttons after text finishes
        setTimeout(onComplete, 300); 
      }
    }
  }, [text, phase]);

  return (
    <span>
      {text}
      <span style={{ opacity: cursorVisible ? 1 : 0, fontWeight: '200' }}>|</span>
    </span>
  );
};

export default function HeroPage() {
  const [hasVisited, setHasVisited] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('heroAnimated');
    if (visited) {
      setHasVisited(true);
      setShowButtons(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem('heroAnimated', 'true');
    setShowButtons(true);
  };

  return (
    <main style={{ 
      backgroundColor: 'white', minHeight: '100vh', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' 
    }}>
      
      {/* 1. SCALED DOWN HEADING WITH ANTIGRAVITY-STYLE FONT */}
      <motion.h1 
        style={{ 
          // 1. THE FONT: Space Grotesk (mimics the wide, tech-minimalism of Yapari)
          fontFamily: '"Space Grotesk", "Inter", sans-serif', 
          
          fontSize: 'clamp(2rem, 7vw, 4.2rem)', 
          
          // 2. THE WEIGHT: Kept light (300) for that delicate, modern feel
          fontWeight: '300', 
          
          // 3. THE SPACING: Geometric fonts look best with a touch of negative tracking
          letterSpacing: '-0.02em', 
          
          textAlign: 'center', 
          maxWidth: '1000px',
          lineHeight: '1.1', 
          color: 'rgba(0,0,0,0.85)', 
          marginBottom: '40px', 
          minHeight: '3.3em'
        }}
      >
        {hasVisited ? (
          "Shaping Ideas Into Words That Inform, Persuade, and Endure."
        ) : (
          <TypewriterSequence onComplete={handleAnimationComplete} />
        )}
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showButtons ? 1 : 0, y: showButtons ? 0 : 10 }}
        // Set to 0.4s for a much snappier entrance
        transition={{ duration: hasVisited ? 0 : 0.4, ease: "easeOut" }}
        style={{ display: 'flex', gap: '20px' }}
      >
        <Link href="/about" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '14px 36px', backgroundColor: 'black', color: 'white', borderRadius: '100px', fontSize: '14px', fontWeight: '600' }}>
            About Me
          </div>
        </Link>
        <Link href="/works" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '14px 36px', backgroundColor: 'white', color: 'black', borderRadius: '100px', border: '1px solid rgba(0,0,0,0.1)', fontSize: '14px', fontWeight: '600' }}>
            My Works
          </div>
        </Link>
      </motion.div>
    </main>
  );
}