// Product.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

export default function Product() {
  // Sample data for Top 10 SKUs
  const skuData = [
    { name: "SKU 1", sales: 400 },
    { name: "SKU 2", sales: 300 },
    { name: "SKU 3", sales: 500 },
    { name: "SKU 4", sales: 200 },
    { name: "SKU 5", sales: 350 },
    { name: "SKU 6", sales: 450 },
    { name: "SKU 7", sales: 250 },
    { name: "SKU 8", sales: 400 },
    { name: "SKU 9", sales: 370 },
    { name: "SKU 10", sales: 310 },
  ];

  // Sample data for Daily Unit Sales
  const dailyData = [
    { day: "Mon", units: 120 },
    { day: "Tue", units: 200 },
    { day: "Wed", units: 150 },
    { day: "Thu", units: 220 },
    { day: "Fri", units: 300 },
    { day: "Sat", units: 250 },
    { day: "Sun", units: 280 },
  ];

const orders = [
    { partName: 'Suspension Kit', orderId: '001', customer: 'Rachel Adeleke', quantity: '5 units', orderValue: 100 },
    { partName: 'Brake Pads', orderId: '002', customer: 'Umezinwa Peter', quantity: '3 units', orderValue: 600 },
    { partName: 'GPS Navigation', orderId: '003', customer: 'Madueke Chisom', quantity: '10 units', orderValue: 10000 },
    { partName: 'Electric Motor', orderId: '004', customer: 'Olawole John', quantity: '30 units', orderValue: 3000 },
    { partName: 'Charging Cable', orderId: '005', customer: 'Njoku Michael', quantity: '2 units', orderValue: 2000 },
    { partName: 'Standard Headlights', orderId: '006', customer: 'Oluwa Daramola', quantity: '10 units', orderValue: 200 },
  ];

  return (
    <div style={{ padding: "40px" }}>
      {/* TEST HEADER TO ENSURE RENDERING */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Product Dashboard
      </h1>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Total Sales</h3>
          <p>₦10M</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Stock Values</h3>
          <p>₦15M</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Stock to Sales Ratio</h3>
          <p>0.23</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Out of Stock</h3>
          <p>6</p>
        </div>
      </div>

      {/* Charts Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Left - Bar Chart */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            backgroundColor: "#fafafa",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Top 10 SKU Sales</h3>
          <div style={{ width: "100%", height: 300 }}>
            <BarChart width={450} height={300} data={skuData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </div>
        </div>

        {/* Right - Line Chart */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            backgroundColor: "#fafafa",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Daily Unit Sales</h3>
          <div style={{ width: "100%", height: 300 }}>
            <LineChart width={450} height={300} data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="units"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </div>
        </div>
      </div>
   
        <div style={{ padding: '20px' }}>
      <h2>Orders</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Part Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Order ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Customer</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Quantity</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Order Value</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} style={{
        backgroundColor: index % 2 === 0 ? '#928e8eff' : '#ffffff', // ash and white alternating
      }}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.partName}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.orderId}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.customer}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.quantity}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>${order.orderValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  );
}
