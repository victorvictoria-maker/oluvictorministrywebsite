const AboutChurch = () => {
  return (
    <section className='bg-blue-50 py-12 '>
      <div className='container mx-auto px-6 md:mt-12'>
        {/* Header */}
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-6 text-black relative'>
          About Us
          <span className='block w-24 h-1 bg-orangeColour mt-3'></span>{" "}
          {/* Decorative underline */}
        </h2>

        {/* Content */}
        <div className='bg-white shadow-lg rounded-lg p-8 md:p-12 text-center md:text-left'>
          <p className='text-lg md:text-xl text-gray-700 mb-6 font-openSans'>
            At Olu Victor Ministry, we are a vibrant community committed to
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            expedita recusandae nam alias est, harum doloribus maxime tenetur,
            impedit, magni omnis facere eligendi ea aliquid nihil sequi atque
            numquam cumque. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Est soluta dolore voluptatem.
            {/* growing in faith and serving others. Our mission is to create a
            welcoming space where individuals can connect with God and each
            other, experience transformative worship, and make a positive impact
            in our world. Join us as we journey together in faith and love,
            building a strong, supportive community rooted in Christ. */}
          </p>
          <p className='text-lg md:text-xl text-gray-600 font-openSans'>
            Whether you&apos;re new to our church or have been with us for
            years, we&apos;re excited to have you here and look forward to
            growing together in faith and fellowship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;
