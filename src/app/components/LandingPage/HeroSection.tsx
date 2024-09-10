import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className='py-24 lg:h-[95vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4'
      style={{
        backgroundImage: `url('/images/background-image.jpg')`,
        backgroundColor: "rgba(25, 25, 25, 1)",
        backgroundBlendMode: "overlay",
        backgroundPosition: "50%",
        minHeight: "100%",
      }}
    >
      <div className=' p-8 md:mx-16 md:mt-12  rounded-lg'>
        <h1 className='text-white text-4xl md:text-6xl font-bold mb-6 font-montserrat'>
          Nothing Is Wrong With You <br />
          In Christ Jesus
        </h1>
        <p className='text-white text-lg md:text-xl mb-12 px-12'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quo
          quaerat illum natus eius!.
        </p>

        <div className='flex space-x-4 justify-center font-montserrat'>
          <Link
            href='/about'
            className='border border-white text-white px-6 py-3  text-lg font-semibold hover:bg-white hover:text-black transition duration-300'
          >
            Goodnews Devotional
          </Link>
          <Link
            href='/services'
            className='border border-white text-white px-6 py-3 text-lg font-semibold hover:bg-white  hover:text-black transition duration-300'
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
