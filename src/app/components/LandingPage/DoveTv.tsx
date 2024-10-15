import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const DoveTv = async () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto px-6  md:mt-12'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-black'>
          Join Us Weekly
        </h2>

        <div className='shadow-md rounded-lg p-8 flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-6'>
          <div className='space-y-4 lg:space-y-6 '>
            <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-black tracking-wider uppercase relative font-openSans'>
              LIVE ON DOVETV
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>{" "}
            </h3>
            <div className='relative'>
              <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                Theme:
              </span>
              <p className='mt-2 text-lg md:text-xl text-gray-700'>
                Faith Alive
              </p>
              <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
            </div>

            <div className='relative'>
              <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                Date:
              </span>
              <p className='mt-2 text-lg md:text-xl text-gray-700 flex items-center'>
                <FaRegCalendarAlt className='mr-2 text-gray-600' /> Every Monday
              </p>
              <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
            </div>

            <div className='relative'>
              <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                Time:
              </span>
              <p className='mt-2 text-lg md:text-xl text-gray-700'>7:30 PM</p>
              <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
            </div>

            <div className='relative'>
              <span className='text-xl md:text-2xl font-semibold text-gray-800'>
                Location:
              </span>
              <p className='mt-2 text-lg md:text-xl text-gray-700 flex items-center'>
                <FiMapPin className='mr-2 text-gray-600' /> DSTV349 & GOTV113
              </p>
              <div className='absolute inset-x-0 bottom-0 border-t border-gray-300 mt-2'></div>{" "}
            </div>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <Image
              src='/images/dove-tv.jpg'
              alt='Dove TV Flier'
              width={500}
              height={600}
              className='rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoveTv;
