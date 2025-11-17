import { motion } from 'framer-motion'
import { Shield, Cpu, Cloud, LineChart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Enterprise-grade security baked into every layer of our solutions.',
  },
  {
    icon: Cpu,
    title: 'Advanced Engineering',
    desc: 'From embedded systems to cloud-native apps, we engineer with precision.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable, resilient infrastructure with automated CI/CD pipelines.',
  },
  {
    icon: LineChart,
    title: 'Data & Insights',
    desc: 'Unlock value with analytics, dashboards, and ML-driven insights.',
  },
]

export default function Features() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-blue-500/20 shadow-lg">
                  <f.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{f.desc}</p>
              <div className="absolute -bottom-20 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl group-hover:scale-150 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
