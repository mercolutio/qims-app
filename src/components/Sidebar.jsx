// src/components/Sidebar.jsx

export default function Sidebar() {
    return (
      <aside
        style={{
          width: '240px',
          height: '100vh',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '4px 0 20px rgba(0,0,0,0.3)',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        <h2 style={{ fontWeight: 700, marginBottom: '2rem' }}>QIMS</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Dashboard</a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Projekte</a>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Bauteile</a>
            </li>
            <li>
              <a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Prüfungen</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  