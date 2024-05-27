import React from "react";

interface TweetProps {
  user: string;
  handle: string;
  time: string;
  content: string;
}

const Tweet: React.FC<TweetProps> = ({ user, handle, time, content }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
      <div className="flex items-start">
        <img
          src="https://pbs.twimg.com/profile_images/1382083582752096262/xrx0PO8Z_400x400.jpg"
          alt={`${user} profile`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="font-bold">{user}</div>
          <div className="text-gray-600">{handle}</div>
        </div>
      </div>
      <div className="mt-2">{content}</div>
      <div className="text-gray-600 mt-2">{time}</div>
    </div>
  );
};

export default Tweet;
