import React, { useEffect, useState } from 'react';
// import { User } from '../page';
import { useRouter } from 'next/router';
import { users } from './users';
import { User } from './page'; // Adjust the import path accordingly


const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
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
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="w-full mx-auto bg-white rounded-lg p-8 shadow-md">
        <button
          className="text-gray-500 hover:text-gray-800 text-xl mb-6 transition-colors duration-200"
          onClick={() => router.back()}
        >
          &larr; Back
        </button>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src={user.image}
            alt={user.name}
            className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto mb-4 md:mb-0"
          />
          <div className="text-center md:text-left md:ml-8">
            <h2 className="text-3xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-500 mb-1">{user.occupation}</p>
            <p className="text-gray-500 mb-4">{user.location}</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {user.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Followers</h3>
              <p className="text-gray-700 mb-6">{user.followers}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Active Platforms</h3>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {user.activePlatforms.map((platform, index) => (
                  <li key={index}>{platform}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletters</h3>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {user.newsletters.map((newsletter, index) => (
                  <li key={index}>{newsletter}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Showcases</h3>
              <ul className="list-disc list-inside text-gray-700">
                {user.showcases.map((showcase, index) => (
                  <li key={index}>{showcase}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
