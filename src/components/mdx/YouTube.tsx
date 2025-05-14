import React from 'react';

interface YouTubeProps {
  id: string;
  title?: string;
}

const YouTube: React.FC<YouTubeProps> = ({ id, title = 'YouTube video' }) => {
  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTube;