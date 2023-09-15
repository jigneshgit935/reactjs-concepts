import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='"w-[400px] shadow-2xl mt-5 py-5'>
      <h2 className="text-4xl font-semibold ">Profile</h2>

      <div className="mt-8">
        {!user ? (
          <div>
            <h2 className="text-2xl bg-green-600 w-[400px] mx-auto py-4">
              Please Login
            </h2>
          </div>
        ) : (
          <div className="text-2xl  bg-red-600 w-[400px] mx-auto py-5">
            Welcome {user.username} !!!
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
