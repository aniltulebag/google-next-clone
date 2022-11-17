import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// icons
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  CameraIcon,
} from '@heroicons/react/24/solid';

export default function Home({ author, appName }) {
  const searchInputRef = useRef();
  const router = useRouter();

  const randomSearchHandler = async () => {
    const [randomTerm] = await fetch(
      'https://random-word-api.herokuapp.com/word'
    ).then(response => {
      if (!response.ok) return;
      return response.json();
    });

    router.push(`/search?term=${randomTerm}&searchType=`);
  };

  const searchHandler = e => {
    e.preventDefault();

    const enteredSearchTerm = searchInputRef.current.value.trim();
    if (!enteredSearchTerm) return;

    router.push(`/search?term=${enteredSearchTerm}&searchType=`);
  };

  return (
    <Fragment>
      <Head>
        <meta name="description" content="Google Clone with Next.js"></meta>
        <title>{`${appName} | ${author}`}</title>
      </Head>
      <Header />
      <main>
        <form onSubmit={searchHandler} className="home-form">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            width="225"
            height="75"
            alt=""
            priority
          />
          <div className="home-form-input">
            <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow focus:outline-none"
            />
            <MicrophoneIcon className="h-5 ml-3" />
            <CameraIcon className="h-5 ml-2" />
          </div>
          <div className="home-form-buttons">
            <button className="btn">Google Search</button>
            <button type="button" onClick={randomSearchHandler} className="btn">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </form>
      </main>
      <Footer author={author} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const author = process.env.AUTHOR;
  const appName = process.env.APP_NAME;

  return {
    props: { author, appName },
  };
}
