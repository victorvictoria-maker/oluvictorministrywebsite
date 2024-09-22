const AllDevotionalsSkeleton = () => {
  return (
    <div className='container mx-auto px-6 mt-20'>
      <div className='flex justify-between items-center mb-6'>
        <div className='w-full md:w-1/2 h-10 bg-gray-300 rounded-md animate-pulse'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className='shadow-lg rounded-lg p-4 animate-pulse'>
            <div className='w-full h-40 bg-gray-300 rounded-md mb-4'></div>
            <div className='h-6 bg-gray-300 rounded-md w-3/4 mb-4'></div>
            <div className='h-4 bg-gray-300 rounded-md w-1/2 mb-4'></div>
            <div className='h-10 bg-gray-300 rounded-md w-full'></div>
          </div>
        ))}
      </div>

      <div className='flex justify-center items-center mt-8 space-x-4'>
        <div className='px-4 py-2 rounded-md bg-gray-300 w-24 h-10 animate-pulse'></div>
        <div className='h-6 w-24 bg-gray-300 rounded-md animate-pulse'></div>
        <div className='px-4 py-2 rounded-md bg-gray-300 w-24 h-10 animate-pulse'></div>
      </div>
    </div>
  );
};

export default AllDevotionalsSkeleton;
