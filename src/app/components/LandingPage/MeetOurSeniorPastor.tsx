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
            <p className='text-lg md:text-xl font-openSans text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              doloribus modi officia sed placeat molestiae nihil quas quidem
              temporibus corrupti! Similique esse, fuga minima beatae inventore
              dolorum amet fugiat accusantium! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. esentium eaque consequuntur ipsum id
              tenetur labore! Id, enim numquam. Blanditiis harum sed atque.
            </p>
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
