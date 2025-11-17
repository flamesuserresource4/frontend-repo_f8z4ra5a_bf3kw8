export default function Footer() {
  return (
    <footer className="relative border-t border-white/40 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Nutec Tech Inc. All rights reserved.</p>
        <div className="text-sm text-slate-500">Designed with a refined, minimal aesthetic.</div>
      </div>
    </footer>
  )
}
