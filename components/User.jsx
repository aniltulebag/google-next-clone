import { Fragment } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const User = ({ className }) => {
  const { data: session } = useSession();

  return (
    <Fragment>
      {!session ? (
        <button
          onClick={signIn}
          className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md hover:brightness-110 transition-all ${className}`}
        >
          Sign in
        </button>
      ) : (
        <img
          onClick={signOut}
          className="h-10 w-10 rounded-full p-1 hover:bg-gray-200 cursor-pointer sm:order-3"
          src={session.user.image}
          alt="user-profile-image"
          referrerPolicy="no-referrer"
        />
      )}
    </Fragment>
  );
};

export default User;
