// components
import PaginationButtons from './PaginationButtons';

const ImageResults = ({ results }) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 px-6 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {results.items?.map(({ link, image, title, displayLink }) => (
          <div key={link} className="mb-8">
            <div className="group">
              <a href={image.contextLink}>
                <img
                  className="group-hover:shadow-xl w-full h-60 object-cover"
                  src={link}
                  alt={title}
                />
              </a>
              <a href={image.contextLink} className="group-hover:underline">
                <h2 className="truncate text-xl">{title}</h2>
              </a>
              <a href={image.contextLink} className="group-hover:underline">
                <p className="text-gray-600">{displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default ImageResults;
