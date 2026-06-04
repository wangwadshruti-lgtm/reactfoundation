import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import EmployeeCard from './components/EmployeeCard'
import { mockEmployees } from './data/mockEmployees'
import type{Employee} from './components/EmployeeCard'

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [filter, setFilter] = useState<'all' | Employee['status']>('all')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // useEffect to simulate loading data (mock fetch)
  useEffect(() => {
    const t = setTimeout(() => setEmployees(mockEmployees), 600)
    return () => clearTimeout(t)
  }, [])

  const visible = employees.filter((e) => (filter === 'all' ? true : e.status === filter))

  return (
    <div className="app-root">
      <Navbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />
      <div className="app-body">
        <Sidebar open={sidebarOpen} filter={filter} setFilter={(f) => setFilter(f as any)} />
        <main className="content">
          <h2>Employees</h2>
          <p className="muted">Total: {visible.length}</p>

          <section className="employees-grid">
            {visible.length === 0 ? (
              <p>Loading employees…</p>
            ) : (
              visible.map((emp) => <EmployeeCard key={emp.id} employee={emp} />)
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
