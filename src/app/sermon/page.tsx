import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const SermonPage = () => {
  return (
    <div className='bg-gray-100 mt-20 py-12'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-black'>
          Sermons and Messages
        </h2>

        {/* Join Us Online Section */}
        <section className='shadow rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
          <div className='md:pr-8'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
              Join Us Online
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>
            </h3>

            <p className='lg:text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
              Stay connected with us online through our social media platforms.
              Follow us on Facebook, YouTube, Twitter, and Instagram to stream
              live services and access past sermons. We are looking forward to
              engaging with you!
            </p>

            {/* Social Media Icons */}
            <div className='flex space-x-4 text-2xl text-gray-700'>
              <Link
                href='https://www.facebook.com/oluvictorministry'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className='hover:text-blue-600' />
              </Link>
              <Link
                href='https://www.youtube.com/@oluvictorministry'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaYoutube className='hover:text-red-600' />
              </Link>
              <Link
                href='https://www.instagram.com/oluvictorministry?igsh=dW15OHgydzI2NTQz&utm_source=qr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram className='hover:text-pink-500' />
              </Link>
            </div>
          </div>

          <div className='flex justify-center md:justify-end'>
            <Image
              src='/images/join-us.jpeg'
              alt='Join Us Online'
              width={500}
              height={600}
              className='rounded-lg object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>
        </section>

        {/* Telegram and YouTube Sermons Section */}
        {/* <section className='container mx-auto px-6 mt-12'> */}
        <section className='shadow rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-12'>
          <div className='flex justify-center md:justify-start'>
            <Image
              src='/images/access-sermons.jpeg'
              alt='Sermons on Telegram and YouTube'
              width={500}
              height={600}
              className='rounded-lg object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>

          <div className='md:pl-8'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
              Access All Sermons
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>
            </h3>

            <p className='lg:text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
              All our sermons are available on Telegram and YouTube. Stay
              uplifted with inspiring messages by subscribing to our Telegram
              channel or watch on YouTube.
            </p>

            {/* Call to Actions */}
            <div className='flex flex-col  space-y-4 lg:space-y-0 lg:flex-row-reverse lg:justify-between'>
              <Link href='https://www.youtube.com/@oluvictorministry'>
                <button
                  rel='noopener noreferrer'
                  className='inline-block text-lg bg-secondaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-secondaryColour/90 transition-all duration-300'
                >
                  Watch on YouTube
                </button>
              </Link>
              <Link href='https://t.me/goodnews_devotion'>
                <button
                  rel='noopener noreferrer'
                  className='inline-block text-lg bg-primaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-primaryColour/90 transition-all duration-300'
                >
                  Join Our Telegram Channel
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* </section> */}
      </div>
    </div>
  );
};

export default SermonPage;
