"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Lock, ArrowRight, Leaf, Star } from "lucide-react";

// â”€â”€â”€ Botanical SVG Ornaments â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-xs mx-auto ${className}`}
    >
      <line x1="0" y1="12" x2="130" y2="12" stroke="#8B6914" strokeWidth="0.75" strokeOpacity="0.5" />
      <path d="M155 12 C155 5, 162 2, 168 4 C174 6, 176 10, 173 13 C170 16, 162 16, 158 13 C156 11.5, 155.5 12, 155 12Z" fill="#2D5A27" fillOpacity="0.55" />
      <path d="M165 12 C165 5, 172 2, 178 4 C184 6, 186 10, 183 13 C180 16, 172 16, 168 13 C166 11.5, 165.5 12, 165 12Z" fill="#7A9E7E" fillOpacity="0.55" transform="scale(-1,1) translate(-330,0)" />
      <circle cx="160" cy="12" r="2.5" fill="#8B6914" fillOpacity="0.7" />
      <line x1="190" y1="12" x2="320" y2="12" stroke="#8B6914" strokeWidth="0.75" strokeOpacity="0.5" />
    </svg>
  );
}

function BotanicalFrame({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative ${className}`} style={style}>
      {/* Corner ornaments */}
      <svg className="absolute top-0 left-0 w-10 h-10 opacity-40" viewBox="0 0 40 40" fill="none">
        <path d="M2 2 L2 18 Q2 22 6 22 L22 22" stroke="#8B6914" strokeWidth="1" />
        <path d="M8 2 Q12 6 8 12 Q4 18 8 20" stroke="#2D5A27" strokeWidth="0.75" fill="none" />
        <path d="M2 8 Q6 12 12 8 Q18 4 20 8" stroke="#7A9E7E" strokeWidth="0.75" fill="none" />
      </svg>
      <svg className="absolute top-0 right-0 w-10 h-10 opacity-40" viewBox="0 0 40 40" fill="none">
        <path d="M38 2 L38 18 Q38 22 34 22 L18 22" stroke="#8B6914" strokeWidth="1" />
        <path d="M32 2 Q28 6 32 12 Q36 18 32 20" stroke="#2D5A27" strokeWidth="0.75" fill="none" />
        <path d="M38 8 Q34 12 28 8 Q22 4 20 8" stroke="#7A9E7E" strokeWidth="0.75" fill="none" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-10 h-10 opacity-40" viewBox="0 0 40 40" fill="none">
        <path d="M2 38 L2 22 Q2 18 6 18 L22 18" stroke="#8B6914" strokeWidth="1" />
        <path d="M8 38 Q12 34 8 28 Q4 22 8 20" stroke="#2D5A27" strokeWidth="0.75" fill="none" />
        <path d="M2 32 Q6 28 12 32 Q18 36 20 32" stroke="#7A9E7E" strokeWidth="0.75" fill="none" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-10 h-10 opacity-40" viewBox="0 0 40 40" fill="none">
        <path d="M38 38 L38 22 Q38 18 34 18 L18 18" stroke="#8B6914" strokeWidth="1" />
        <path d="M32 38 Q28 34 32 28 Q36 22 32 20" stroke="#2D5A27" strokeWidth="0.75" fill="none" />
        <path d="M38 32 Q34 28 28 32 Q22 36 20 32" stroke="#7A9E7E" strokeWidth="0.75" fill="none" />
      </svg>
      {children}
    </div>
  );
}

function BotanicalBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Large fern-like branches */}
      <path d="M50 600 C80 500, 120 420, 100 300 C80 180, 60 120, 80 50" stroke="#2D5A27" strokeWidth="2" />
      <path d="M100 300 C140 280, 180 260, 160 220" stroke="#2D5A27" strokeWidth="1.5" />
      <path d="M90 360 C130 340, 150 310, 140 270" stroke="#2D5A27" strokeWidth="1.5" />
      <path d="M85 420 C115 400, 135 375, 120 340" stroke="#2D5A27" strokeWidth="1.5" />
      <path d="M80 480 C105 460, 125 440, 115 410" stroke="#2D5A27" strokeWidth="1.5" />
      {/* Right side branch */}
      <path d="M750 0 C720 100, 680 180, 700 300 C720 420, 740 480, 720 550" stroke="#2D5A27" strokeWidth="2" />
      <path d="M700 300 C660 280, 620 260, 640 220" stroke="#2D5A27" strokeWidth="1.5" />
      <path d="M710 360 C670 340, 650 310, 660 270" stroke="#2D5A27" strokeWidth="1.5" />
      {/* Scattered leaves */}
      <ellipse cx="160" cy="215" rx="18" ry="8" fill="#7A9E7E" transform="rotate(-30 160 215)" />
      <ellipse cx="140" cy="265" rx="16" ry="7" fill="#7A9E7E" transform="rotate(-15 140 265)" />
      <ellipse cx="120" cy="335" rx="15" ry="6" fill="#7A9E7E" transform="rotate(-20 120 335)" />
      <ellipse cx="640" cy="215" rx="18" ry="8" fill="#7A9E7E" transform="rotate(30 640 215)" />
      <ellipse cx="660" cy="265" rx="16" ry="7" fill="#7A9E7E" transform="rotate(15 660 265)" />
      {/* Berries */}
      <circle cx="165" cy="210" r="3.5" fill="#8B6914" />
      <circle cx="143" cy="260" r="3" fill="#8B6914" />
      {/* Tiny dots / seeds */}
      <circle cx="400" cy="100" r="1.5" fill="#8B6914" />
      <circle cx="420" cy="120" r="1" fill="#8B6914" />
      <circle cx="380" cy="115" r="1" fill="#8B6914" />
    </svg>
  );
}

// â”€â”€â”€ Opt-In Form â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function OptInForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (firstName && email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="text-linen w-8 h-8" style={{ color: "#F5F0E8" }} />
        </div>
        <h3 className="font-cormorant text-3xl text-forest font-semibold mb-3" style={{ color: "#2D5A27" }}>
          It&apos;s on its way, {firstName}!
        </h3>
        <p className="font-jost text-bark/80 text-sm leading-relaxed" style={{ color: "rgba(92,61,30,0.8)" }}>
          Check your inbox for an email from Patty at<br />
          <em>Eat the Trees, Drink the Leaves.</em><br />
          Make yourself a cup of tea â€” your guide is coming. ðŸŒ¿
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-jost text-xs font-medium tracking-widest uppercase text-gold mb-2" style={{ color: "#8B6914" }}>
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
          required
          className="w-full rounded-none border-b border-gold/40 bg-transparent py-2.5 px-1 font-jost text-bark placeholder:text-bark/35 text-sm focus:border-forest transition-colors"
          style={{ borderColor: "rgba(139,105,20,0.4)", color: "#5C3D1E" }}
        />
      </div>
      <div>
        <label className="block font-jost text-xs font-medium tracking-widest uppercase text-gold mb-2" style={{ color: "#8B6914" }}>
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full rounded-none border-b border-gold/40 bg-transparent py-2.5 px-1 font-jost text-bark placeholder:text-bark/35 text-sm focus:border-forest transition-colors"
          style={{ borderColor: "rgba(139,105,20,0.4)", color: "#5C3D1E" }}
        />
      </div>
      <div className="pt-3">
        <button
          type="submit"
          className="w-full py-4 px-6 bg-forest text-linen font-jost font-medium text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-forest-light transition-all duration-300 group"
          style={{ backgroundColor: "#2D5A27", color: "#F5F0E8" }}
        >
          Send Me the Guide
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-center mt-3 font-jost text-xs text-bark/55 flex items-center justify-center gap-1.5" style={{ color: "rgba(92,61,30,0.55)" }}>
          <Lock className="w-3 h-3" />
          Your information is safe with me. I respect your inbox and your privacy.
        </p>
      </div>
    </form>
  );
}

// â”€â”€â”€ Guide Cover Mockup â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function GuideCover() {
  return (
    <div
      className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-sm overflow-hidden shadow-2xl"
      style={{ background: "linear-gradient(160deg, #2D5A27 0%, #1e3d1a 100%)" }}
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 25px 25px, #8B6914 1px, transparent 0)", backgroundSize: "50px 50px" }}
      />
      {/* Botanical decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 240 320" fill="none">
        <path d="M20 320 C40 260, 60 200, 50 130 C40 60, 25 30, 35 0" stroke="#7A9E7E" strokeWidth="1.5" />
        <path d="M50 130 C80 115, 100 100, 95 75" stroke="#7A9E7E" strokeWidth="1" />
        <path d="M48 165 C75 148, 90 130, 85 105" stroke="#7A9E7E" strokeWidth="1" />
        <ellipse cx="97" cy="71" rx="14" ry="6" fill="#9AB89E" transform="rotate(-25 97 71)" />
        <ellipse cx="87" cy="101" rx="12" ry="5" fill="#9AB89E" transform="rotate(-15 87 101)" />
        <path d="M220 0 C200 60, 180 120, 190 190 C200 260, 215 290, 200 320" stroke="#7A9E7E" strokeWidth="1.5" />
        <path d="M190 190 C160 175, 145 155, 150 125" stroke="#7A9E7E" strokeWidth="1" />
        <ellipse cx="148" cy="121" rx="14" ry="6" fill="#9AB89E" transform="rotate(25 148 121)" />
        <circle cx="100" cy="68" r="3" fill="#C4961A" />
        <circle cx="89" cy="98" r="2.5" fill="#C4961A" />
      </svg>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        {/* Gold rule top */}
        <div className="w-16 h-px mb-6" style={{ background: "linear-gradient(to right, transparent, #C4961A, transparent)" }} />
        {/* Brand name */}
        <p className="font-jost text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(196,150,26,0.8)" }}>
          Eat the Trees<br />Drink the Leaves
        </p>
        {/* Title */}
        <h3 className="font-cormorant font-bold italic leading-tight mb-3" style={{ fontSize: "clamp(1.5rem,5vw,2rem)", color: "#FEFCF7" }}>
          Why Your Body<br />Stays on Guard
        </h3>
        <p className="font-cormorant italic text-sm mb-6" style={{ color: "rgba(254,252,247,0.75)" }}>
          And What&apos;s Really Happening<br />Inside Your Body
        </p>
        {/* Gold rule bottom */}
        <div className="w-16 h-px mb-5" style={{ background: "linear-gradient(to right, transparent, #C4961A, transparent)" }} />
        {/* Author */}
        <p className="font-jost text-xs tracking-widest uppercase" style={{ color: "rgba(196,150,26,0.7)" }}>
          Patty J. Militello
        </p>
        {/* Botanical icon */}
        <div className="mt-5 opacity-60">
          <Leaf className="w-6 h-6 mx-auto" style={{ color: "#9AB89E" }} />
        </div>
      </div>
      {/* Drop shadow inner edge */}
      <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }} />
    </div>
  );
}

// â”€â”€â”€ Main Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#F5F0E8" }}>

      {/* â”€â”€ Navigation â”€â”€ */}
      <nav className="py-5 px-6 flex items-center justify-center border-b" style={{ borderColor: "rgba(139,105,20,0.15)" }}>
        <div className="flex flex-col items-center gap-0.5">
          <p className="font-cormorant italic text-lg font-medium" style={{ color: "#2D5A27" }}>Eat the Trees, Drink the Leaves</p>
          <div className="h-px w-32" style={{ background: "linear-gradient(to right, transparent, rgba(139,105,20,0.4), transparent)" }} />
          <p className="font-jost text-[10px] tracking-[0.25em] uppercase" style={{ color: "#8B6914" }}>eatthetreesdrinktheleaves.com</p>
        </div>
      </nav>

      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative py-16 md:py-24 px-6 text-center overflow-hidden">
        <BotanicalBackground />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative max-w-2xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="font-jost text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: "#8B6914" }}
          >
            A Free Guide from Patty J. Militello
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="font-cormorant font-bold leading-[1.08] mb-4"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", color: "#2D5A27" }}
          >
            Why Your Body<br />Stays on Guard
          </motion.h1>

          {/* Gold rule */}
          <motion.div variants={fadeUp} className="my-5">
            <div className="h-px w-40 mx-auto" style={{ background: "linear-gradient(to right, transparent, #8B6914, transparent)" }} />
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="font-cormorant italic text-2xl md:text-3xl mb-6"
            style={{ color: "#5C3D1E" }}
          >
            And What&apos;s Really Happening Inside Your Body
          </motion.p>

          {/* Lead paragraph */}
          <motion.div
            variants={fadeUp}
            className="max-w-xl mx-auto space-y-2"
          >
            <p className="font-jost text-base leading-relaxed" style={{ color: "rgba(92,61,30,0.75)" }}>
              A free guide for women who are exhausted, overwhelmed, and ready to finally understand their nervous system â€” and heal it gently.
            </p>
          </motion.div>

          {/* Sub-lead */}
          <motion.div variants={fadeUp} className="mt-6 max-w-lg mx-auto space-y-1">
            <p className="font-cormorant italic text-lg" style={{ color: "#5C3D1E" }}>You&apos;re not lazy. You&apos;re not dramatic. You&apos;re not falling apart.</p>
            <p className="font-cormorant italic text-lg" style={{ color: "#5C3D1E" }}>Your nervous system is dysregulated â€” and once you understand why, everything changes.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* â”€â”€ Guide Cover + Form (Above the Fold on Desktop) â”€â”€ */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <GuideCover />
            </motion.div>

            {/* Opt-In Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <BotanicalFrame className="p-8 md:p-10">
                <div style={{ backgroundColor: "#FEFCF7" }} className="p-8 md:p-10 rounded-sm">
                  <h2 className="font-cormorant font-bold text-3xl md:text-4xl mb-2 leading-tight" style={{ color: "#2D5A27" }}>
                    Yes! Send Me<br />the Free Guide ðŸŒ¿
                  </h2>
                  <p className="font-jost text-sm leading-relaxed mb-7" style={{ color: "rgba(92,61,30,0.7)" }}>
                    Enter your name and email below and I&apos;ll send it straight to your inbox â€” no spam, ever. Just gentle, healing wisdom for your journey.
                  </p>
                  <OptInForm />
                </div>
              </BotanicalFrame>
            </motion.div>
          </div>
        </div>
      </section>

      <LeafDivider className="my-4" />

      {/* â”€â”€ Does This Sound Familiar â”€â”€ */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: "#EDE6D6" }}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} className="font-cormorant font-bold text-4xl md:text-5xl" style={{ color: "#2D5A27" }}>
              Does any of this sound familiar?
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-4">
              <LeafDivider />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-3"
          >
            {[
              "Youâ€™re bone tired but canâ€™t fall asleep â€” or stay asleep",
              "You snap at people you love and donâ€™t know why",
              "Sugar cravings hit like clockwork every afternoon",
              "Your body aches in ways no doctor can fully explain",
              "You feel overwhelmed by things that shouldnâ€™t be that hard",
              "You lie awake replaying conversations or worrying about tomorrow",
              "Youâ€™re exhausted from carrying everything â€” and nobody seems to notice",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-4 rounded-sm"
                style={{ backgroundColor: "rgba(254,252,247,0.6)" }}
              >
                <span className="mt-0.5 flex-shrink-0">
                  <Leaf className="w-4 h-4" style={{ color: "#7A9E7E" }} />
                </span>
                <p className="font-jost text-sm leading-relaxed" style={{ color: "#5C3D1E" }}>{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="font-cormorant italic text-xl text-center mt-8"
            style={{ color: "#2D5A27" }}
          >
            If you nodded at even one of these â€” this guide was written for you.
          </motion.p>
        </div>
      </section>

      <LeafDivider className="my-4" />

      {/* â”€â”€ What You'll Discover â”€â”€ */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10"
          >
            <motion.p variants={fadeUp} className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#8B6914" }}>Inside the Guide</motion.p>
            <motion.h2 variants={fadeUp} className="font-cormorant font-bold text-4xl md:text-5xl" style={{ color: "#2D5A27" }}>
              What You&apos;ll Discover Inside
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-4"><LeafDivider /></motion.div>
            <motion.p variants={fadeUp} className="font-jost text-sm mt-4" style={{ color: "rgba(92,61,30,0.65)" }}>
              In this free guide you&apos;ll learn:
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4"
          >
            {[
              { text: "What your nervous system is actually doing â€” and why it matters for everything from sleep to digestion to sugar cravings", num: "01" },
              { text: "The three nervous system states â€” and which one youâ€™re likely stuck in right now", num: "02" },
              { text: "Why womenâ€™s nervous systems are uniquely challenged â€” and why itâ€™s not your fault", num: "03" },
              { text: "5 signs your nervous system is crying out for support", num: "04" },
              { text: "6 gentle, daily practices to begin creating a safe place to heal", num: "05" },
              { text: "How healing herbs support nervous system restoration â€” naturally and consistently", num: "06" },
              { text: "The faith-rooted framework that ties it all together", num: "07" },
            ].map((item) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className="flex items-start gap-5 group"
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border text-xs font-jost font-medium"
                  style={{ borderColor: "#8B6914", color: "#8B6914", backgroundColor: "rgba(139,105,20,0.06)" }}
                >
                  {item.num}
                </div>
                <p className="font-jost text-sm leading-relaxed pt-2" style={{ color: "#5C3D1E" }}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ About Patty â”€â”€ */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: "#EDE6D6" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <p className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#8B6914" }}>Meet Your Guide</p>
              <h2 className="font-cormorant font-bold text-4xl md:text-5xl" style={{ color: "#2D5A27" }}>About Patty</h2>
              <LeafDivider className="mt-4" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-sm p-8 md:p-12"
              style={{ backgroundColor: "#FEFCF7" }}
            >
              {/* Stars / authority badges */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#8B6914" }} />
                ))}
              </div>

              <p className="font-cormorant font-semibold text-xl text-center mb-1" style={{ color: "#2D5A27" }}>Patty J. Militello</p>
              <p className="font-jost text-xs text-center tracking-wider mb-8" style={{ color: "#8B6914" }}>
                Certified Autoimmune Holistic Nutrition Specialist Â· Herbalist Â· Stroke Survivor Â· Author
              </p>

              <div className="border-l-2 pl-6 py-1" style={{ borderColor: "#8B6914" }}>
                <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed mb-4" style={{ color: "#3a2e1e" }}>
                  &ldquo;After my hemorrhagic stroke, I had to learn everything about my own nervous system â€” not from a textbook, but from lived experience. I combined that with years of herbal study, holistic nutrition training, and deep faith to create a framework for healing that is gentle, sustainable, and rooted in how your body actually works.
                </p>
                <p className="font-cormorant italic text-xl md:text-2xl leading-relaxed" style={{ color: "#3a2e1e" }}>
                  I created this guide for every woman who is tired of being told everything is fine â€” when she knows deep down that something needs to change.&rdquo;
                </p>
              </div>

              <p className="font-jost text-sm font-medium mt-6 text-right" style={{ color: "#2D5A27" }}>
                â€” Patty J. Militello, <em className="font-cormorant text-base">Eat the Trees, Drink the Leaves</em> ðŸŒ¿
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ What Happens Next â”€â”€ */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-jost text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#8B6914" }}>After You Sign Up</motion.p>
            <motion.h2 variants={fadeUp} className="font-cormorant font-bold text-4xl md:text-5xl mb-4" style={{ color: "#2D5A27" }}>
              What Happens Next
            </motion.h2>
            <motion.div variants={fadeUp}><LeafDivider /></motion.div>

            <motion.div variants={stagger} className="mt-10 space-y-6">
              {[
                { step: "1", text: "Check your inbox for an email from Patty at Eat the Trees, Drink the Leaves" },
                { step: "2", text: "Download your free guide" },
                { step: "3", text: "Find a quiet moment, make yourself a cup of tea, and begin" },
                { step: "4", text: "Start to understand â€” maybe for the first time â€” why your body has been feeling the way it has" },
              ].map((item) => (
                <motion.div key={item.step} variants={fadeUp} className="flex items-center gap-5 text-left">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-cormorant font-bold text-lg"
                    style={{ backgroundColor: "#2D5A27", color: "#F5F0E8" }}
                  >
                    {item.step}
                  </div>
                  <p className="font-jost text-sm leading-relaxed" style={{ color: "#5C3D1E" }}>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-cormorant italic text-2xl md:text-3xl mt-10 leading-snug"
              style={{ color: "#2D5A27" }}
            >
              Healing starts with understanding.<br />And understanding starts here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* â”€â”€ Second CTA â”€â”€ */}
      <section className="py-12 px-6" style={{ backgroundColor: "#EDE6D6" }}>
        <div className="max-w-lg mx-auto text-center">
          <h3 className="font-cormorant font-bold text-3xl md:text-4xl mb-2" style={{ color: "#2D5A27" }}>
            Ready to Begin?
          </h3>
          <p className="font-jost text-sm mb-6" style={{ color: "rgba(92,61,30,0.65)" }}>Scroll up to claim your free guide â€” or tap below.</p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 py-4 px-10 font-jost text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#2D5A27", color: "#F5F0E8" }}
          >
            Get the Free Guide <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* â”€â”€ Scripture â”€â”€ */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#7A9E7E" }}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20px 20px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="h-px w-16 mx-auto mb-8" style={{ background: "rgba(254,252,247,0.5)" }} />
          <p className="font-cormorant italic text-2xl md:text-4xl leading-relaxed mb-6" style={{ color: "#FEFCF7", lineHeight: 1.55 }}>
            &ldquo;He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul.&rdquo;
          </p>
          <p className="font-jost text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(254,252,247,0.75)" }}>
            â€” Psalm 23:2â€“3
          </p>
          <div className="h-px w-16 mx-auto mt-8" style={{ background: "rgba(254,252,247,0.5)" }} />
        </motion.div>
      </section>

      {/* â”€â”€ Footer â”€â”€ */}
      <footer className="py-8 px-6 text-center border-t" style={{ borderColor: "rgba(139,105,20,0.15)" }}>
        <p className="font-cormorant italic text-lg mb-1" style={{ color: "#2D5A27" }}>Eat the Trees, Drink the Leaves</p>
        <p className="font-jost text-xs mb-3" style={{ color: "#8B6914" }}>eatthetreesdrinktheleaves.com</p>
        <p className="font-jost text-[11px] leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(92,61,30,0.5)" }}>
          Â© Eat the Trees, Drink the Leaves Â· eatthetreesdrinktheleaves.com<br />
          This guide is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </footer>

    </div>
  );
}
