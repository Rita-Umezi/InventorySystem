import React from 'react';

export default function Orders() {
	const items = [
					{ orderID: 'ORD-10013', customerName: 'Oliver Twist' , VehicleModel: 'Model X' , OrderDate: 'January 4, 2025' , OrderValue: '$5,000' , Status: 'Pending' },
					{ orderID: 'ORD-10013', customerName: 'Oliver Twist' , VehicleModel: 'Model X' , OrderDate: 'January 4, 2025' , OrderValue: '$5,000' , Status: 'Pending' },
					{ orderID: 'ORD-10013', customerName: 'Oliver Twist' , VehicleModel: 'Model X' , OrderDate: 'January 4, 2025' , OrderValue: '$5,000' , Status: 'Pending' },
					{ orderID: 'ORD-10013', customerName: 'Oliver Twist' , VehicleModel: 'Model X' , OrderDate: 'January 4, 2025' , OrderValue: '$5,000' , Status: 'Pending' },
					{ orderID: 'ORD-10013', customerName: 'Oliver Twist' , VehicleModel: 'Model X' , OrderDate: 'January 4, 2025' , OrderValue: '$5,000' , Status: 'Pending' },
					{ orderID: 'ORD-10013', customerName: 'Oliver Twist' , VehicleModel: 'Model X' , OrderDate: 'January 4, 2025' , OrderValue: '$5,000' , Status: 'Pending' },

				];
	return (
		<div style={{ padding: 20 }}>
			{/* Main container for the four columns */}
			<div style={{
				display: 'flex',
				gap: '20px',
				width: '100%',
				minHeight: '200px'
			}}>
				{/* Column 1 - Pending Orders */}
				<div style={{
					flex: 1,
					backgroundColor: '#fff',
					borderRadius: '8px',
					padding: '16px',
					border: '1px solid #e0e0e0',
					boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
				}}>
					<h3 style={{ marginTop: 0, color: '#666' }}>Pending</h3>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px' }}>
							<p><strong>ORD-10013</strong><br/>
							Oliver Twist</p>
						</div>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px' }}>
							<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
							
						</div>
					</div>
				</div>

				{/* Column 2 - Processing */}
				<div style={{
					flex: 1,
					backgroundColor: '#fff',
					borderRadius: '8px',
					padding: '16px',
					border: '1px solid #e0e0e0',
					boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
				}}>
					<h3 style={{ marginTop: 0, color: '#666' }}>Processing</h3>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px' }}>
							<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
				
						</div>
					</div>
				</div>

				{/* Column 3 - Shipped */}
				<div style={{
					flex: 1,
					backgroundColor: '#fff',
					borderRadius: '8px',
					padding: '16px',
					border: '1px solid #e0e0e0',
					boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
				}}>
					<h3 style={{ marginTop: 0, color: '#666' }}>Shipped</h3>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px' }}>
								<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
							
						</div>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px' }}>
								<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
							
						</div>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px' }}>
								<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
							
						</div>
						
					</div>
				</div>

				{/* Column 4 - Delivered */}
				<div style={{
					flex: 1,
					backgroundColor: '#fff',
					borderRadius: '8px',
					padding: '16px',
					border: '1px solid #e0e0e0',
					boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
					
				}}>
					<h3 style={{ marginTop: 0, color: '#666' }}>Delivered</h3>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px', border: '1px solid #ececec' }}>
							<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
						</div>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px', border: '1px solid #ececec' }}>
							<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
						</div>
						<div style={{ padding: '12px', backgroundColor: '#f8f8f8', borderRadius: '4px', border: '1px solid #ececec' }}>
							<p><strong>ORD-10014</strong><br />
							Fionna Cake</p>
						</div>
					</div>
					
				</div>
				
			</div>

			<div>
				
				<h2 style={{marginTop:'150px'}}>All Orders</h2>
				 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Order ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Customer Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Vehicle Model</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Order Date</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Order Value</th>
			<th style={{ border: '1px solid #ccc', padding: '8px' }}>Status</th>
			
          </tr>
        </thead>
        <tbody>
          {items.map((order, index) => (
            <tr key={index} style={{
        backgroundColor: index % 2 === 0 ? '#928e8eff' : '#ffffff', // ash and white alternating
      }}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.orderID}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.customerName}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.VehicleModel}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.OrderDate}</td>
			   <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.OrderValue}</td>
			    <td style={{ border: '1px solid #ccc', padding: '8px' }}>{order.Status}</td>
				             </tr>
          ))}
        </tbody>
		</table>
			</div>
		</div>
	);
}
