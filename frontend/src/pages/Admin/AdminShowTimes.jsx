import React, { useState } from 'react';

export default function AdminShowtimes() {
  const [shows, setShows] = useState([
    { id: 1, movie: 'Pushpa 2', theater: 'PVR: Xperia Mall', time: '2026-10-30 06:00 PM', screen: 'Screen 1' }
  ]);

  return (
    <div>
      <h2>Show Schedule Management</h2>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Schedule New Show</h3>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Use dropdowns to link movies with theaters, date-times, and screen matrices.</p>
        <button style={btnStyle('#22c55e')}>Create Schedule</button>
      </div>
      <h3>Active Schedules</h3>
      <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ background: '#e5e7eb', textAlign: 'left' }}>
            <th style={thStyle}>Movie</th>
            <th style={thStyle}>Theater</th>
            <th style={thStyle}>Screen</th>
            <th style={thStyle}>Timing</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(s => (
            <tr key={s.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={tdStyle}>{s.movie}</td>
              <td style={tdStyle}>{s.theater}</td>
              <td style={tdStyle}>{s.screen}</td>
              <td style={tdStyle}>{s.time}</td>
              <td style={tdStyle}><button style={btnStyle('#ef4444')}>Cancel Show</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const thStyle = { padding: '12px', borderBottom: '2px solid #ddd' };
const tdStyle = { padding: '12px' };
const btnStyle = (bg) => ({ background: bg, color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' });