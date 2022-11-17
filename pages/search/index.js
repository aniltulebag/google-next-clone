import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// components
import SearchHeader from '../../components/SearchHeader';
import SearchResults from '../../components/SearchResults';
import ImageResults from '../../components/ImageResults';

// dummy data
import MockResponse from '../../data/MockResponse';

const SearchPage = ({ results, appName, author }) => {
  const router = useRouter();

  const {
    query: { term, searchType },
  } = router;

  return (
    <Fragment>
      <Head>
        <title>{`${term} - Search Page | ${appName} | ${author}`}</title>
      </Head>
      <SearchHeader />
      {searchType === 'image' ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const useMockResponse = false;
  const startIndex = context.query.start ?? '1';

  const data = useMockResponse
    ? MockResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType ? '&searchType=image' : ''
        }&start=${startIndex}`
      ).then(response => response.json());

  const author = process.env.AUTHOR;
  const appName = process.env.APP_NAME;

  return {
    props: {
      results: data,
      appName,
      author,
    },
  };
}

export default SearchPage;
