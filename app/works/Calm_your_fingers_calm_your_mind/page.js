"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function DigitalMindfulnessPage() {
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
          Calm Your Fingers, Calm Your Mind: A New Digital Mindfulness Practice for the Scrolling Age
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
            Calming the mind has been about working on the mind itself directly. The most prominent and effective methods included sitting still, watching the breath, observing every thought as it rises, and letting it pass while refraining from chasing it. This used to be the entire project where thought was the battlefield and stillness was either won or lost entirely inside the skull. And it has worked for a very long time, mainly because the main opponent of the mind is the mind itself in the form of its restlessness and wandering.
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
            But the opponent has now changed in the modern age. Digital Mindfulness - the practice of consciously interacting with the devices we use on a daily basis- is being seen as the modern answer to a problem that meditation was not built for. Right now, people's minds are not just wandering, but are being pulled, hundreds of times a day, by a screen that has been precisely designed to make that pulling almost involuntary. Part of the reason why meditation is failing lies in our current state of mind, which is so volatile that jumping to watching your breath has become highly difficult.
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
            The Chaos Phone Addiction Has Become
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
            There is barely any need to emphasize more because everyone is now feeling it, i.e., unlocking the phone before completely waking up, one video ending and another starting before any decision was made, and then an hour or so disappearing into a feed that people don’t even remember opening. This is very different from occasional distraction - it has now become a default operating mode. Taking a more precise look at it, I found that the hand has learned to move towards the phone way quicker than the mind can weigh in, and this is the main reason why most of the advice on mindful scrolling habits that focus on willpower fails these days.
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
            In case you have already searched for how to control phone addiction naturally, I assume you must have tried most of the standard fixes, and it is worth being honest about why such fixes didn’t work.
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
            Why the Drawer Method Doesn’t Work
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
            Other common pieces of advice prevailing online are putting the phone in a drawer or something, deleting the app for a week or so, and switching on grayscale, which end up attacking the object, not the impulse itself. I see that as a flaw because focusing on the stimuli won’t be of much use if the urge to check, scroll, and tap is still completely intact even when the phone is out of reach. With the urge still there, all that these solutions are causing is just a bit of starvation for a certain duration of time.
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
            Once the phone comes back - and they have to come back - the same hand starts reaching for it with previously unexamined speed. During this interval, nothing much was learned, and nothing has really changed except for the access. The real solution is only the one that works while the phone is in hand, not when it is locked away.
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
            Zen Kyūdō - The Discipline of the Hand
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
            Some contemplative traditions had already worked out that stilling the mind could be approached by stilling the hand. In the highly popular Japanese art of Zen archery, i.e., the Kyūdō stating that hitting the target was never the point. This discipline lay completely in the mechanics of draw, the release, and the follow-through - the fully present, unhurried motion of the hand. While practicing, participants could miss the target completely but still said to have “shot pretty well”, because the mastery was never about the outcome. Rather, it was about the quality of attention inside the small and repeated physical act.
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
            It's the movement of the hand that lies at the center of the practice. Right now, we can make the finger’s movement towards the screen the site of discipline - not any app, not the content, and not even the outcome of the scroll (at least initially).
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
            The James-Lange Idea - Why the Body Leads
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
            I have also found a useful piece of psychology behind why this proposed method will work. The most common assumption running right now is the fact that people feel restless, which is why they reach for their phones. The James-Lange idea works best in inverting that order, i.e., physical action does not just express an emotion but can also generate one. So, when someone reaches, taps, and scrolls compulsively, it doesn’t just reflect restlessness but can manufacture more of it and feed a loop where the motion of the hand keeps on producing the unease it was reaching to calm down.
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
            So, training the hand is not some workaround but a direct route to the mind. That is the main idea behind the finger awareness technique, i.e., change what the hand does and, as a result, how you start to feel also changes.
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
            Part 1: Beginner - Awareness Before Action
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
            The main rule beneath everything else is to decide the reason for unlocking before the fingers touch the screen. If your reason for opening the phone comes only after you have tapped, it's a signal that the hand moved before the mind. Here is how to start practicing it while:
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
            <strong>Reading:</strong> Read the content of the entire screen before scrolling to the next and refrain from scrolling after reading a segment of visible content. Avoid skimming ahead and restless scrolling mid-sentence.
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
            <strong>YouTube:</strong> Watch your selected video completely before you even touch the next-up suggestion. There should be no mid-video checking and absolutely no impulse switching.
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
            <strong>Reels and Shorts:</strong> You might be having a low attention span based on your screen time for these, but it does not stop you from improving. Watch every short in full before swiping away with no fast-forwarding and no early exit. If the reel is boring or something you have already seen, notice the boredom rather than reflexively escaping from it.
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
            <strong>The Catch-and-check:</strong> Each time your hand rises towards the screen, try to notice the motion mid-air before it lands. This is the beginner-level foundation on which everything else is built, and the awareness-first, action-second habit might take some time to develop, but you need to keep on trying.
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
            Part 2: Advanced - Building Real Capacity
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
            After you find that noticing has become familiar, the next stage is about choosing, which involves:
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
            <strong>Delayed-gratification scroll:</strong> In this stage, try waiting for a full five seconds after finishing a piece of content. During this duration, your fingers should be off the screen completely before deciding whether to continue. Consider increasing the duration further with time. It gives you time to think and exposes whether the next tap is a genuine choice or just pure momentum.
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
            <strong>The uneven grip:</strong> Try holding the phone a bit differently than usual for some time by either switching hands or changing the angle. This might seem like something ineffective, but it works best in breaking the motor-memory autopilot that enables the fingers to move without having any decision behind the movement.
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
            <strong>Single-session intent:</strong> Name one outcome that you want before opening any application, which may be “check message(s)”, “watch one video.” Once the outcome has been met, you have to close the app instantly regardless of the urge to keep going.
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
            <strong>The finger fast:</strong> At least once every week, choose a complete hour when you will not touch the phone at all - not even to check the time. It is all about proving to yourself that the urge passes without being fed.
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
            <strong>Post-use reflection:</strong> After every session of using the phone, ask yourself one simple question: did my fingers do anything that my mind didn’t decide? The one-line answer to this question is enough to give you a report card of phone usage.
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
            Noticing and choosing need to be a part of the process every time you pick up the phone and start using it.
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
            Meditation is an ancient technique that has been training the mind by asking it to watch itself. Digital mindfulness is very different because it asks something more specific for most people, and the practice is more achievable. All one needs to do is watch the hand because it is the hand where the intentions of the mind and the screen’s design collide first. In addition, fingers have become the last checkpoint before an impulse becomes a completed action. The intervention suggested in this blog is small enough to notice, physical enough to interrupt, and genuinely trainable as compared to observing fleeting thought.
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
            I am not promising to dissolve the pull of the feed entirely. This approach offers something that is smaller and more useful. It proves that tiny activities, when repeated daily, can be the most realistic form of calm available to minds which have to compete with the screen for their own attention.
          </p>

        </div>

      </div>

    </main>
  );
}