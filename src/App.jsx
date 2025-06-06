import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    const { data, error } = await supabase.from('projects').select('*')
    if (error) console.error(error)
    else setProjects(data)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>QIMS – Projekte</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App