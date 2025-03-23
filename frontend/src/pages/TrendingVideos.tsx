
import React, { useState } from "react";
import { trendingVideos } from "@/lib/mockData";
import VideoPlayer from "@/components/trending/VideoPlayer";

const TrendingVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(trendingVideos[0]);

  return (
    <div className="px-6 pt-6">
      <h1 className="mb-6 text-2xl font-bold">Trending Videos</h1>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="col-span-2">
          <VideoPlayer 
            videoId={selectedVideo.videoId}
            title={selectedVideo.title}
          />
          
          <div className="mt-4">
            <h3 className="font-medium text-lg">{selectedVideo.channelName}</h3>
            <p className="text-sm text-muted-foreground">{selectedVideo.views} • {selectedVideo.publishedAt}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">More Trending</h2>
          {trendingVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`flex cursor-pointer gap-3 rounded-lg border p-3 transition-all duration-200 hover:bg-secondary/50 ${
                selectedVideo.id === video.id ? "bg-secondary" : ""
              }`}
            >
              <div className="relative h-20 w-36 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-xs text-white">
                  {video.duration}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="line-clamp-2 text-sm font-medium">{video.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{video.channelName}</p>
                <p className="text-xs text-muted-foreground">{video.views} • {video.publishedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingVideos;
