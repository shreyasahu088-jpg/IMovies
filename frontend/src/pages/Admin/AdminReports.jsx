import React from 'react';

export default function AdminReports() {
  return (
    <div>
      <h2>Revenue Reports & Analytics</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '25px' }}>
        <div style={cardStyle}><h4>Total Revenue</h4><h2 style={{ color: '#059669' }}>₹1,42,800</h2></div>
        <div style={cardStyle}><h4>Total Bookings</h4><h2>340 Tickets</h2></div>
        <div style={cardStyle}><h4>Active Shows</h4><h2>12 Runs</h2></div>
      </div>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
        <h3>Export Reports</h3>
        <p>Download full transaction histories and monthly statements as CSV or PDF.</p>
        <button style={{ background: '#1f2937', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer' }}>Export CSV Statement</button>
      </div>
    </div>
  );
}
const cardStyle = { background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };