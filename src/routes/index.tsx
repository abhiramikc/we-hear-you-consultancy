import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, Check, Code2, Globe, ShoppingCart, Wrench, PenTool, Cloud, Plug, LifeBuoy, Menu, X, Store, Rocket, TrendingUp, User, Linkedin, ChevronDown, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import CrystalizedBall, { type CrystalizedBallPreset } from "@/components/CrystalizedBall";
import SpotlightCard from "@/components/SpotlightCard";
import HalftoneReveal from "@/components/HalftoneReveal";
import GhostFibers from "@/components/GhostFibers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Technology Partner — Without the Complexity" },
      { name: "description", content: "Websites, custom software and tech support for small businesses. Free consultation, pay after phase one, no long-term contracts." },
      { property: "og:title", content: "Your Technology Partner — Without the Complexity" },
      { property: "og:description", content: "Free consultation, pay after phase one, no long-term contracts." },
    ],
  }),
  component: Index,
});

const nav = [["Services", "services"], ["How It Works", "how"], ["Our Team", "team"], ["About", "about"], ["Contact", "contact"]];
const services = [
  [Globe, "Website Design & Development", "Business websites, landing pages, responsive designs and improvements."],
  [Code2, "Custom Software", "Business apps, internal tools, dashboards and tailored solutions."],
  [ShoppingCart, "E-commerce Solutions", "Online stores, catalogs, shopping experiences and integrations."],
  [Wrench, "Support & Troubleshooting", "Website issues, software bugs, integrations and problem-solving."],
  [PenTool, "UI/UX Design", "User-friendly interfaces, wireframes, prototypes and redesigns."],
  [Cloud, "Cloud & Deployment", "Deployment, hosting setup, configuration and maintenance."],
  [Plug, "API & System Integration", "Connect business apps, third-party tools and existing systems."],
  [LifeBuoy, "Maintenance & Consultation", "Guidance, improvements and support as your business grows."],
] as const;
const pillars = [
  ["Free Consultation", "Discuss your idea, challenges or requirements with our team before making any financial commitment."],
  ["Pay After the First Phase", "No upfront payment for the initial agreed phase. Payment is due once that phase is completed, per the agreed scope and terms."],
  ["No Long-Term Contracts", "No mandatory commitment. Agree on scope, deliverables and payment terms before work begins."],
];
const steps = [
  ["Tell Us Your Idea", "Share your business needs, challenges or project goals."],
  ["Free Consultation", "We discuss requirements, explore solutions and identify the right approach."],
  ["Agree on Phase One", "Define deliverables, scope, timeline and payment terms clearly."],
  ["Review the Phase", "Review the deliverables. Payment becomes due per the agreed terms."],
];
const roles = ["Technical Lead / Solution Architect", "Frontend Engineer", "Frontend Engineer", "Backend Engineer", "Backend Engineer", "Full-Stack Engineer", "UI/UX Designer", "QA / Testing Engineer", "Cloud / DevOps Engineer", "API & Integration Specialist"];
const audiences = [[Store, "Small Shops & Local Businesses"], [Rocket, "Entrepreneurs & Founders"], [TrendingUp, "Growing Businesses"], [User, "Individuals with Ideas"]] as const;

