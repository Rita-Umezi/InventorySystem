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
          <h3>Product 1</h3>
          <p>₦10,000</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Product 2</h3>
          <p>₦12,000</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Product 3</h3>
          <p>₦15,000</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: 12 }}>
          <h3>Product 4</h3>
          <p>₦18,000</p>
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
    </div>
  );
}
