import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-slate-900">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl font-semibold">Contact us</motion.h1>
          <p className="mt-4 text-slate-600">Share a few details and we’ll get back within one business day.</p>
          <form className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="First name" />
              <input className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Last name" />
            </div>
            <input className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Company" />
            <input type="email" className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Email" />
            <textarea rows="5" className="rounded-xl border border-slate-200/70 bg-white/80 backdrop-blur px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="How can we help?" />
            <button type="button" className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">Send message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
