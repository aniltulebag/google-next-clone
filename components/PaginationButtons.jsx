import { useRouter } from 'next/router';
import Link from 'next/link';

// icons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const PaginationButtons = () => {
  const router = useRouter();

  const {
    query: { start, term, searchType },
  } = router;

  const startIndex = Number(start) || 1;

  const nextUrl = `/search?term=${term}&searchType=${searchType}&start=${
    startIndex + 10
  }`;

  const previousUrl = `/search?term=${term}&searchType=${searchType}&start=${
    startIndex - 10
  }`;

  return (
    <div className="pagination-buttons">
      {startIndex < 90 && (
        <Link href={nextUrl}>
          <div className="pagination-button">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
      {startIndex > 10 && (
        <Link href={previousUrl}>
          <div className="pagination-button">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
