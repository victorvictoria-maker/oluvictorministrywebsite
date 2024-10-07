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
              We greatly appreciate your generosity. You can give your seed to
              the following accounts:
            </p>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                Naira Account:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Access Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Olu Victor
                Multibiz Corporate Resources Ltd
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>
                0080552755
              </p>
            </div>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                USD Account:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Guarantee Trust
                Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Olu Victor
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                0876151506
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
              src='/images/project.jpg'
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
              and extending the reach of God&apos;s work.
            </p>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                Naira Account for Projects:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Guarantee Trust
                Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Jesus House
                International Outreach
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                0119589345
              </p>
            </div>

            <div className='mb-4'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                USD Account for Projects:
              </h4>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Bank:</span> Guarantee Trust
                Bank
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Name:</span> Olu Victor
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>Account Number:</span>{" "}
                0876151506
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GivePage;
