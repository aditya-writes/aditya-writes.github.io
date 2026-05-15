"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function PersonaPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos.",
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
  ];

  return (
    <main style={{ backgroundColor: 'white', minHeight: '200vh', position: 'relative', color: 'black' }}>
      
      {/* 1. PROGRESS BAR (Mirroring the site's identity) */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 40px', zIndex: 100 }}>
        <div style={{ width: '100%', maxWidth: '800px', height: '2px', border: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}>
          <motion.div style={{ scaleX, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', originX: 0 }} />
        </div>
      </div>

      {/* 2. BACK BUTTON */}
      <nav style={{ position: 'fixed', top: '40px', left: '40px', zIndex: 150 }}>
        <Link href="/about" style={{ fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', textDecoration: 'none', color: 'black' }}>
          ← Back
        </Link>
      </nav>

      {/* 3. THE GHOST FADE GRADIENTS */}
      {/* These create the fade effect at the top and bottom edges */}
      <div style={{ 
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 10,
        background: 'linear-gradient(to bottom, white 0%, transparent 25%, transparent 75%, white 100%)' 
      }} />

      {/* 4. CONTENT AREA */}
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '40vh', paddingBottom: '60vh', paddingLeft: '20px', paddingRight: '20px' }}>
        <header style={{ marginBottom: '100px' }}>
          <h1 style={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5em', marginBottom: '20px', opacity: 0.4 }}>
            Persona 01
          </h1>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '1.1' }}>
            My Persona
          </h2>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          {paragraphs.map((text, i) => (
            <p key={i} style={{ 
              fontSize: '1.5rem', 
              lineHeight: '1.6', 
              fontWeight: '500', 
              color: '#1A1A1A', 
              letterSpacing: '-0.01em' 
            }}>
              {text}
            </p>
          ))}
        </div>
      </div>

    </main>
  );
}