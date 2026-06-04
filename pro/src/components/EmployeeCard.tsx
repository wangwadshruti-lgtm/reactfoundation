import React from 'react'

export type Employee = {
  id: number
  name: string
  title: string
  avatar?: string
  status: 'active' | 'on-leave' | 'inactive'
}

type Props = {
  employee: Employee
}

export default function EmployeeCard({ employee }: Props) {
  const badge = (() => {
    switch (employee.status) {
      case 'active':
        return <span className="badge badge--green">Active</span>
      case 'on-leave':
        return <span className="badge badge--yellow">On leave</span>
      default:
        return <span className="badge badge--gray">Inactive</span>
    }
  })()

  return (
    <article className="employee-card">
      <div className="employee-avatar" aria-hidden>
        {employee.avatar ? <img src={employee.avatar} alt={`${employee.name} avatar`} /> : <div className="avatar-fallback">{employee.name[0]}</div>}
      </div>
      <div className="employee-info">
        <h3>{employee.name}</h3>
        <p className="muted">{employee.title}</p>
      </div>
      <div className="employee-status">{badge}</div>
    </article>
  )
}
