import React from "react";
import TweetCard from "react-tweet-card";

interface TweetProps {
  user: string;
  handle: string;
  time: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({ user, handle, time, content }) => {
  return (
    <div className="relative border border-gray-300 p-4 rounded-lg shadow-lg flex items-center">
      <TweetCard
        author={{
          name: user,
          username: handle,
          image: "https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg",
        }}
        tweet={content}
        time={new Date(2021, 2, 2, 21, 3)}
        source="Twitter for iPhone"
        permalink="https://twitter.com/randyfactory/status/1366841622495961091" // optional
        fitInsideContainer
      />
    </div>
  );
};

export default Tweet;
