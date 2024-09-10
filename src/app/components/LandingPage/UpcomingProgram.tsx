import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
const UpcomingProgram = () => {
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-6 text-black relative'>
          <span className='inline-block mb-2 relative'>Our Next Program</span>
        </h2>

        <div className=' shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 items-center space-y-6 md:space-y-0 md:space-x-8'>
          <div className='flex justify-center md:justify-start'>
            <Image
              src='/images/GNC2024.jpg'
              alt='Goodnews Convention 2024'
              width={500}
              height={600}
              className='rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300'
            />
          </div>

          <div>
            <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-black tracking-wider uppercase relative font-openSans'>
              Goodnews Convention 2024
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>{" "}
            </h3>

            <div className='space-y-4 lg:space-y-6'>
              <div className='relative'>
                <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                  Theme:
                </span>
                <p className='mt-2 text-lg md:text-xl text-gray-700'>
                  Wonderful
                </p>
                <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
              </div>

              <div className='relative'>
                <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                  Date:
                </span>
                <p className='mt-2 text-lg md:text-xl text-gray-700 flex items-center'>
                  <FaRegCalendarAlt className='mr-2 text-gray-600' /> September
                  25, 2024 - September 29, 2024
                </p>
                <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
              </div>

              <div className='relative'>
                <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                  Time:
                </span>
                <p className='mt-2 text-lg md:text-xl text-gray-700'>
                  9:00 AM & 5:00 PM Daily
                </p>
                <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
              </div>

              <div className='relative'>
                <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                  Location:
                </span>
                <p className='mt-2 text-lg md:text-xl text-gray-700 flex items-center'>
                  <FiMapPin className='mr-2 text-gray-600' /> Papa Alajiki,
                  Ogbomoso, Oyo State.
                </p>
                <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProgram;
