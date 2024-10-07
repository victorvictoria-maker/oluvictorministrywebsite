const DevotionalsGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 w-full my-8'>
      {/* Skeleton Loader for 3 items */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className='shadow-lg rounded-lg p-4 animate-pulse'>
          {/* Image Loader */}
          <div className='bg-gray-200 rounded-md w-full mt-6 h-56'></div>

          {/* Title Loader */}
          <div className='bg-gray-200 mt-4 h-6 w-3/4 rounded-md'></div>

          {/* Date Loader */}
          <div className='bg-gray-200 mt-2 h-4 w-1/3 rounded-md'></div>

          {/* Button Loader */}
          <div className='bg-gray-200 mt-4 h-10 w-full rounded-md'></div>
        </div>
      ))}
    </div>
  );
};

export default DevotionalsGrid;
