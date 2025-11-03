import React from 'react';

export default function Inventory() {
	const items = [
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
		{part:'Battery Pack', sku:'BAT-125-GEN1', unitPrice: '$250', category:'Electrical Component', barcode:'123456789012', lowStock: 'Yes', stock: '90 units', restock: '', salesVolume: '$2,000,000', },
	];

	return (
		<div style={{padding:20}}>
			<h2>Inventory</h2>
			<p>This is the Inventory page. Add your inventory list here.</p>
			
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
          {items.map((order, index) => (
            <tr key={index} style={{
        backgroundColor: index % 2 === 0 ? '#928e8eff' : '#ffffff', // ash and white alternating
      }}>
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
