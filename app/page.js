"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. TYPEWRITER COMPONENT
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
      setTimeout(() => setPhase("writingTitle"), 800);
    } 
    
    else if (phase === "writingTitle") {
      if (text.length < title.length) {
        setTimeout(() => setText(title.slice(0, text.length + 1)), 50);
      } else {
        setTimeout(() => setPhase("erasing"), 1200);
      }
    } 
    
    else if (phase === "erasing") {
      if (text.length > 0) {
        setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setPhase("writingSlogan");
      }
    } 
    
    else if (phase === "writingSlogan") {
      if (text.length < slogan.length) {
        setTimeout(() => setText(slogan.slice(0, text.length + 1)), 25);
      } else {
        setTimeout(onComplete, 300); 
      }
    }
  }, [text, phase]);

  return (
    <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic' }}>
      {text}
      <span style={{ 
        opacity: cursorVisible ? 1 : 0, 
        display: 'inline-block',
        transform: 'skewX(-14deg)', 
        marginLeft: '4px',
        fontWeight: '300', 
        fontFamily: 'sans-serif', 
        fontStyle: 'normal' 
      }}>
        |
      </span>
    </span>
  );
};

// 2. MAIN HERO PAGE COMPONENT
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
      backgroundColor: 'white', 
      minHeight: '100dvh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 40px 10dvh 40px', 
      boxSizing: 'border-box'
    }}>
      
      {/* THE EDITORIAL HEADING */}
      <motion.h1 
        style={{ 
          fontFamily: '"Cormorant Garamond", serif', 
          fontStyle: 'italic',
          fontSize: 'clamp(2.3rem, 7.5vw, 4.5rem)', 
          fontWeight: '700', 
          letterSpacing: '0.01em', 
          textAlign: 'center', 
          maxWidth: '1050px',
          lineHeight: '1.15', 
          color: '#000000', 
          marginBottom: '60px', 
          minHeight: '3.3em'
        }}
      >
        {hasVisited ? (
          "Shaping Ideas Into Words That Inform, Persuade, and Endure."
        ) : (
          <TypewriterSequence onComplete={handleAnimationComplete} />
        )}
      </motion.h1>

      {/* THE INTERACTIVE BUTTONS CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showButtons ? 1 : 0, y: showButtons ? 0 : 10 }}
        transition={{ duration: hasVisited ? 0 : 0.4, ease: "easeOut" }}
        style={{ 
          display: 'flex', 
          gap: '24px', 
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
       
<Link href="/about" style={{ textDecoration: 'none' }}>
  <div 
    className="hero-btn" 
    style={{ 
      backgroundColor: 'black', 
      color: 'white' 
    }}
  >
    About Me
  </div>
</Link>


<Link href="/works" style={{ textDecoration: 'none' }}>
  <div 
    className="hero-btn" 
    style={{ 
      backgroundColor: 'white', 
      color: 'black', 
      border: '1px solid rgba(0,0,0,0.15)' 
    }}
  >
    My Works
  </div>
</Link>
      </motion.div>
    </main>
  );
}