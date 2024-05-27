'use client';
import React, { useEffect, useState } from 'react';
import { users } from '../../users';
import { User } from '../../page';
import { useRouter } from 'next/navigation';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { InstagramEmbed, XEmbed } from 'react-social-media-embed';
// import { SpotifyEmbed, XEmbed } from 'react-social-media-embed';
import { Spotify } from 'react-spotify-embed';

const ProfilePage: React.FC = ({ params }: any) => {
  const router = useRouter();
  const id = params.id;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      const selectedUser = users.find((user) => user.id === id);
      if (selectedUser) {
        setUser(selectedUser);
      }
    }
  }, [id]);

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  const renderContent = () => {
    switch (user.occupation) {
      case "Twitter Creator":
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Featured Work</h3>
            <div className="flex flex-col md:flex-row gap-3">
              {user.showcases.map((showcase, index) => (
                <div key={index} className="rounded-lg">
                  {showcase.type === "miniBlog" && showcase.miniBlog && (
                    <XEmbed width={400} url={showcase.miniBlog} />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "Podcaster":
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Featured Work</h3>
            <div className="flex flex-col md:flex-row gap-3">
              {user.showcases.map((showcase, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-100">
                  {showcase.type === "audio" && showcase.video && (
                    <Spotify link={showcase.video} />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case "Instagram Creator":
        return (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Recent Photos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.showcases
                .filter(showcase => showcase.type === "image")
                .map((showcase, index) => (
                  <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-100">
                    <p className="font-semibold mb-2">{showcase.name}</p>
                    {showcase.image && (
                      <InstagramEmbed url={showcase.image} />
                    )}
                  </div>
                ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-lg">
        <button
          className="btn btn-outline mb-6"
          onClick={() => router.back()}
        >
          &larr; Back
        </button>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src={user.image}
            alt={user.name}
            className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 shadow-md"
          />
          <div className="text-center md:text-left md:ml-8">
            <h2 className="text-4xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-500 mb-1">{user.occupation}</p>
            <p className="text-gray-500 mb-4">{user.location}</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {user.tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-outline px-4 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {user.followers && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Followers</h3>
                <p className="text-gray-700 mb-6">{user.followers}</p>
              </div>
            )}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Active Platforms</h3>
              <div className="flex flex-wrap gap-2 mb-6 text-gray-700">
                {user.activePlatforms.map((platform, index) => (
                  <span key={index} className="badge badge-outline">{platform}</span>
                ))}
              </div>
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
