import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Lightbulb, ShieldCheck, HeartHandshake, Users, Target, Sparkles } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const values = [
  { icon: ShieldCheck, title: 'Security by Design', desc: 'Protection woven into every layer—from architecture to deployment.' },
  { icon: Lightbulb, title: 'Engineering Rigor', desc: 'Quality, testing, and documentation drive sustainable velocity.' },
  { icon: HeartHandshake, title: 'Human‑Centered', desc: 'We design for people first—clarity, accessibility, and trust.' },
  { icon: Target, title: 'Outcome Focused', desc: 'We align to your goals and ship measurable impact.' },
]

const metrics = [
  { kpi: '12+', label: 'Years building products' },
  { kpi: '99.95%', label: 'Typical uptime SLO' },
  { kpi: '50+ ', label: 'Successful launches' },
  { kpi: '24/7', label: 'Proactive monitoring' },
]

const team = [
  { name: 'Alex Rivera', role: 'Founder & CEO', bio: 'Systems engineer with a passion for elegant, secure infrastructure.' },
  { name: 'Jordan Lee', role: 'Head of Product', bio: 'Bridges user needs and technical constraints into focused roadmaps.' },
  { name: 'Sam Patel', role: 'Principal Engineer', bio: 'Low‑level specialist across embedded, networking, and cloud.' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        {/* Intro */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About Nutec Tech</h1>
            <p className="mt-4 text-slate-600">We blend world‑class engineering with refined product sensibilities. Our approach is simple: obsess over the details, build for longevity, and ship with confidence.</p>
          </motion.div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 text-center">
                <div className="text-3xl font-semibold text-slate-900">{m.kpi}</div>
                <div className="mt-1 text-sm text-slate-600">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <motion.h2 {...fadeUp} className="text-2xl font-semibold">What we stand for</motion.h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/10 text-blue-600 p-2 border border-blue-200/40">
                    <v.icon size={20} />
                  </div>
                  <h3 className="font-semibold">{v.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div {...fadeUp} className="flex items-center gap-2">
            <Users className="text-blue-600" size={18} />
            <h2 className="text-2xl font-semibold">Leadership</h2>
          </motion.div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <div className="h-28 rounded-xl bg-gradient-to-br from-blue-100 via-white to-blue-50 border border-white/50" />
                <div className="mt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.role}</div>
                  <p className="mt-2 text-sm text-slate-600">{t.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture Banner */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-blue-100/90">
                  <Sparkles size={16} />
                  <span className="text-sm">Crafted with care</span>
                </div>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold">We build products we’re proud of</h3>
                <p className="mt-2 text-blue-50/90 max-w-xl">From embedded systems to cloud platforms, we hold a high bar for reliability, performance, and usability.</p>
              </div>
              <button className="shrink-0 rounded-full bg-white/95 text-blue-700 px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition">Explore our services</button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
