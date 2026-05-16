"use client";
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// DATA ARRAY
const categories = [
  { title: "My Persona", slug: "persona", tags: ["Design", "Personal"] },
  { title: "The Library", slug: "library", tags: ["Books", "Culture"] },
  { title: "Cinema", slug: "cinema", tags: ["Media", "Culture"] },
  { title: "World View", slug: "world-view", tags: ["Tech", "Society"] },
  { title: "Hobbies", slug: "hobbies", tags: ["Personal", "Life"] },
  { title: "The Future", slug: "the-future", tags: ["Tech", "Design"] }
];

const ALL_TAGS = ["All", "Tech", "Design", "Culture", "Personal"];

function CategoryItem({ title, slug }) {
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
      className="category-gap"
      style={{ 
        opacity, scale, display: 'flex',
        alignItems: 'center', justifyContent: 'center', width: '100%',
        position: 'relative', zIndex: 20
      }}
    >
      <Link 
        href={`/about/${slug}`} 
        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'block', width: '100%' }}
      >
        <h2 style={{ 
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', 
          fontWeight: '700', 
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

export default function AboutPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All"); 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredCategories = categories.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag === "All" || item.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%', position: 'relative', overflowX: 'hidden' }}>
      
      {/* 1. TOP MASK: Increased depth to cleanly hide text behind the new layout layout */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '180px', 
        background: 'linear-gradient(to bottom, white 65%, transparent 100%)',
        zIndex: 80, pointerEvents: 'none' 
      }} />

      {/* 2. LEFT: BACK BUTTON (Anchored at the absolute top-left) */}
      <nav style={{ position: 'fixed', top: '32px', left: '32px', zIndex: 150 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <motion.div 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </motion.div>
        </Link>
      </nav>

      {/* 3. RIGHT: SEARCH CONTROLS (Anchored at the absolute top-right) */}
      <div style={{ position: 'fixed', top: '32px', right: '32px', zIndex: 150, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.input
                autoFocus
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '180px', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                placeholder="Search text..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ border: 'none', borderBottom: '1px solid black', outline: 'none', fontSize: '16px', padding: '5px', backgroundColor: 'transparent', fontFamily: 'inherit' }}
              />
            )}
          </AnimatePresence>
          
          <motion.div 
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isSearchOpen) { setSearchQuery(""); setActiveTag("All"); }
            }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', cursor: 'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </motion.div>
        </div>

        {/* MICRO-TAGS TRAY */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ display: 'flex', gap: '8px', maxWidth: '280px', flexWrap: 'wrap', justifyContent: 'flex-end' }}
            >
              {ALL_TAGS.map((tag) => {
                const isSelected = activeTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    style={{
                      fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '6px 14px', borderRadius: '50px', cursor: 'pointer',
                      border: '1px solid rgba(0,0,0,0.1)', backgroundColor: isSelected ? 'black' : 'white', color: isSelected ? 'white' : 'rgba(0,0,0,0.6)',
                      transition: 'all 0.2s ease', fontFamily: 'inherit'
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. PROGRESS BAR: Now cleanly dropped below the navigation elements */}
      <div style={{ position: 'fixed', top: '104px', left: 0, right: 0, height: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', backgroundColor: 'rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      {/* LIST CONTAINER */}
      <div style={{ paddingTop: '45vh', paddingBottom: '45vh' }}>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((item) => (
            <CategoryItem key={item.slug} title={item.title} slug={item.slug} />
          ))
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', color: 'rgba(0,0,0,0.3)', fontWeight: '500', marginTop: '20px' }}>
            No matches found for this tag or keyword.
          </motion.p>
        )}
      </div>

    </main>
  );
}