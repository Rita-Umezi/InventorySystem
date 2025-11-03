import React, { useMemo, useState } from 'react';

const DEFAULT_ITEMS = [
  { part: 'Battery Pack', sku: 'BAT-125-GEN1', unitPrice: '₦250', category: 'Electrical Component', barcode: '123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '₦2,000,000' },
  { part: 'Motor', sku: 'MTR-457', unitPrice: '₦1,500', category: 'Mechanical', barcode: '223456789012', lowStock: 'No', stock: '40 units', restock: '', salesVolume: '₦1,000,000' },
  { part: 'Sensor', sku: 'SNS-900', unitPrice: '₦750', category: 'Electronics', barcode: '323456789012', lowStock: 'No', stock: '150 units', restock: '', salesVolume: '₦500,000' },
  { part: 'Controller', sku: 'CTL-33', unitPrice: '₦5,000', category: 'Electronics', barcode: '423456789012', lowStock: 'Yes', stock: '10 units', restock: '', salesVolume: '₦3,000,000' },
];

export default function Inventory() {
  const items = DEFAULT_ITEMS;

  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(it =>
      it.part.toLowerCase().includes(q) || it.sku.toLowerCase().includes(q) || it.barcode.toLowerCase().includes(q)
    );
  }, [query, items]);

  return (
    <div style={{ padding: '20px 40px' }}>
      <h2>Inventory</h2>
      <p>This is the Inventory page. Add your inventory list here.</p>

      <div style={{ marginBottom: 12 }}>
        <input
          aria-label="Search inventory"
          placeholder="Search by part, SKU or barcode"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ padding: '8px 12px', width: 420, borderRadius: 6, border: '1px solid #ccc' }}
        />
      </div>

      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Part</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>SKU</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Unit Price</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Category</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Barcode</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Low Stock</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Stock</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Restock</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Sales Volume</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((order, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.part}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.sku}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.unitPrice}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.category}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                  <i className="fas fa-barcode" aria-hidden="true" style={{ marginRight: 8 }}></i>
                  {order.barcode}
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.lowStock}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.stock}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.restock}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.salesVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
