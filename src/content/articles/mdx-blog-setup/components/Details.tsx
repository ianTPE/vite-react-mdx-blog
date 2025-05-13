import React, { ReactNode } from 'react';

interface DetailsProps {
  summary: string;
  children: ReactNode;
  open?: boolean;
}

export const Details: React.FC<DetailsProps> = ({ summary, children, open = false }) => (
  <details open={open} style={{ margin: '16px 0', borderRadius: 4, background: '#f8fafc', padding: '8px 12px' }}>
    <summary style={{ cursor: 'pointer', fontWeight: 500 }}>{summary}</summary>
    <div style={{ marginTop: 8 }}>{children}</div>
  </details>
);
