import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Innovating with precision and elegance.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-600"
            >
              Nutec Tech delivers modern engineering and digital solutions with a focus on reliability, security, and design. Crafted with a refined, Apple-inspired aesthetic.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#contact" className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">Start a project</a>
              <a href="#services" className="rounded-full border border-slate-300/70 bg-white/80 backdrop-blur px-6 py-3 text-sm font-medium text-slate-800 hover:bg-white transition-colors">Explore services</a>
            </motion.div>
          </div>

          <div className="relative h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_10px_60px_-20px_rgba(30,64,175,0.35)]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-blue-300/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
