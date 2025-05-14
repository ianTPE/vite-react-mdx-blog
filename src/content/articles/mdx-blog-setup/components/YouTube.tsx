import React from 'react';

interface YouTubeProps {
  id: string;
  title?: string;
}

export const YouTube: React.FC<YouTubeProps> = ({ id, title = 'YouTube video' }) => {
  return (
    <div style={{ aspectRatio: '16/9', margin: '24px 0' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
