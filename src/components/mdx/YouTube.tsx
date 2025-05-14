import React from 'react';

interface YouTubeProps {
  id: string;
  title?: string;
}

export default function YouTube({ id, title = 'YouTube video' }: YouTubeProps) {
  // Log rendering for debugging
  React.useEffect(() => {
    console.log(`Rendering YouTube component with ID: ${id}`);
  }, [id]);
  
  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-lg shadow-md">
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
}