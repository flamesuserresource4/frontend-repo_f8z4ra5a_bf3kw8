import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-semibold">About Nutec Tech</motion.h1>
          <p className="mt-4 text-slate-600">We combine engineering rigor with design excellence to deliver secure, reliable, and elegant technology solutions. Our philosophy is simple: build with intention, scale with confidence, and design with care.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {['Mission','Values','Team'].map((title, i) => (
              <motion.div key={title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">We’re dedicated to advancing secure, user-centric technology. We operate with integrity, curiosity, and a commitment to excellence. Our team blends cross‑disciplinary expertise to solve complex problems.</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
