import { useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../data/content'

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-amber-700/30 bg-[#0b0806]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Main navigation">
        <a href="#home" className="font-serif text-xl tracking-wide text-amber-200">
          George Restaurant
        </a>

        <button
          type="button"
          className="rounded-md border border-amber-700/50 px-3 py-2 text-sm text-amber-200 md:hidden"
          onClick={() => setOpen((state) => !state)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 text-sm text-amber-100 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-amber-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.ul
        id="mobile-menu"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="mx-4 overflow-hidden rounded-b-xl border-x border-b border-amber-700/30 bg-[#130d09] text-sm text-amber-100 md:hidden"
      >
        {navItems.map((item) => (
          <li key={item.href} className="border-t border-amber-700/20 first:border-none">
            <a href={item.href} className="block px-4 py-3" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </header>
  )
}

export default NavBar
