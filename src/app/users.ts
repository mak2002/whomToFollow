import { User } from "./page";

export const users: User[] = [
  {
    id: "1",
    name: "Mayank Bondre",
    userTagline: "Builder",
    occupation: "Twitter Creator",
    location: "India",
    // image: "/mayank.jpg",
    image: "https://via.placeholder.com/150",
    tags: ["Social Media", "Content Creation", "short form", "indie hacker"],
    followers: '2000',
    activePlatforms: ["Twitter"],
    newsletters: [
      {
        name: "Social Media Tips",
        description: "Tips and strategies for growing on social media.",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Content Creation Insights",
        description: "Insights into creating engaging social media content.",
        image: "https://via.placeholder.com/100",
      },
    ],
    showcases: [
      {
        name: "Tweet Thread",
        miniBlog: "https://x.com/MayankBondre/status/1780643065700741226",  // Tweet ID for embedding
        type: "miniBlog",
      },
      {
        name: "Tweet Thread",
        miniBlog: "https://x.com/MayankBondre/status/1792642560726319135",  // Tweet ID for embedding
        type: "miniBlog",
      },
    ],
  },
  {
    id: "2",
    name: "Parker Worth",
    occupation: "Twitter Creator",
    // location: "Cambridge, USA",
    image: "https://via.placeholder.com/150",
    tags: ["storytelling", "threads"],
    // followers: 500000,
    activePlatforms: ["YouTube", "Spotify", "Twitter"],
    newsletters: [
      {
        name: "AI Insights",
        description: "Deep dives into the latest in AI and technology.",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Philosophical Musings",
        description: "Thoughts and discussions on philosophy and life.",
        image: "https://via.placeholder.com/100",
      },
    ],
    showcases: [
      {
        name: "Podcast Episode",
        description: "Listen to my latest podcast episode.",
        miniBlog: "https://x.com/worth_parker/status/1794363672153743431",
        type: "miniBlog",
      },
      {
        name: "Guest Interview",
        description: "Highlights from a recent guest interview.",
        miniBlog: "https://x.com/worth_parker/status/1791464648933347390",
        type: "miniBlog",
      },
    ],
  },
  {
    id: "3",
    name: "Dan Koe",
    userTagline: "Builder",
    occupation: "Twitter Creator",
    // image: "/mayank.jpg",
    image: "https://via.placeholder.com/150",
    tags: ["Content Creation", "entrepreneurship", "writing"],
    followers: '442.2K',
    activePlatforms: ["Twitter"],
    newsletters: [
      {
        name: "Social Media Tips",
        description: "Tips and strategies for growing on social media.",
        image: "https://via.placeholder.com/100",
      },
      {
        name: "Content Creation Insights",
        description: "Insights into creating engaging social media content.",
        image: "https://via.placeholder.com/100",
      },
    ],
    showcases: [
      {
        name: "Tweet Thread",
        miniBlog: "https://x.com/thedankoe/status/1791066318961066368",  // Tweet ID for embedding
        type: "miniBlog",
      },
      {
        name: "Tweet Thread",
        miniBlog: "https://x.com/thedankoe/status/1791791096734929298",  // Tweet ID for embedding
        type: "miniBlog",
      },
    ],
  },
];
