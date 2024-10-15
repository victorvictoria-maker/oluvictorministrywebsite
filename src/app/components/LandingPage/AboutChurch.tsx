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
            We are a commission with a global mandate to help people enter into
            their promised lands, that is to help you fulfill your destiny in
            Christ. It&apos;s going to be our greatest joy if you could join
            yourself with us as we walk hands in hands with God to equip and
            assist you become all that God has designed you to be on earth. This
            is our promise to you in Christ, that you will surely fulfill your
            destiny here on earth and make heaven at the end.
          </p>
          <p className='text-lg md:text-xl text-gray-600 font-openSans'>
            Whether you&apos;re new to our church or have been with us for
            years, we&apos;re excited to have you here and look forward to
            growing together in faith and fellowship. <br /> NOTHING IS WRONG
            WITH YOU IN CHRIST JESUS!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutChurch;
