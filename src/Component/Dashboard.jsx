import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const location = useLocation();

  const navStyle = {
    display: 'flex',
    gap: '20px',
    padding: '12px',
    background: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
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
    <div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle('/')}>
          <i className="fa-solid fa-house"></i>
          Dashboard
        </Link>

        <Link to="/inventory" style={linkStyle('/inventory')}>
          <i className="fa-solid fa-box"></i>
          Inventory
        </Link>

        <Link to="/orders" style={linkStyle('/orders')}>
         <i className="fa-solid fa-clipboard-list"></i>
          Orders
        </Link>
      </nav>

      <main style={{ padding: 16, minHeight: 'calc(100vh - 140px)' }}>
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
