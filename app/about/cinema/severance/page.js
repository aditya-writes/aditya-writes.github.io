"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function SeveranceReviewPage() {
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
        <Link href="/about/cinema" style={{ textDecoration: 'none' }}>
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
        
        {/* MAIN TITLE (Placed cleanly outside the paragraph stack) */}
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
          The Psychological and Visual Dualism of Severance (Season 1 & 2)
        </h1>
        
        {/* ESSAY CONTENT CONTENT WRAPPER */}
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
            Oftentimes, only those shows that hold up a mirror to society gain popularity. 
            Severance, on the other hand, is something entirely else. I call it a <strong>funhouse 
            of mysteries.</strong> Its premise is exceptionally terrifying, which takes the application
            of science and corporations’ obsession with non-disclosure agreements to a whole
            new level. The show started with a surgery that bisectionalizes employees into
            “innie” and “outie,” which was the most fascinating thing about it. By the time
            I finished season 2, I found this one to be cementing itself as a deep exploration
            of identity fragmentation with the help of a highly disciplined visual grammar 
            to showcase the increasing chasm between two halves of one self.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            The Unknowable Purpose: Cult, Goats, and Numbers
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            What lies at the core of its narrative can be called <strong>mastery
            of mystery.</strong> Lumon’s workplace was nothing short of a maze, 
            which got the most complicated in the Macrodata Refinement Department. 
            The most surprising part is that the purpose of what happens in this 
            department is considerably unclear even after the conclusion of season 2.
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
            What kind of refinement occurs by sorting numbers does not make 
            clear sense to me even today. Then there are surreal non-sequiturs 
            like the room dedicated to farming and nursing goats, and Brianne of 
            Tarth is absolutely in no mood to lose any of those goats. Just like 
            the innies, I am also unable to deduce the way the work of MDR is reshaping 
            global logistics or what kind of change exactly it is bringing.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            Symmetrical Alienation vs Handheld Freedom
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            A great show results when the characters, story, and 
            cinematography are in line with each other, something 
            that is easily found in this one. There is a polarising 
            structural contrast between internal and external worlds. 
            Camera geometry becomes ruthlessly symmetrical inside MDR 
            and other floors of Lumon. An absolute level of cleanliness 
            is there, whether it be sharp 90-degree turns or perfectly 
            centred frames.
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
            But as the characters step into the outside world, 
            a more casual, organic handheld and loose camera style 
            is seen. But still, the reality of the outside world seems 
            alienated because of the Apple TV’s insistence on deliberately 
            desaturating the palette so that visuals are dominated by cool 
            tones like slate grays, muted blues, and institutional teals/greens. 
            Upon searching about it online, I found that cinematographers chose 
            to avoid hard and direct sunlight so the world looks like it has just 
            been rained on. The same style is visible in other creations from 
            Apple TV, like <strong>Presumed Innocent</strong> and <strong>Defending Jacob,</strong> and also in HBO’s 
            <strong>True Detective Season 1,</strong> each of which deserves a separate review.
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
            The impact of this choice is phenomenal. In the absence of
             crowd and visual noise, everything seems so still that the
              mind is entirely focused on the characters and the story, with
               absolutely nothing in between that is demanding attention. In
                addition, this silent world worked the best in calming my mind
                 and keeping me glued to the screen.
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
            Talking of the cinematography brilliance, 
            one of the most stunning shots is the one 
            when Scout begins to confuse between the visual 
            landscape of the Lumon with the outside world, 
            i.e., his home. The way creators have captured 
            the process of memory barrier fraying is just next 
            level. Pinpoint accuracy in those shots is something 
            that lets viewers stitch the scenes seamlessly as the 
            office replaces the domestic landscape of Scout, even 
            for a fraction of a second.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            The Divided Self: A Conflict of Sub-Personalities
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            The character dynamics portrayed here can be 
            understood by taking a quick look at frameworks 
            associated with sub-personalities, especially systems 
            like IFS (Internal Family Systems), which is also known 
            as psychological dissociation. I read about this theory 
            many years back and was suddenly drawn to it while watching 
            the show. This theory suggests that human consciousness is 
            not a single monolithic block but a collection of distinct 
            parts called sub-selves. And a particular self takes control 
            based on certain triggers or the environment. You can observe 
            it very easily, given the way our behaviour changes under different 
            circumstances. We end up doing something entirely against our 
            personality when exposed to certain triggers that sometimes we 
            find difficult to justify, even in the future.
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
            The extreme of this condition is shown in the movie <strong>
            Split</strong> through the imaginary disease named <strong>Dissociative 
            Identity Disorder,</strong> but again, this one needs a separate 
            treatment as well. So, let's get back to Severance. Friction 
            between different sub-selves comes to its height in the personal 
            crises of Dylan G and Scout in different episodes. I found the 
            paradigm shift of Dylan G’s innie and outie very profound in season 
            2 when the outie of Dylan develops jealousy as he finds out that his 
            wife likes Dylan’s innie. This scene was real deal, and it gave me a 
            look into the human mind because one part of the self is jealous of the 
            other part, even though they both are the same person.
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
            Even an elevated version of this conflict plays out between
            the two halves of Scout, and this conflict gets very intense,
            where the innie and outie face each other rather than feeling
            jealous, and the means to do that shows the exceptional vision
            of the creators. As innie and outie of Scout fight with each other
            via that camera setup, it shows how greedy an identity can get. 
            Those two identities belong to the same mind, speak through the same
            throat, and face the same face; they function more like competitors,
            very different agents with highly competitive agendas, what a story!
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            Milchik’s Corporate Absurdity, Fancy Words, and Tragic Moves
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            In the midst of this existential dread, the creators have placed 
            a deep, dark, and satirical comedy that is just on a whole other level. 
            If there is one perfect employee wearing a happy face of corporate totalitarianism, 
            it is Mr. Milchik. Above all, his hyper-sanitized and fancy management English brings
            exceptional humor to the show. The way Lomon decides its employees to dance or share
            light moments is also another level of discipline. Milchik’s dance grabbed my attention
            the most, as he had danced only twice, and both dancing sessions ended with tragedy. 
            Both of his rhythmic movements led to violent disruptions. The dances, though, look 
            like an illusion of corporate joy, but the following disruptions prove that none of 
            Lumon’s awards are enough to suppress the human desire for freedom.
          </p>

          <h2 style={{ 
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: '32px', 
            fontWeight: '700', 
            color: '#000000',
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            margin: 0,
            marginTop: '24px'
          }}>
            Conclusion
          </h2>

          <p style={{ 
            fontFamily: '"Cormorant Garamond", serif', 
            fontSize: '21px', 
            lineHeight: '1.8', 
            textAlign: 'justify', 
            color: '#000000', 
            letterSpacing: '0.01em',
            margin: 0
          }}>
            I see this one as an outstanding critique of modern alienation, 
            labor, and people’s desire to compartmentalise their trauma. 
            Creators have delivered a masterpiece that starts from a corporate 
            ambition and transitions into a fractured human psyche. Though I 
            have not been able to decode the purpose, I got one message for sure, 
            i.e., regardless of how cleanly a life/mind is sliced into two with 
            the help of technology, the pieces will always find ways to become one 
            again. Our sub-selves exist only because our nature allows that; the 
            same can’t be imposed forcefully by some external agent, the mind will 
            struggle to accept that. Remember what Eames said to Cobb in the movie <strong>Inception </strong>
            when they met in Mombasa, that during Inception, the idea needs to be 
            familiar enough so that the mind can accept it naturally. Severance tries 
            to establish the same thing, but in a very deliberate way. 
          </p>

        </div>
      </div>

    </main>
  );
}