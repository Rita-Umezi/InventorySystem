// Product.jsx
export default function Product() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      padding: '16px'
    }}>
      <div style={{ border: '1px solid #ccc', padding: 12 }}>
        <h3>Product 1</h3>
        <p>₦10,000</p>
      </div>
      <div style={{ border: '1px solid #ccc', padding: 12 }}>
        <h3>Product 2</h3>
        <p>₦15,000</p>
      </div>
      <div style={{ border: '1px solid #ccc', padding: 12 }}>
        <h3>Product 3</h3>
        <p>₦20,000</p>
      </div>
    </div>
  );
}