function Section({ id, eyebrow, title, desc, children }: { id: string; eyebrow: string; title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 max-w-2xl text-muted-foreground">{desc}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

const PRESET_OPTIONS: Array<{ id: CrystalizedBallPreset; label: string }> = [
  { id: "nebula", label: "Nebula" },
  { id: "aurora", label: "Aurora" },
  { id: "plasma", label: "Plasma" },
  { id: "solar", label: "Solar" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ballPreset, setBallPreset] = useState<CrystalizedBallPreset>("nebula");
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? "border-b border-border bg-background/85 backdrop-blur" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-2xl">[Logo]</a>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-full border border-accent/60 px-5 py-2 text-xs uppercase tracking-[0.15em] text-accent transition hover:bg-accent hover:text-accent-foreground md:inline-block">Free Consultation</a>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            {[...nav, ["Free Consultation", "contact"]].map(([l, id]) => <a key={l} href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-sm">{l}</a>)}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <GhostFibers
            glowColor="#8b5cf6"
            layers={3}
            twist={1.2}
            threads={72}
            fiberStyle="dots"
            depthOfField={0.85}
            hoverEffect="focus"
            intro
            mouseInteraction
            lineColor="#dfd1fc"
            secondaryColor="#6f4ac5"
            gradient="depth"
            waves={1}
            volume={0.7}
            spread={1}
            scale={1}
            rotation={18}
            perspective={0.65}
            density={1}
            thickness={1}
            tips={0}
            foldGlow={1}
            speed={0.5}
            flow={0.4}
            rollSpeed={0.15}
            focusDepth={0}
            particles={0.5}
            sparkle={0.5}
            glow={0.8}
            brightness={1}
            vignette={0.3}
            grain={0.06}
            mouseStrength={1}
            pulseOnClick
            lightMode={false}
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="pointer-events-auto lg:col-span-7">
              <p className="eyebrow">Practical technology · Transparent partnerships</p>
              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
                Your Technology Partner. <em className="text-gradient">Without the Complexity.</em>
              </h1>
              <p className="mt-6 max-w-xl text-muted-foreground">From small business websites to custom software and ongoing technical support, our engineers help turn your ideas into practical digital solutions.</p>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {["Free Initial Consultation", "Pay After Phase One", "No Long-Term Contracts"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />{t}</li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href="#contact" className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">Book a Free Consultation</a>
                <a href="#services" className="group flex items-center gap-3 text-sm uppercase tracking-[0.15em]">Explore Services <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              </div>
            </div>

            <div className="pointer-events-auto flex flex-col items-center justify-center lg:col-span-5">
              {/* <div className="relative w-full max-w-[460px] aspect-square rounded-3xl border border-border/60 bg-gradient-to-b from-card/40 to-background/60 p-2 shadow-2xl backdrop-blur-sm">
                <div className="relative h-full w-full">
                  <CrystalizedBall
                    preset={ballPreset}
                    size={0.78}
                    crackle={0.85}
                    fill={0.5}
                    interactive
                    hoverStrength={0.7}
                  />
                </div>
              </div> */}

              {/* Preset selection and interactive hint */}
              <div className="mt-4 flex flex-col items-center gap-2">
                {/* <div className="flex flex-wrap justify-center gap-1.5 rounded-full border border-border bg-card/60 p-1 backdrop-blur">
                  {PRESET_OPTIONS.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => setBallPreset(id)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${ballPreset === id
                        ? "bg-accent text-accent-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div> */}
                {/* <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-accent" />
                  Interactive WebGL · Move cursor or click to pulse
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="services" eyebrow="01 — Services" title="Technology Solutions Built Around Your Needs" desc="Whether you are starting a business, improving existing systems or building a new product, we help you find the right technical solution.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, t, d]) => (
            <SpotlightCard
              key={t}
              theme="dark"
              spotlightColor="#ffffff"
              intensity={0.15}
              spotlightSize={240}
              softness={0.7}
              shape="circle"
              borderGlow={0.6}
              proximity={80}
              smoothing={0.3}
              grain={0}
              ambient={false}
              flare
              className="p-6"
            >
              <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section id="why" eyebrow="02 — Our Approach" title="Get Started Without the Guesswork">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map(([t, d], i) => (
            <div key={t} className="card-surface p-8">
              <span className="font-display text-4xl italic text-primary">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border p-8 md:flex-row md:items-center">
          <p className="max-w-2xl font-display text-xl italic">"We believe trust should come before payment. Start with a conversation, understand the plan, and move forward when you feel confident."</p>
          <a href="#contact" className="shrink-0 rounded-full border border-accent/60 px-6 py-3 text-sm text-accent transition hover:bg-accent hover:text-accent-foreground">Let's Discuss Your Idea</a>
        </div>
      </Section>

      <Section id="how" eyebrow="03 — How It Works" title="Four simple steps">
        <ol className="grid gap-10 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative border-t border-border pt-8">
              <span className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-accent shadow-glow" />
              <span className="font-display text-3xl italic text-primary">0{i + 1}</span>
              <h3 className="mt-3 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="team" eyebrow="04 — Our Team" title="Meet the People Behind the Solutions" desc="A collaborative team of engineers bringing different technical skills together to help businesses solve problems and build better digital experiences.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r, i) => <TeamCard key={i} role={r} n={i + 1} />)}
        </div>
      </Section>

      <Section id="who" eyebrow="05 — Who We Help" title="Expertise without an IT department" desc="You don't need a large IT department to access the right technical expertise. We help you take the next step with a practical, approachable team.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([Icon, t]) => (
            <div key={t} className="card-surface flex items-center gap-4 p-6">
              <Icon className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} /><span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="06 — About Us" title="Big Ideas Deserve Accessible Technology">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-muted-foreground">Our mission is to make technical expertise accessible to businesses and individuals who need practical digital solutions.</p>
            <ul className="mt-8 space-y-4">
              {["Long-term trust through transparent communication", "Helping you make informed technical decisions", "Flexible solutions based on real needs", "Working collaboratively, side by side", "Making technology easier to understand and use"].map((t) => (
                <li key={t} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{t}</li>
              ))}
            </ul>
          </div>
          <HalftoneReveal></HalftoneReveal>
        </div>
      </Section>

      <Section id="contact" eyebrow="07 — Contact" title="Have an Idea? Let's Talk." desc="Tell us what you're trying to build or what challenge you're facing. Your first consultation is free, with no obligation to proceed.">
        <ContactForm />
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl">[Logo]</p>
            <p className="mt-3 font-display text-lg italic text-gradient">Practical Technology. Transparent Partnerships.</p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">[Short company description]</p>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="block hover:text-foreground">{l}</a>)}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>[email@yourcompany.com]</p><p>[LinkedIn URL]</p>
            <a href="#" className="block hover:text-foreground">Privacy Policy</a>
            <a href="#" className="block hover:text-foreground">Terms of Service</a>
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} [Company Name]</p>
      </footer>
    </div>
  );
}

function TeamCard({ role, n }: { role: string; n: number }) {
  const [open, setOpen] = useState(false);
  return (
    <SpotlightCard
      theme="dark"
      spotlightColor="#ffffff"
      intensity={0.15}
      spotlightSize={240}
      softness={0.7}
      shape="circle"
      borderGlow={0.6}
      proximity={80}
      smoothing={0.3}
      grain={0}
      ambient={false}
      flare
      className="p-6"
    >
      <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-brand font-display text-xl text-primary-foreground">{String(n).padStart(2, "0")}</div>
      <h3 className="mt-5 font-semibold">[Full Name]</h3>
      <p className="text-sm text-accent">{role}</p>
      <p className="mt-2 text-xs text-muted-foreground">[Specializations]</p>
      {open && <p className="mt-3 text-sm text-muted-foreground">[Short professional introduction]</p>}
      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground" aria-expanded={open}>
          {open ? "Less" : "More"} <ChevronDown className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`} />
        </button>
        <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-accent"><Linkedin className="h-4 w-4" /></a>
      </div>
    </SpotlightCard>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<Record<string, string>>({});
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as { name?: string; email?: string; service?: string; description?: string; website?: string };
    if (d.website) return; // honeypot
    const x: Record<string, string> = {};
    if (!d.name?.trim()) x["name"] = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? "")) x["email"] = "Please enter a valid email";
    if (!d.service) x["service"] = "Please choose a service";
    if ((d.description ?? "").trim().length < 10) x["description"] = "Please tell us a bit more";
    setErr(x);
    if (!Object.keys(x).length) setSent(true);
  };
  if (sent) return (
    <div className="card-surface p-10 text-center">
      <Check className="mx-auto h-10 w-10 text-accent" />
      <h3 className="mt-4 font-display text-3xl">Thank you!</h3>
      <p className="mt-2 text-muted-foreground">We've received your request and will be in touch soon.</p>
    </div>
  );
  const F = ({ name, label, children }: { name: string; label: string; children: React.ReactNode }) => (
    <label className="block text-sm">
      <span className="mb-2 block text-muted-foreground">{label}</span>{children}
      {err[name] && <span className="mt-1 block text-xs text-destructive">{err[name]}</span>}
    </label>
  );
  return (
    <form onSubmit={submit} noValidate className="card-surface grid gap-5 p-8 md:grid-cols-2">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <F name="name" label="Full name *"><input name="name" className="field" /></F>
      <F name="business" label="Business name"><input name="business" className="field" /></F>
      <F name="email" label="Email address *"><input name="email" type="email" className="field" /></F>
      <F name="phone" label="Phone number"><input name="phone" type="tel" className="field" /></F>
      <F name="service" label="Service required *">
        <select name="service" defaultValue="" className="field"><option value="" disabled>Select…</option>{services.map(([, t]) => <option key={t}>{t}</option>)}</select>
      </F>
      <F name="budget" label="Estimated budget">
        <select name="budget" defaultValue="" className="field"><option value="">Not sure yet</option><option>Under $1,000</option><option>$1,000 – $5,000</option><option>$5,000 – $15,000</option><option>$15,000+</option></select>
      </F>
      <div className="md:col-span-2"><F name="description" label="Project description *"><textarea name="description" rows={5} className="field" /></F></div>
      <fieldset className="text-sm md:col-span-2">
        <legend className="mb-2 text-muted-foreground">Preferred contact method</legend>
        <div className="flex gap-6">{["Email", "Phone"].map((m) => <label key={m} className="flex items-center gap-2"><input type="radio" name="contact" value={m} defaultChecked={m === "Email"} className="accent-primary" />{m}</label>)}</div>
      </fieldset>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-muted-foreground">We only use your details to respond to your enquiry.</p>
        <button className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">Request My Free Consultation</button>
      </div>
    </form>
  );
}
