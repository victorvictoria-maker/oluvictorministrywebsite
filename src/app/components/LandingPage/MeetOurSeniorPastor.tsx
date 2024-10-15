import Image from "next/image";

const MeetOurSeniorPastor = () => {
  return (
    <section className='bg-powder py-12 lg:mx-12'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
          <div className='flex-shrink-0'>
            <Image
              src='/images/senior-pastor.jpeg'
              alt='Senior Pastor'
              width={300}
              height={300}
              className='rounded-full border-4 border-orangeColour'
            />
          </div>

          <div className='mt-6 md:mt-0 md:ml-8 text-center md:text-left'>
            <h2 className='text-4xl lg:text-5xl font-extrabold  mb-8 text-black relative font-montserrat'>
              A Special Welcome from Our Senior Pastor
            </h2>
            <p className='text-lg md:text-xl font-openSans text-gray-800 mb-1'>
              GOODNEWS! GOODNEWS!! GOODNEWS!!!
            </p>
            <p className='text-justify'>
              I specially welcome you on behalf of Jesus Christ, our Lord and
              Saviour to our midst. Our commission is raised to help people of
              all tribes, languages, races, colours from all continents of the
              earth to enter their promised lands.
            </p>
            <p className='text-justify mb-1'>
              We believe, as you get in contact with us today, you are getting
              in contact with your purpose in Christ and being empowered to
              fulfill it in Jesus&apos; name.
            </p>

            <p>NOTHING IS WRONG WITH YOU IN CHRIST JESUS.</p>
            <p className='mt-4 text-lg md:text-xl font-openSans text-gray-700'>
              - Pastor Olu Victor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurSeniorPastor;
