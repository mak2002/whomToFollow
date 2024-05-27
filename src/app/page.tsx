"use client";
import React, { useState, useEffect } from "react";
import { users } from "./users";
import { useRouter } from "next/navigation";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaMedium,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";

const talksAboutTags = [
  { display: "Writing", internal: "writing" },
  { display: "Storytelling", internal: "storytelling" },
  { display: "Entrepreneurship", internal: "entrepreneurship" },
  { display: "Technology", internal: "technology" },
  { display: "Health", internal: "health" },
  { display: "Lifestyle", internal: "lifestyle" }
];

const platforms = [
  { display: "Twitter", internal: "Twitter" },
  { display: "Instagram", internal: "Instagram" },
  { display: "Facebook", internal: "Facebook" },
  { display: "Medium", internal: "Medium" },
  { display: "TikTok", internal: "TikTok" },
  { display: "Spotify", internal: "Spotify" }
];

export type Newsletter = {
  name: string;
  description?: string;
  image: string;
};

export type Showcase = {
  name: string;
  description?: string;
  image?: string;
  miniBlog?: string;
  video?: string;
  type: "image" | "miniBlog" | "video" | "audio";
};

export type User = {
  id: string;
  name: string;
  occupation: string;
  location?: string;
  image?: string;
  tags: string[];
  followers?: string;
  activePlatforms: string[];
  newsletters: Newsletter[];
  showcases: Showcase[];
  contentTypes?: string[];
  userTagline?: string;
};

const Navbar: React.FC<{ searchTerm: string; handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void }> = ({ searchTerm, handleSearch }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold w-1/5">whomToFollow</div>
      <input
        type="text"
        placeholder="Search..."
        className="w-4/5 border border-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={handleSearch}
      />
    </nav>
  );
};

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    filterUsers(searchTerm, selectedTags.map(tag => {
      const talksAboutTag = talksAboutTags.find(tt => tt.display === tag);
      const platform = platforms.find(p => p.display === tag);
      return talksAboutTag ? talksAboutTag.internal : platform ? platform.internal : tag;
    }));
  }, [searchTerm, selectedTags]);

  const filterUsers = (search: string, tags: string[]) => {
    const filtered = users.filter((user) => {
      const matchName = user.name.toLowerCase().includes(search.toLowerCase());
      const matchTags = tags.every((tag) =>
        user.tags.includes(tag) ||
        user.activePlatforms.includes(tag) ||
        user.contentTypes?.includes(tag)
      );
      return matchName && matchTags;
    });
    setFilteredUsers(filtered);
  };

  const handleViewProfile = (user: User) => {
    router.push(`/profiles/${user.id}`);
  };

  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Twitter":
        return <FaTwitter className="mr-2 text-blue-500" />;
      case "Instagram":
        return <FaInstagram className="mr-2 text-pink-500" />;
      case "Facebook":
        return <FaFacebook className="mr-2 text-blue-600" />;
      case "Medium":
        return <FaMedium className="mr-2 text-black" />;
      case "TikTok":
        return <FaTiktok className="mr-2 text-black" />;
      case "Spotify":
        return <FaSpotify className="mr-2 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="w-full mx-auto flex p-8">
        <div className="w-1/4">
          <div className="py-4">
            <h2 className="text-lg font-semibold mb-1">Talks about</h2>
            <div className="space-y-1">
              {talksAboutTags.map((tag, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${
                    selectedTags.includes(tag.display) ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => handleTagClick(tag.display)}
                >
                  {tag.display}
                </button>
              ))}
            </div>
            <h2 className="text-lg font-semibold mb-1 mt-4">Platforms</h2>
            <div className="space-y-1">
              {platforms.map((tag, index) => (
                <button
                  key={index}
                  className={`btn btn-sm mx-1 ${
                    selectedTags.includes(tag.display) ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => handleTagClick(tag.display)}
                >
                  {renderPlatformIcon(tag.internal)} {tag.display}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-3/4 pl-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <div className="flex flex-col items-center h-full">
                  <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
                  {user.occupation && (
                    <p className="text-sm text-gray-500 mb-1">{user.occupation}</p>
                  )}
                  {user.location && (
                    <p className="text-sm text-gray-500 mb-4">{user.location}</p>
                  )}
                  <div className="flex mb-4">
                    {user.activePlatforms.map((platform, index) => (
                      <span key={index}>
                        {renderPlatformIcon(platform)}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleViewProfile(user)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
