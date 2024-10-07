const EachDevotionalDetailSkeleton = () => {
  return (
    <div className='p-8 max-w-3xl mx-auto mt-20'>
      <div className='w-full h-80 bg-gray-300 rounded-md mb-6 animate-pulse'></div>

      <div className='h-8 bg-gray-300 rounded-md w-3/4 mb-4 animate-pulse'></div>

      <div className='h-4 bg-gray-300 rounded-md w-1/4 mb-4 animate-pulse'></div>

      <div className='h-6 bg-gray-300 rounded-md w-1/3 mt-6 mb-2 animate-pulse'></div>

      <div className='h-4 bg-gray-300 rounded-md w-full mb-6 animate-pulse'></div>

      <div className='h-6 bg-gray-300 rounded-md w-1/2 mt-6 mb-2 animate-pulse'></div>

      <div className='space-y-4 mb-6'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className='h-4 bg-gray-300 rounded-md animate-pulse'
          ></div>
        ))}
      </div>

      <div className='h-6 bg-gray-300 rounded-md w-1/3 mt-6 mb-2 animate-pulse'></div>

      <div className='h-4 bg-gray-300 rounded-md w-full mb-6 animate-pulse'></div>
    </div>
  );
};

export default EachDevotionalDetailSkeleton;
