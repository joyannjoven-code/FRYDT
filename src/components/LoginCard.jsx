import { useState } from 'react'
import Modal from './Modal'

const inputClass =
  'min-h-[46px] w-full rounded-lg border border-field bg-surface px-3.5 font-normal text-main outline-none placeholder:text-ink-soft focus:border-teal focus:ring-2 focus:ring-teal/20'

// Interactive features #2-#4: role switch (state lives in App and is passed down as props),
// show/hide password with form validation, and a "Forgot password" modal.
export default function LoginCard({ roles, role, onRoleChange }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState(null) // { type: 'error' | 'ok', text }
  const [forgotOpen, setForgotOpen] = useState(false)

  const roleTitle = roles.find((r) => r.id === role).title

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !password) {
      setMessage({ type: 'error', text: 'Enter your username and password to continue.' })
      return
    }
    // No backend yet: the real sign-in will connect to laundry_shop_db in a later deliverable.
    setMessage({ type: 'ok', text: `Demo only: ${roleTitle} sign-in will connect to the database later.` })
  }

  return (
    <section
      id="login"
      aria-labelledby="login-title"
      className="flex flex-col gap-[18px] rounded-xl border border-ink-line bg-surface p-6 shadow-[0_12px_32px_rgba(15,42,67,.12)] sm:p-7"
    >
      <div>
        <h2 id="login-title" className="m-0 text-[22px] font-bold">
          Sign in
        </h2>
        <div className="text-sm leading-relaxed text-ink-soft">Authorized FRYDT personnel only.</div>
      </div>

      <div className="grid grid-cols-2 rounded-[10px] bg-seg p-1" role="radiogroup" aria-label="Sign in as">
        {roles.map((r) => (
          <button
            key={r.id}
            type="button"
            role="radio"
            aria-checked={role === r.id}
            onClick={() => onRoleChange(r.id)}
            className={`flex min-h-11 items-center justify-center rounded-lg text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link ${
              role === r.id ? 'bg-navy text-white dark:bg-teal' : 'text-ink-soft'
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-1.5 text-sm font-medium">
          <label htmlFor="username">{roleTitle} username</label>
          <input
            id="username"
            className={inputClass}
            type="text"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5 text-sm font-medium">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              id="password"
              className={`${inputClass} pr-16`}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-pressed={showPassword}
              className="absolute right-1 top-1/2 inline-flex min-h-11 -translate-y-1/2 items-center rounded-md px-3 text-[13px] font-medium text-link hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-link"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <label className="inline-flex min-h-11 items-center gap-2">
            <input className="h-[18px] w-[18px] accent-teal" type="checkbox" /> Keep me signed in
          </label>
          <button
            type="button"
            onClick={() => setForgotOpen(true)}
            className="inline-flex min-h-11 items-center text-link underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-link"
          >
            Forgot password?
          </button>
        </div>

        {message && (
          <div
            role="status"
            className={`rounded-lg px-3.5 py-2.5 text-sm ${
              message.type === 'error' ? 'bg-[#FDECEC] text-[#8A1F1F] dark:bg-[#3A1D22] dark:text-[#F4B8BE]' : 'bg-teal-pale text-[#0F4B5A] dark:text-[#BFE9F1]'
            }`}
          >
            {message.text}
          </div>
        )}

        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-teal bg-teal px-5 font-medium text-white transition hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          Sign in as {roleTitle}
        </button>
      </form>

      <div className="border-t border-ink-line pt-3.5 text-[13px] leading-relaxed text-ink-soft">
        New handler? Ask the owner to create your account.
      </div>

      <Modal open={forgotOpen} title="Forgot your password?" onClose={() => setForgotOpen(false)}>
        <p className="m-0">
          Handlers: ask the shop owner to reset your password. Owners: contact your system administrator.
          Customers do not use this system.
        </p>
      </Modal>
    </section>
  )
}
