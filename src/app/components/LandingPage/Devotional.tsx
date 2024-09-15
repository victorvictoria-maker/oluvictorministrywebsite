import Image from "next/image";

const Devotional = () => {
  const devotionalContent =
    "God multiplies, He is good at turning what is not enough to what is more than enough. For instance, Jesus multiplied two fishes and five loaves of bread to feed thousands, He gave abundant water where there was not enough. Now, one thing we should know about the miracles of multiplication is that it does not answer to prayers only, it answers to ability to follow certain principles. In other words, if you want to see the few in your hands, ministry, shop, family, bank account, kitchen, ward robe etc. become multiplied in a way and manner beyond human comprehension, there are basic steps to take, if you want your peace, comfort, understanding, influence, anointing, favour, prosperity miraculous multiplied, there are principles to follow. The first is the seed principle. Look at our text, it says &apos;Now may He who supplies seed to the sower, and bread for food, supply and multiply the seed you have sown and increase the fruits of your righteousness,&apos;.";

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto px-6 '>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-black'>
          Today&apos;s Devotional
        </h2>

        <div className='shadow-md rounded-lg p-8 grid grid-cols-1  md:grid-cols-2 items-center gap-6'>
          {/* Devotional content section */}
          <div className='md:pr-8'>
            {/* <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase'>
              THE MIRACLE OF SUPERNATURAL MULTIPLICATION
              <span className='block w-24 h-1 bg-orange-500 mt-3'></span>
            </h3> */}
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
              The Miracle Of Supernatural Multiplication
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>{" "}
            </h3>

            <p className='text-gray-500 text-lg mb-4'>
              <span className='font-semibold'>Date:</span> September 15, 2024
            </p>
            <p className='text-gray-500 text-lg mb-4 text-justify'>
              <span className='font-semibold '>Text:</span> 2 Corinthians 9:10
              &quot;Now may He who supplies seed to the sower, and bread for
              food, supply and multiply the seed you have sown and increase the
              fruits of your righteousness&quot;.
            </p>

            <p className='text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
              {devotionalContent.substring(0, 600)}...
            </p>

            <a
              href='#'
              className='text-lg bg-primaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-primaryColour/90'
            >
              Read More
            </a>
          </div>

          {/* Image section */}
          <div className='flex justify-center md:justify-end'>
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
    </section>
  );
};

export default Devotional;
