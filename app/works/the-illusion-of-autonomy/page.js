"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function IllusionOfAutonomyPage() {
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
        <Link href="/works" style={{ textDecoration: 'none' }}>
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
        
        {/* MAIN TITLE */}
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
          The Illusion of Autonomy: How Cancer Explains Environmental Collapse
        </h1>
        
        {/* PARAGRAPH & SUBTITLE STACK */}
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
            All systems depend on cooperation among their parts, and it applies to everything from forests,
            economies, ecosystems, and even living organisms. Each of the above-mentioned and many others 
            survive because numerous individual components operate within the boundaries that work to preserve 
            the larger whole. The cells of a tree divide only as much as the tree needs; a predator’s population 
            expands only until the prey grows scarce. There is a restraint lying somewhere in the architecture 
            of every functioning system.
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
            This blog aims to deep dive into what happens when one part starts to act as though it is independent
            from the rest of the system. It's a question that sits right at the centre of nature’s most 
            destructive patterns, and properly understanding it may tell us more about the environmental crisis 
            than statistics; at least it has been the case with me so far.
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
            The Logic of Interdependence
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
            Let us get into biology a bit, but I am going to keep it friendly to general readers because 
            the goal is simplifying what I want to tell rather than teaching something. Cells constitute our 
            bodies, but they also depend on them. Similarly, species depend on ecosystems, individuals depend 
            on society, and much more depend on signals that say grow now, stop now, share now, conserve now, etc. 
            And these are the loops that keep each part of the system aligned with the survival of the whole.
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
            The illusion of interdependence comes into effect when local interests detach from the systemic 
            consequences, like a cell ignoring the body’s signals, a company ignoring ecosystems, a nation 
            ignoring the planet, etc. Though these systems may be very different from each other in terms of 
            complexity and functioning, the mechanism of failure remains almost the same in each case.
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
            I would just like to make a clear distinction here, i.e., the problem is not self-interest but when 
            self-interest becomes detached from system health. Self-interest is a natural phenomenon like the 
            cells specializing, organisms competing, economies innovating, etc. What complicates things further 
            is the quietness of the disconnection during initial stages, and it keeps on growing.
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
            When Parts Forget the Whole
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
            Let us focus on the human body, i.e., our point of discussion. Healthy cells keep on operating within 
            regulatory boundaries. They divide and stop based on certain signals. Growth might be taken for granted, 
            but it is not free-form, rather negotiated with the rest of the organism.
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
            In the simplest terms, cancer happens when the cells no longer respond to the vital signals. Most 
            people think that cancer is all about rapid growth, but this assumption is far from reality because 
            plenty of healthy cells grow rapidly, like embryos, wound sites, immune responses, etc. The most 
            prominent factor that makes cancer different is not its rapid growth but selective deafness, as it stops 
            listening to certain signals while following those that benefit it.
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
            My understanding of cancer is that its danger comes not from the growth but the nature of growth, 
            i.e., growing as though the organism no longer matters. This sentence is the most important sentence 
            because for me it describes what happens when a part of the system optimizes for itself while treating 
            the rest of the system as irrelevant. This same pattern is visible outside of the human body as well.
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
            Human Systems and the Illusion of Autonomy
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
            The behavior of cancer is visible in human systems as well, but that is not because humanity is 
            malicious but because the same systemic logic is available to all sufficiently complicated systems. 
            Things like resource extraction at a rate that outpaces regeneration, treating pollution as someone 
            else’s problem, ecological overshoot where consumption exceeds what the planet can renew, and the 
            Tragedy of the Commons, where everyone is focused on their own pursuit, rationally destroy the 
            shared resource that has made all these benefits possible.
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
            And I am not making any accusations against humanity as a species. I am simply pointing to some 
            patterns that are recurring, observable, and almost identical structurally to what happens inside 
            the body that has lost its internal feedback. This claim might be narrower but very useful if one 
            looks at it pretty attentively.
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
            These parallels are true at the level of damage as well, not just the logic. Metastatic cancer 
            not only harms the organism but, past a certain stage, it makes recovery impossible. Right now, 
            melting ice sheets, collapsing biodiversity, and depleted aquifers are working the same way. 
            Unlike injuries that heal after the offending behaviour stops, the abovementioned problems are more 
            like thresholds that the system can’t reset once it is crossed. This is where the conversation 
            becomes uncomfortable because all such processes are irreversible by design past a certain point.
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
            The human case becomes so strange because of the timing. A tumor has no means to know its own damage 
            before it happens, but humans can know about the consequences of their actions. And most of the damage 
            is no longer a forecast they are living reality, like vanishing glaciers, dying reefs, and many more. 
            But the response to these problems in aggregate is something that seems like the system has not 
            noticed anything so dangerous yet. I consider this gap, i.e., between what is visible and how little 
            it changes behaviour, something where the analogy is not about biology but about us.
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
            Where the Comparison Breaks Down
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
            Cancer has no consciousness, but humans do. Cancer can’t change its behavior voluntarily, but 
            human societies can, and they have quite frequently through policies, culture, and collective will. 
            Growth itself is not so evil, which has produced genuine prosperity, longer lives, lesser poverty, 
            extraordinary technological advancements, and much more. None of these achievements mentioned above 
            can be waived away in service of just a tidy metaphor.
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
            The analogy that I present is not an equivalence but a lens - a lens that is of some use only if 
            humans are honest about where this lens distorts the picture. Humans have a quality that no cancer 
            can have, i.e., the ability to notice the pattern they are a part of.
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
            And I see the real value of this analogy, not in proving that humans behave just like cancer but 
            in exposing the structural failure mode that is shared by cancer and humans, and I want to ask why 
            a species so capable and self-aware keeps on repeating the pattern that is expected from mindless 
            cells that fall into mutation alone.
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
            The Real Danger Is No Growth
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
            Growth and expansion are natural, and development is natural for a cell, a company, or a civilization. 
            The danger that I am talking about here does not emerge from the growth itself but when the growth 
            stops caring about dependency, when the parts start to treat the system that sustains and supports them.
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
            In the simplest and shortest form, I can say that the tragedy of selfish growth is that it ends up 
            destroying the system that makes growth possible. A tumor that succeeds completely does not win but 
            dies along with the very body it consumed. A civilization that extracts without any limit does not 
            secure the future but forecloses it.
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
            A Harder Verdict Than the Analogy Admits
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
            Now it is time to take the comparison to its logical end. A cancer cell possesses no ability to model 
            its future, can’t observe the damage it causes, and has no mechanism for choosing otherwise even if it could. 
            The blindness of these cells is total and involuntary. These qualities make it a tragedy, not a crime.
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
            Humans don’t have that excuse. They can estimate the consequence decades before commencement. They can 
            observe the damage that is unfolding. Collectively, we have the principle, the ability to redirect resources, 
            rewrite incentives, and change the course, which can’t be done by tumors. It is this capacity that 
            makes the comparison feel very hopeful because we are not locked into the pattern by biology alone.
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
            But there is another end to it as well. If the species with the power to observe things keeps choosing 
            the same trajectory anyway, then the only right word to describe it is blind spot. A cancer that destroys 
            its host never knows what it is doing, but a civilization that destroys its own foundation while knowing 
            everything is aware of the damage but chooses to proceed regardless. And in that sense, it becomes a 
            harder case than cancer, i.e., not a failure of biology alone but a failure of will dressed up as inevitability.
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
            The Illusion of Autonomy
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
            The illusion of autonomy seems to be one of the most destructive patterns of nature, as it convinces 
            (up to some extent) the part that they can survive without the systems that make their existence possible. 
            For a cancer cell, the illusion is built in, and the cell can’t see outside it, but for us, the illusion 
            is a choice we keep on renewing through one unconscious decision at a time.
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
            This situation leaves a more useful question, which is not whether we resemble cancer but whether we 
            want to be the one part of a system capable of noticing the pattern and sincerely stopping before 
            the whole we depend on stops negotiating.
          </p>

        </div>

      </div>

    </main>
  );
}