import React from 'react'

type Props = {
  open: boolean
  filter: string
  setFilter: (f: string) => void
}

export default function Sidebar({ open, filter, setFilter }: Props) {
  if (!open) return null

  return (
    <aside className="sidebar">
      <h2>Filters</h2>
      <ul>
        <li>
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
            Active
          </button>
        </li>
        <li>
          <button className={filter === 'on-leave' ? 'active' : ''} onClick={() => setFilter('on-leave')}>
            On Leave
          </button>
        </li>
        <li>
          <button className={filter === 'inactive' ? 'active' : ''} onClick={() => setFilter('inactive')}>
            Inactive
          </button>
        </li>
      </ul>
    </aside>
  )
}
