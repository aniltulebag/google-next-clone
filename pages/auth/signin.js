import { Fragment } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const signin = ({ providers }) => {
  const signInHandler = (providerId, options) => {
    signIn(providerId, options);
  };

  return (
    <Fragment>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map(({ name, id }) => (
          <div key={name} className="flex flex-col items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              className="object-cover"
              width="225"
              height="75"
              alt="google"
              priority
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes.
            </p>
            <button
              onClick={signInHandler.bind(null, id, { callbackUrl: '/' })}
              className="bg-red-400 text-white px-4 py-2 rounded-sm hover:bg-red-500"
            >
              Sign in with {name}
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers }, // will be passed to the page component as props
  };
}

export default signin;
