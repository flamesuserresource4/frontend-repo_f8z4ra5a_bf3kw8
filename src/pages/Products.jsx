import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Cpu, Camera, Box, ShieldCheck } from 'lucide-react'

const products = [
  { icon: Box, title: 'AccessPoint X', desc: 'Next‑gen access control hardware with encrypted communication.' },
  { icon: Camera, title: 'VisionGuard', desc: 'Computer‑vision powered monitoring with privacy‑first design.' },
  { icon: Cpu, title: 'NimbusEdge', desc: 'Edge compute gateway with OTA updates and observability.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        {/* Header */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.div {...fadeUp}>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Products</h1>
            <p className="mt-4 max-w-3xl text-slate-600">A focused suite of devices and platforms designed for reliability, security, and ease of operation. Built to integrate cleanly with your ecosystem.</p>
          </motion.div>

          {/* Grid */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.04 }} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-500/10 text-blue-600 p-2 border border-blue-200/40">
                    <p.icon size={20} />
                  </div>
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck size={14} className="text-green-600" />
                  <span>Enterprise‑grade security</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">Looking for specs or demos?</h3>
                <p className="mt-2 text-blue-50/90 max-w-xl">Request detailed datasheets, security whitepapers, and sandbox access for your team.</p>
              </div>
              <a href="/contact" className="shrink-0 rounded-full bg-white/95 text-blue-700 px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition">Contact sales</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
