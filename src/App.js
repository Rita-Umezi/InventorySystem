import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Product from './Component/Product';
import Inventory from './Component/Inventory';
import Orders from './Component/Orders';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* single index route: welcome message + product grid */}
          <Route
            index
            element={
              <div>
                <div style={{ padding: 20 }}>Welcome to the Dashboard</div>
                <Product />
              </div>
            }
          />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
