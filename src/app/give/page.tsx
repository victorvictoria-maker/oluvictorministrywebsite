import Image from "next/image";
// import Link from "next/link";

const GivePage = () => {
  return (
    <div className='bg-gray-100 mt-20 py-12 '>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-black'>
          Giving and Offerings
        </h2>

        <section className='shadow rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
          <div className='md:pr-8'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
              Support the Ministry
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>
            </h3>

            <p className='text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
              We greatly appreciate your generosity. You can give your tithe and
              offering to the following accounts:
            </p>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                Naira Account:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Access Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Church Name
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                0123456789
              </p>
            </div>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                USD (Dom) Account:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Access Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Church Name
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                9876543210
              </p>
            </div>

            {/* <Link
              href='/giving'
              className='text-lg bg-primaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-primaryColour/90'
            >
              Thank You
            </Link> */}
          </div>

          <div className='flex justify-center md:justify-end'>
            <Image
              src='/images/giving.png'
              alt='Giving and Offerings'
              width={500}
              height={600}
              className='rounded-lg object-cover  hover:scale-105 transition-transform duration-300'
            />
          </div>
        </section>
      </div>

      <section className='container mx-auto px-6'>
        <div className='shadow rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-12'>
          <div className='flex justify-center md:justify-start'>
            <Image
              src='/images/building.jpeg'
              alt='Giving to Projects'
              width={500}
              height={600}
              className='rounded-lg object-cover  hover:scale-105 transition-transform duration-300'
            />
          </div>

          <div className='md:pl-8'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
              Give to Our Projects
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>
            </h3>

            <p className='text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
              Join us in making a lasting impact by supporting our special
              projects. Your contributions are vital in advancing our mission
              and extending the reach of God's work.
            </p>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                Naira Account for Projects:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Access Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Church
                Project Fund
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                1234567890
              </p>
            </div>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                USD (Dom) Account for Projects:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Access Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Church
                Project Fund
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                9876543211
              </p>
            </div>

            {/* <Link
              href='/projects'
              className='text-lg bg-primaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-primaryColour/90'
            >
              Learn More About Our Projects
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivePage;
