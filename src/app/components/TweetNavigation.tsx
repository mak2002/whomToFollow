import React, { useState } from "react";
import Tweet from "./Tweet";

const tweets = [
  { user: "User1", handle: "@user1", time: "2h", content: "First tweet content" },
  { user: "User2", handle: "@user2", time: "3h", content: "Second tweet content" },
  // Add more tweet objects as needed
];

const TweetNavigation: React.FC = () => {
  const [currentTweetIndex, setCurrentTweetIndex] = useState(0);

  const nextTweet = () => {
    if (currentTweetIndex < tweets.length - 1) {
      setCurrentTweetIndex(currentTweetIndex + 1);
    }
  };

  const prevTweet = () => {
    if (currentTweetIndex > 0) {
      setCurrentTweetIndex(currentTweetIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="">
        <Tweet {...tweets[currentTweetIndex]} />
        <div className=" top-1/2 transform -translate-y-1/2 space-y-2">
          <button
            onClick={prevTweet}
            disabled={currentTweetIndex === 0}
            className="bg-blue-500 text-white p-2 rounded-full disabled:opacity-50 transform transition-transform duration-300 hover:-translate-y-1"
          >
            ▲
          </button>
          <button
            onClick={nextTweet}
            disabled={currentTweetIndex === tweets.length - 1}
            className="bg-blue-500 text-white p-2 rounded-full disabled:opacity-50 transform transition-transform duration-300 hover:translate-y-1"
          >
            ▼
          </button>
        </div>
      </div>
      <div className="mt-2">Tweet {currentTweetIndex + 1} of {tweets.length}</div>
    </div>
  );
};

export default TweetNavigation;
