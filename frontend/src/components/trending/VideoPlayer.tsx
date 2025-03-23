
import React from "react";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        ></iframe>
      </div>
      {title && <h2 className="mt-4 text-xl font-medium">{title}</h2>}
    </div>
  );
};

export default VideoPlayer;
