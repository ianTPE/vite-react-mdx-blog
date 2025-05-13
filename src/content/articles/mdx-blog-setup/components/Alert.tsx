import React from 'react';

export type AlertType = 'info' | 'warning' | 'error' | 'success';

const COLORS: Record<AlertType, { bg: string; border: string }> = {
  info: { bg: '#e0f2fe', border: '#38bdf8' },
  warning: { bg: '#fef9c3', border: '#facc15' },
  error: { bg: '#fee2e2', border: '#ef4444' },
  success: { bg: '#dcfce7', border: '#22c55e' },
};

interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ type = 'info', children }) => {
  const color = COLORS[type];
  return (
    <div
      style={{
        background: color.bg,
        borderLeft: `6px solid ${color.border}`,
        padding: '12px 16px',
        borderRadius: 4,
        margin: '16px 0',
      }}
      role={type === 'error' ? 'alert' : undefined}
    >
      {children}
    </div>
  );
};
