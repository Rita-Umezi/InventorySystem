import React, { useMemo, useState } from 'react';

const ORDERS = [
	{ id: 'ORD-10013', customer: 'Oliver Twist', status: 'Pending' },
	{ id: 'ORD-10014', customer: 'Fionna Cake', status: 'Pending' },
	{ id: 'ORD-10015', customer: 'John Doe', status: 'In Progress' },
	{ id: 'ORD-10016', customer: 'Jane Smith', status: 'Shipped' },
	{ id: 'ORD-10017', customer: 'Alice Brown', status: 'Delivered' },
	{ id: 'ORD-10018', customer: 'Bob Green', status: 'Delivered' },
	{ id: 'ORD-10019', customer: 'Carl Rivers', status: 'Pending' },
	{ id: 'ORD-10020', customer: 'Dana White', status: 'In Progress' },
	{ id: 'ORD-10021', customer: 'Ethan Hunt', status: 'Shipped' },
	{ id: 'ORD-10022', customer: 'Faith Hill', status: 'Delivered' },
	{ id: 'ORD-10023', customer: 'George King', status: 'Pending' },
	{ id: 'ORD-10024', customer: 'Hannah Lee', status: 'In Progress' },
	{ id: 'ORD-10025', customer: 'Ian Moore', status: 'Shipped' },
	{ id: 'ORD-10026', customer: 'Judy Park', status: 'Delivered' },
	{ id: 'ORD-10027', customer: 'Kevin Rose', status: 'Pending' },
	{ id: 'ORD-10028', customer: 'Lara Scott', status: 'In Progress' },
	{ id: 'ORD-10029', customer: 'Mason Troy', status: 'Shipped' },
	{ id: 'ORD-10030', customer: 'Nina Vale', status: 'Delivered' },
	{ id: 'ORD-10031', customer: 'Omar West', status: 'Pending' },
	{ id: 'ORD-10032', customer: 'Paula York', status: 'In Progress' },
	{ id: 'ORD-10033', customer: 'Quinn Zary', status: 'Shipped' },
	{ id: 'ORD-10034', customer: 'Rita Umezi', status: 'Delivered' },
	{ id: 'ORD-10035', customer: 'Sam Allen', status: 'Pending' },
	{ id: 'ORD-10036', customer: 'Tina Brooks', status: 'In Progress' },
	{ id: 'ORD-10037', customer: 'Uma Carter', status: 'Shipped' },
	{ id: 'ORD-10038', customer: 'Vince Diaz', status: 'Delivered' },
];

// Extended orders with more details (used by both the columns and the table)
const EXTENDED_ORDERS = ORDERS.map((o, i) => {
  const models = ['Transit Van', 'Hilux', 'Sprinter', 'Civic', 'Corolla', 'Ranger'];
  const dates = ['2025-10-28', '2025-10-29', '2025-10-30', '2025-10-31', '2025-11-01', '2025-11-02'];
  const values = ['₦120,000', '₦95,000', '₦210,000', '₦88,500', '₦102,300', '₦76,400'];
  return {
    ...o,
    vehicleModel: models[i % models.length],
    orderDate: dates[i % dates.length],
    orderValue: values[i % values.length],
  };
});

export default function Orders() {
	const [query, setQuery] = useState('');
	const [tableQuery, setTableQuery] = useState('');

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return EXTENDED_ORDERS;
		return EXTENDED_ORDERS.filter(o =>
			o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q)
		);
	}, [query]);

	const tableFiltered = useMemo(() => {
		const q = tableQuery.trim().toLowerCase();
		if (!q) return filtered; // when table search empty, follow main search
		return EXTENDED_ORDERS.filter(o =>
			o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q)
		);
	}, [tableQuery, filtered]);

	const statuses = ['Pending', 'In Progress', 'Shipped', 'Delivered'];

	return (
		<div style={{ padding: '20px 100px' }}>
			<h1>Orders by Status</h1>
			<div style={{ marginBottom: 12, display: 'flex', justifyContent: 'flex-end' }}>
				<input
					aria-label="Search orders"
					placeholder="Search by order id or customer"
					value={query}
					onChange={e => setQuery(e.target.value)}
					style={{ padding: '8px 12px', width: 360, borderRadius: 6, border: '1px solid #ccc' }}
				/>
			</div>

			{/* Main container for the four columns */}
			<div
				style={{
					display: 'flex',
					gap: '20px',
					width: '100%',
					minHeight: '200px',
				}}
			>
				{statuses.map(status => {
					const items = filtered.filter(o => o.status === status);
					return (
						<div
							key={status}
							style={{
								flex: 1,
								backgroundColor: status === 'Pending' ? '#f5f5f5' : '#fff', // 👈 lighter ash for 'Pending'
								borderRadius: '8px',
								padding: '16px',
								border: '1px solid #e0e0e0',
								boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
							}}
						>
							<h3 style={{ marginTop: 0, color: '#666' }}>{status}</h3>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
								{items.length === 0 ? (
									<div style={{ color: '#999' }}>No orders</div>
								) : (
									items.map(o => (
										<div
											key={o.id}
											style={{ 
												padding: '12px', 
												backgroundColor: '#e8e8e8', 
												borderRadius: '6px', 
												border: '1px solid #ddd',
												transition: 'all 0.2s',
												cursor: 'pointer'
											}}
											onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d9d9d9'}
											onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e8e8e8'}
										>
											<p style={{ margin: 0 }}>
												<strong>{o.id}</strong>
												<br />
												{o.customer}
											</p>
										</div>
									))
								)}
							</div>
						</div>
					);
				})}
			</div>

			{/* Tabular view of orders */}
			<div style={{ marginTop: 50 }}>
				<h1 style={{ marginBottom: 12 }}>All Orders</h1>
				<div style={{ marginBottom: 12, display: 'flex', justifyContent: 'flex-end' }}>
					<input
						aria-label="Search table orders"
						placeholder="Search table by order id or customer"
						value={tableQuery}
						onChange={e => setTableQuery(e.target.value)}
						style={{ padding: '8px 12px', width: 420, borderRadius: 6, border: '1px solid #ccc' }}
					/>
				</div>
				<table style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Order ID</th>
							<th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Customer</th>
							<th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Vehicle Model</th>
							<th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Order Date</th>
							<th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>Order Value</th>
							<th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Status</th>
						</tr>
					</thead>
							<tbody>
							{tableFiltered.map((row, idx) => (
								<tr 
									key={row.id} 
									style={{ 
										backgroundColor: idx % 2 === 0 ? '#ffffff' : '#e8e8e8',
										transition: 'background-color 0.2s',
										cursor: 'pointer',
										':hover': {
											backgroundColor: '#d9d9d9'
										}
									}}
									onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d9d9d9'}
									onMouseLeave={e => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? '#ffffff' : '#e8e8e8'}
								>
									<td style={{ border: '1px solid #eee', padding: '8px' }}>{row.id}</td>
									<td style={{ border: '1px solid #eee', padding: '8px' }}>{row.customer}</td>
									<td style={{ border: '1px solid #eee', padding: '8px' }}>{row.vehicleModel}</td>
									<td style={{ border: '1px solid #eee', padding: '8px' }}>{row.orderDate}</td>
									<td style={{ border: '1px solid #eee', padding: '8px', textAlign: 'right' }}>{row.orderValue}</td>
									<td style={{ border: '1px solid #eee', padding: '8px' }}>{row.status}</td>
								</tr>
							))}
						</tbody>
				</table>
			</div>
		</div>
	);
}
