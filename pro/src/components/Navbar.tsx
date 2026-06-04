import React from 'react'

type Props = {
  onToggleSidebar: () => void
}

export default function Navbar({ onToggleSidebar }: Props) {
  return (
    <header className="navbar">
      <button className="nav-toggle" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        ☰
      </button>
      <h1 className="nav-title">Employee Directory</h1>
    </header>
  )
}
