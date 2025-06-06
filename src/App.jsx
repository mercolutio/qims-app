import Sidebar from './components/Sidebar';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        margin: 0,
        fontFamily: 'Segoe UI, sans-serif',
        background: 'linear-gradient(135deg, #1f1f2f, #2c2c3e)',
        color: 'white'
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          padding: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            borderRadius: '16px',
            padding: '3rem',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            border: '1px solid rgba(255,255,255,0.2)',
            maxWidth: '600px',
            width: '100%'
          }}
        >
          <h1 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Willkommen bei QIMS</h1>
          <p style={{ color: '#ccc' }}>Hier wird später dein Dashboard erscheinen.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
