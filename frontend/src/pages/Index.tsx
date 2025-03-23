
import React from "react";
import ChannelStats from "@/components/dashboard/ChannelStats";
import QuickActions from "@/components/dashboard/QuickActions";
import TrendingPreview from "@/components/dashboard/TrendingPreview";

const Index = () => {
  return (
    <div className="px-6 pt-6">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <ChannelStats />
      <QuickActions />
      <TrendingPreview />
    </div>
  );
};

export default Index;
