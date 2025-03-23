
import React from "react";
import StatCard from "../ui/StatCard";
import { channelStats } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const ChannelStats = () => {
  return (
    <section className="mb-8 animate-fade-in">
      <h2 className="mb-4 text-xl font-semibold">Channel Statistics</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channelStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={<stat.icon className="h-5 w-5" />}
            className={stat.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ChannelStats;
