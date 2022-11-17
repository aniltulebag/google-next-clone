// components
import PaginationButtons from './PaginationButtons';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <p className="search-results-detail">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map(({ link, formattedUrl, title, snippet }) => (
        <div key={link} className="max-w-xl mb-8 px-4 overflow-hidden sm:px-0">
          <div className="group">
            <a href={link} className="text-sm truncate">
              {formattedUrl}
            </a>
            <a className="group-hover:underline decoration-blue-800">
              <h2 className="truncate text-xl font-medium text-blue-800">
                {title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
