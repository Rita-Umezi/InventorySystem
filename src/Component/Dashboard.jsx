import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();

  const navStyle = {
    display: 'flex',
    gap: '32px',
    background: '#f5f5f5',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e0e0e0',
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    margin: 0,
    padding: '16px 40px',
  };

  const linkStyle = (path) => ({
    textDecoration: 'none',
    color: '#333',
    fontWeight: location.pathname === path ? '700' : '400',
    display: 'flex',
    alignItems: 'center',
    gap: '6px', // space between icon and text
  });

  return (
    <div style={{ 
        margin: 0, 
        padding: 0, 
        overflow: 'hidden', 
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%'
      }}>
      <nav style={{
        ...navStyle,
        margin: 0,
        padding: '16px 0',
        width: '100%',
        left: 0,
        top: 0,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
    NORDAN<span style={{ fontSize: '12px', verticalAlign: 'super' }}>™</span>
  </div>
        <Link to="/" style={linkStyle('/')}>
          <i className="fas fa-house"></i>
          Dashboard
        </Link>

        <Link to="/inventory" style={linkStyle('/inventory')}>
          <i className="fas fa-box"></i>
          Inventory
        </Link>

        <Link to="/orders" style={linkStyle('/orders')}>
         <i className="fas fa-clipboard-list"></i>
          Orders
        </Link>
      </nav>

      <main style={{ 
        padding: '20px 24px', 
        minHeight: 'calc(100vh - 140px)',
        position: 'relative',
        width: '100%',
        left: 0
      }}>
        <Outlet />
      </main>
      <footer
        className="app-footer"
        style={{ padding: 12, textAlign: 'center', background: '#f3f3f3', borderTop: '1px solid #e0e0e0' }}
      >
        © 2025 NORDAN Inc. All rights reserved.
      </footer>
    </div>
  );
}
