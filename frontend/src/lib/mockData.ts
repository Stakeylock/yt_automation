
import { 
  BarChart3, 
  Camera, 
  Edit3, 
  Image, 
  MessageSquare, 
  Rocket, 
  Search, 
  Star, 
  ThumbsUp, 
  Users, 
  Video 
} from "lucide-react";

export interface ChannelStat {
  id: string;
  title: string;
  value: string | number;
  change: number;
  icon: React.FC;
  color: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.FC;
  path: string;
  color: string;
}

export interface Video {
  id: string;
  title: string;
  channelName: string;
  views: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  videoId: string;
}

export interface WorkflowStepData {
  id: string;
  title: string;
  description: string;
  icon: React.FC;
  inputPlaceholder: string;
  buttonText: string;
}

export const channelStats: ChannelStat[] = [
  {
    id: "views",
    title: "Total Views",
    value: "1.2M",
    change: 12.5,
    icon: BarChart3,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "subscribers",
    title: "Subscribers",
    value: "142K",
    change: 3.2,
    icon: Users,
    color: "bg-red-50 text-red-600",
  },
  {
    id: "watch-time",
    title: "Watch Time",
    value: "85.4K",
    change: 8.1,
    icon: Video,
    color: "bg-green-50 text-green-600",
  },
  {
    id: "engagement",
    title: "Engagement",
    value: "9.6%",
    change: -1.8,
    icon: ThumbsUp,
    color: "bg-purple-50 text-purple-600",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: "ideas",
    title: "Generate Ideas",
    description: "Create new video concepts with AI",
    icon: Rocket,
    path: "/workflow",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    id: "thumbnails",
    title: "Create Thumbnails",
    description: "Design eye-catching thumbnails",
    icon: Image,
    path: "/workflow",
    color: "bg-amber-50 border-amber-100",
  },
  {
    id: "filming",
    title: "Filming Tips",
    description: "Get personalized filming advice",
    icon: Camera,
    path: "/workflow",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    id: "editing",
    title: "Editing Flow",
    description: "Structure your video edits",
    icon: Edit3,
    path: "/workflow",
    color: "bg-blue-50 border-blue-100",
  },
];

export const trendingVideos: Video[] = [
  {
    id: "v1",
    title: "10 Advanced iPhone Camera Tips & Tricks",
    channelName: "Tech Masters",
    views: "1.2M views",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "12:34",
    publishedAt: "2 days ago",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "How I Built a Successful YouTube Channel in 6 Months",
    channelName: "Creator Academy",
    views: "850K views",
    thumbnail: "https://i.ytimg.com/vi/hls3rmY9unE/maxresdefault.jpg",
    duration: "18:21",
    publishedAt: "1 week ago",
    videoId: "hls3rmY9unE",
  },
  {
    id: "v3",
    title: "The Perfect Morning Routine for Productivity",
    channelName: "Life Optimized",
    views: "2.4M views",
    thumbnail: "https://i.ytimg.com/vi/KGCc1cUbx90/maxresdefault.jpg",
    duration: "10:05",
    publishedAt: "3 days ago",
    videoId: "KGCc1cUbx90",
  },
  {
    id: "v4",
    title: "Why Most People Fail at Content Creation",
    channelName: "Success Mindset",
    views: "1.5M views",
    thumbnail: "https://i.ytimg.com/vi/Nj5RQaXXdK4/maxresdefault.jpg",
    duration: "14:52",
    publishedAt: "4 days ago",
    videoId: "Nj5RQaXXdK4",
  },
];

export const workflowSteps: WorkflowStepData[] = [
  {
    id: "ideation",
    title: "Ideation",
    description: "Generate video ideas based on your topic or niche",
    icon: Rocket,
    inputPlaceholder: "Enter a topic (e.g., iPhone photography)",
    buttonText: "Generate Ideas",
  },
  {
    id: "thumbnail",
    title: "Thumbnail Creation",
    description: "Create compelling thumbnail descriptions",
    icon: Image,
    inputPlaceholder: "Enter your video title",
    buttonText: "Generate Thumbnail",
  },
  {
    id: "filming",
    title: "Filming Suggestions",
    description: "Get filming techniques for your video style",
    icon: Camera,
    inputPlaceholder: "Describe your video style",
    buttonText: "Get Filming Tips",
  },
  {
    id: "editing",
    title: "Editing Flow",
    description: "Structure your video edits for maximum impact",
    icon: Edit3,
    inputPlaceholder: "Summarize your video content",
    buttonText: "Generate Editing Guide",
  },
  {
    id: "publishing",
    title: "Publishing Strategy",
    description: "Optimize your video for YouTube's algorithm",
    icon: Rocket,
    inputPlaceholder: "Enter keywords for your video",
    buttonText: "Create Publishing Plan",
  },
];

export const exampleResults = {
  ideation: [
    "Master iPhone Camera: Settings You Need to Change Now",
    "iPhone Photography: 7 Hidden Features Professionals Use",
    "Transform Your Instagram with These iPhone Camera Tricks",
    "iPhone vs Pro Camera: Can You Tell the Difference?",
    "Night Mode Mastery: Stunning Low-Light iPhone Photography"
  ],
  thumbnail: {
    description: "Create a high-contrast image showing a close-up of an iPhone camera lens with a dramatic light effect. Add bold text '10 HIDDEN FEATURES' with a smaller subtitle 'Pro photographers don't want you to know'. Use bright red accents for emphasis.",
    elements: [
      "Close-up of iPhone camera lens",
      "Dramatic lighting",
      "Bold text: '10 HIDDEN FEATURES'",
      "Subtitle: 'Pro photographers don't want you to know'",
      "Red accent elements"
    ]
  },
  filming: [
    "Use a small tripod for stable handheld shots",
    "Film in 4K at 24fps for a cinematic look",
    "Position yourself near natural light sources",
    "Use grid lines to apply the rule of thirds",
    "For product shots, use a sweep background"
  ],
  editing: [
    "Start with a 5-10 second hook mentioning the value viewers will get",
    "Include a quick branded intro (max 3 seconds)",
    "Structure as: problem → solution → demonstration → results",
    "Add on-screen text for key points",
    "Include subtle background music at 10-15% volume"
  ],
  publishing: {
    title: "10 PRO iPhone Camera Tricks They Don't Tell You About",
    description: "Discover the hidden iPhone camera features that can transform your photography from amateur to professional in minutes. In this video, I'll show you 10 settings and techniques that professional photographers use daily.\n\n00:00 - Introduction\n01:23 - Pro Mode Settings\n03:45 - Perfect Composition\n05:38 - Lighting Techniques\n08:52 - Editing Workflow\n12:04 - Final Results",
    tags: ["iphone photography", "iphone camera tips", "smartphone photography", "iphone camera tricks", "photography tutorial"],
    bestUploadTime: "Thursday or Sunday between 3-5pm EST"
  }
};
