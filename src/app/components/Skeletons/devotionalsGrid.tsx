const DevotionalsGrid = () => {
  return (
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
  );
};

export default DevotionalsGrid;
