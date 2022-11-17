import { useRouter } from 'next/router';

// components
import SearchHeaderOption from './SearchHeaderOption';

// icons
import { MagnifyingGlassIcon, PhotoIcon } from '@heroicons/react/24/outline';

const SearchHeaderOptions = () => {
  const router = useRouter();

  const {
    query: { searchType },
  } = router;

  return (
    <div className="search-header-options">
      <SearchHeaderOption
        title="All"
        Icon={MagnifyingGlassIcon}
        selected={searchType === '' || !searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotoIcon}
        selected={searchType === 'image'}
      />
    </div>
  );
};

export default SearchHeaderOptions;
