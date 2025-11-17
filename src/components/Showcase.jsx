import { motion } from 'framer-motion'

const items = [
  {
    title: 'Smart Access Control',
    desc: 'Secure, frictionless entry systems for modern facilities.',
  },
  {
    title: 'Industrial IoT Platforms',
    desc: 'Real-time monitoring and predictive maintenance.',
  },
  {
    title: 'Custom Software Systems',
    desc: 'Tailored applications designed for scale and usability.',
  },
]

export default function Showcase() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{card.desc}</p>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/5 via-transparent to-blue-400/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
