import Image from "next/image";
import { fetchTodaysDevotional } from "../../../../serveractions/devotional";
import { formatDateWithDay, generateSlug } from "@/utils/functions";
import Link from "next/link";

const Devotional = async () => {
  const todayDevotional = await fetchTodaysDevotional();
  console.log(todayDevotional);

  if ("error" in todayDevotional) {
    console.log(todayDevotional.error);

    return null;
    // return (
    //   <p>
    //     There was an error loading today’s devotional: {todayDevotional.error}
    //   </p>
    //   <section className='bg-gray-100 py-12'>
    //   <div className='container mx-auto px-6 '>
    //     <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-gray-300'>
    //       <div className='h-8 w-56 mx-auto bg-gray-300 rounded animate-pulse'></div>
    //     </h2>

    //     <div className='shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
    //       <div className='md:pr-8'>
    //         <div className='h-10 w-full bg-gray-300 rounded mb-4 animate-pulse'></div>

    //         <div className='text-gray-500 text-lg mb-4'>
    //           <div className='h-5 w-32 bg-gray-200 rounded mb-2 animate-pulse'></div>
    //           <div className='h-5 w-48 bg-gray-200 rounded animate-pulse'></div>
    //         </div>

    //         <div className='text-gray-500 text-lg mb-4'>
    //           <div className='h-5 w-24 bg-gray-200 rounded mb-2 animate-pulse'></div>
    //           <div className='h-5 w-64 bg-gray-200 rounded animate-pulse'></div>
    //         </div>

    //         <div className='text-lg text-gray-700 mb-6 leading-relaxed'>
    //           <div className='space-y-3'>
    //             <div className='h-5 w-full bg-gray-200 rounded animate-pulse'></div>
    //             <div className='h-5 w-5/6 bg-gray-200 rounded animate-pulse'></div>
    //             <div className='h-5 w-4/6 bg-gray-200 rounded animate-pulse'></div>
    //             <div className='h-5 w-2/3 bg-gray-200 rounded animate-pulse'></div>
    //           </div>
    //         </div>

    //         <div className='h-10 w-40 bg-gray-300 rounded animate-pulse'></div>
    //       </div>
    //       <div className='flex justify-center md:justify-end'>
    //         <div className='w-80 h-96 bg-gray-300 rounded-lg animate-pulse'></div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // );
  }

  const formattedDateForUrl = generateSlug(todayDevotional.date);

  return (
    <section className='bg-gray-100 py-12'>
      {!todayDevotional && <p>Todays devotional is laoding...</p>}
      {todayDevotional && (
        <div className='container mx-auto px-6  md:mt-12'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-black'>
            Today&apos;s Devotional
          </h2>

          <div className='shadow-md rounded-lg p-8 flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-6'>
            <div className='md:pr-8'>
              <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
                {todayDevotional.title}
                <span className='block w-24 h-1 bg-orangeColour mt-3'></span>{" "}
              </h3>

              <p className='text-gray-500 text-lg mb-4'>
                <span className='font-semibold'>Date:</span>{" "}
                {formatDateWithDay(todayDevotional.date)}
              </p>
              <p className='text-gray-500 text-lg mb-4 text-justify'>
                <span className='font-semibold '>Text:</span>{" "}
                {todayDevotional.bibleVerse}
              </p>

              <p className='text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
                {todayDevotional.content.substring(0, 600)}...
              </p>

              <Link
                href={`/devotionals/${formattedDateForUrl}`}
                className='text-lg bg-primaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-primaryColour/90'
              >
                Read More
              </Link>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <Image
                src='/images/Devotional.jpg'
                alt='Devotional of the Day'
                width={500}
                height={600}
                className='rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300'
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Devotional;
