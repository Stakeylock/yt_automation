
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { trendingVideos } from "@/lib/mockData";

const TrendingPreview = () => {
  return (
    <section className="animate-fade-in">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Trending Videos</h2>
        <Link
          to="/trending"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View all
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trendingVideos.slice(0, 4).map((video, index) => (
          <Link
            key={video.id}
            to={`/trending/${video.id}`}
            className={`group rounded-xl border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md animate-scale-in delay-${index * 100}`}
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
                {video.duration}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="mb-1 line-clamp-2 font-medium">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.channelName}</p>
              <p className="mt-1 text-xs text-muted-foreground">{video.views} • {video.publishedAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingPreview;
