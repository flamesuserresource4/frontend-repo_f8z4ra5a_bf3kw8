import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const services = [
  { title: 'Product Engineering', desc: 'End‑to‑end development from concept to launch with robust QA and security.' },
  { title: 'Cloud & DevOps', desc: 'Modernize infrastructure with containerization, IaC, and zero‑downtime deployments.' },
  { title: 'Cybersecurity', desc: 'Threat modeling, hardening, and continuous monitoring for peace of mind.' },
  { title: 'IoT & Embedded', desc: 'Connected devices, edge computing, and real‑time telemetry.' },
  { title: 'Data & AI', desc: 'Pipelines, analytics, and ML models to unlock actionable insights.' },
  { title: 'Consulting', desc: 'Architecture reviews, audits, and strategic roadmapping.' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-semibold">Services</motion.h1>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.04}} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
