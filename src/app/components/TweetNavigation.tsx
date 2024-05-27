import React, { useState } from "react";
import Tweet from "./Tweet";

const tweets = [
  { user: "User1", handle: "@user1", time: "2h", content: "First tweet content" },
  { user: "User2", handle: "@user2", time: "3h", content: "Second tweet content" },
  // Add more tweet objects as needed
];

const TweetNavigation = () => {
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
      <Tweet {...tweets[currentTweetIndex]} />
      <div className="mt-2 text-gray-700">
        <button
          onClick={prevTweet}
          disabled={currentTweetIndex === 0}
          className={`p-2 rounded-full disabled:opacity-50 hover:-translate-y-1 ${currentTweetIndex === 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          ▲
        </button>
        <button
          onClick={nextTweet}
          disabled={currentTweetIndex === tweets.length - 1}
          className={`p-2 rounded-full disabled:opacity-50 hover:translate-y-1 ${currentTweetIndex === tweets.length - 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          ▼
        </button>
        <span className="ml-2">{`Tweet ${currentTweetIndex + 1} of ${tweets.length}`}</span>
      </div>
    </div>
  );
};

export default TweetNavigation;
