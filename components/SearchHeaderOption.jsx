import { useRouter } from 'next/router';

const SearchHeaderOption = ({ title, selected, Icon }) => {
  const router = useRouter();

  const {
    query: { term },
  } = router;

  const selectTabHandler = title => {
    router.push(
      `/search?term=${term}&searchType=${title === 'Images' ? 'image' : ''}`
    );
  };

  return (
    <div
      onClick={selectTabHandler.bind(null, title)}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 transition-all cursor-pointer pb-3 ${
        selected ? 'text-blue-500 border-blue-500' : ''
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderOption;
