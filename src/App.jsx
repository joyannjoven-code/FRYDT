import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Roles from './components/Roles'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import { shop, navLinks, heroHighlights, features, roles, steps } from './data/content'

export default function App() {
  // Shared state: the role picked in the sign-in box also highlights the matching role card.
  const [role, setRole] = useState('owner')
  const [isDark, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen bg-ink-mist font-sans text-main">
      <Header links={navLinks} isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero highlights={heroHighlights} roles={roles} role={role} onRoleChange={setRole} />
        <Features features={features} />
        <Roles roles={roles} activeRole={role} onRoleChange={setRole} />
        <HowItWorks steps={steps} />
      </main>
      <Footer shop={shop} />
    </div>
  )
}
