import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {
  return (
    <div className='bg-gray-100 mt-20 py-12 min-h-[70vh]'>
      <div className='container mx-auto md:px-6'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-4 text-black'>
          Contact Us
        </h2>

        <section className='shadow-lg rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
          <div className='md:pr-8'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 text-black tracking-wider uppercase relative font-openSans'>
              Get in Touch with Us
              <span className='block w-24 h-1 bg-orangeColour mt-3'></span>
            </h3>

            <p className='text-lg text-gray-700 mb-6 leading-relaxed text-justify'>
              Whether you have a question, need counselling, or want to leave
              feedback, feel free to reach out to us. We&apos;re always here to
              help and support you in any way we can.
            </p>

            <div className='mt-6'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                Connect with Us:
              </h4>
              <div className='flex space-x-4'>
                <Link
                  href='https://wa.link/mq8bxa'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-orangeColour transition'
                >
                  <FaWhatsapp size={28} />
                </Link>
                <Link
                  href='https://www.facebook.com/oluvictorministry'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-orangeColour transition'
                >
                  <FaFacebookF size={28} />
                </Link>

                <Link
                  href='https://www.instagram.com/oluvictorministry?igsh=dW15OHgydzI2NTQz&utm_source=qr'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-orangeColour transition'
                >
                  <FaInstagram size={28} />
                </Link>
              </div>
            </div>

            <div className='mt-6'>
              <h4 className='text-2xl font-semibold text-black mb-2'>
                Address:
              </h4>
              <p className='text-lg text-gray-700 mb-2'>
                Shikinah Plaza, 1 Samuel Ladoke Akintola Belouvard, Beside Garki
                Old Market, Garki, Abuja, Nigeria
              </p>
              <p className='text-lg text-gray-700 mb-2'>
                Phone: +234 706 355 8586
              </p>
              <p className='text-lg text-gray-700'>
                Email: oluvictorministry@gmail.com
              </p>
            </div>
          </div>

          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
