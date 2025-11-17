import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Cloud, Cpu, Shield, Workflow, Radar, Cog, Server, Lock, ChartBar } from 'lucide-react'

const services = [
  { icon: Cpu, title: 'Product Engineering', desc: 'End‑to‑end development from concept to launch with robust QA and security.' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Modernize infrastructure with containers, IaC, and zero‑downtime deploys.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Threat modeling, hardening, and continuous monitoring for peace of mind.' },
  { icon: Workflow, title: 'IoT & Embedded', desc: 'Connected devices, edge compute, and real‑time telemetry.' },
  { icon: ChartBar, title: 'Data & AI', desc: 'Data pipelines, analytics, and ML models to unlock insights.' },
  { icon: Cog, title: 'Consulting', desc: 'Architecture reviews, audits, and strategic roadmapping.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        {/* Header */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Services</h1>
            <p className="mt-4 max-w-3xl text-slate-600">We design and ship secure, scalable systems with an end‑to‑end mindset—from embedded to cloud. Each engagement is tailored, with craftsmanship and measurable outcomes at the core.</p>
          </motion.div>

          {/* Grid */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="group rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/10 text-blue-600 p-2 border border-blue-200/40">
                    <s.icon size={20} />
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-600">Learn more →</button>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {["Discover","Design","Deliver"].map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <div className="text-sm uppercase tracking-wide text-slate-500">Step {i+1}</div>
                <div className="mt-2 font-semibold">{step}</div>
                <p className="mt-2 text-sm text-slate-600">We partner closely to align on outcomes, iterate with clarity, and ship with quality. Transparency and documentation keep teams in sync.</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
