"use client";
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// 1. DATA ARRAY
const categories = [
  { title: "My Persona", slug: "persona" },
  { title: "The Library", slug: "library" },
  { title: "Cinema", slug: "cinema" },
  { title: "World View", slug: "world-view" },
  { title: "Hobbies", slug: "hobbies" },
  { title: "The Future", slug: "the-future" }
];

// 2. CATEGORY ITEM COMPONENT (The part that was missing!)
function CategoryItem({ title, slug }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.05, 1, 0.05]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.9, 1, 0.9]);

  return (
    <motion.div 
      ref={ref}
      style={{ 
        opacity, scale, height: '18vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', width: '100%',
        position: 'relative', zIndex: 20
      }}
    >
      <Link 
        href={`/about/${slug}`} 
        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'block', width: '100%' }}
      >
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '800', 
          letterSpacing: '-0.04em', textAlign: 'center', margin: 0, lineHeight: '1', color: 'black'
        }}>
          {title}
        </h2>
      </Link>
    </motion.div>
  );
}

// 3. MAIN PAGE COMPONENT
export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredCategories = categories.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%', position: 'relative', overflowX: 'hidden' }}>
      
      {/* TOP GUARD (Fade mask) */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '160px', 
        background: 'linear-gradient(to bottom, white 60%, transparent 100%)',
        zIndex: 80, pointerEvents: 'none' 
      }} />

      {/* PROGRESS BAR */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 60px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '1200px', height: '2px', border: '1px solid rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      {/* LEFT: BACK BUTTON */}
      <nav style={{ position: 'fixed', top: '40px', left: '40px', zIndex: 150 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </motion.div>
        </Link>
      </nav>

      {/* RIGHT: SEARCH BUTTON & INPUT */}
      <div style={{ position: 'fixed', top: '40px', right: '40px', zIndex: 150, display: 'flex', alignItems: 'center', gap: '15px' }}>
        <AnimatePresence>
          {isSearchOpen && (
            <motion.input
              autoFocus
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '200px', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', borderBottom: '1px solid black', outline: 'none', fontSize: '16px', padding: '5px', backgroundColor: 'transparent' }}
            />
          )}
        </AnimatePresence>
        
        <motion.div 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', cursor: 'pointer' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </motion.div>
      </div>

      {/* LIST CONTAINER */}
      <div style={{ paddingTop: '45vh', paddingBottom: '45vh' }}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((item) => (
            <CategoryItem key={item.slug} title={item.title} slug={item.slug} />
          ))
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', color: 'rgba(0,0,0,0.3)', fontWeight: '600', marginTop: '20px' }}>
            No matches found.
          </motion.p>
        )}
      </div>

    </main>
  );
}