import { useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// components
import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

// icons
import {
  XMarkIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  CameraIcon,
} from '@heroicons/react/24/solid';

const SearchHeader = () => {
  const searchInputRef = useRef();
  const router = useRouter();

  const {
    query: { term },
  } = router;

  const clearSearchInput = () => {
    searchInputRef.current.value = '';
  };

  const submitHandler = e => {
    e.preventDefault();

    const enteredSearchTerm = searchInputRef.current.value.trim();
    if (!enteredSearchTerm) return;

    router.push(`/search?term=${enteredSearchTerm}&searchType=`);
  };

  return (
    <header className="search-header">
      <div className="search-header-input">
        <User className="ml-auto whitespace-nowrap sm:order-3" />
        <Image
          onClick={() => router.push('/')}
          className="object-contain cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="92"
          height="30"
          alt=""
        />
        <form onSubmit={submitHandler} className="search-header-form">
          <input ref={searchInputRef} type="text" defaultValue={term} />
          <XMarkIcon
            onClick={clearSearchInput}
            className="h-5 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-5 pl-4 text-blue-500 border-l-2 border-gray-300 hidden sm:inline-flex" />
          <CameraIcon className="h-5 ml-2 text-blue-500 hidden sm:inline-flex" />
          <MagnifyingGlassIcon className="h-5 ml-2 text-blue-500 hidden sm:inline-flex" />
        </form>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
