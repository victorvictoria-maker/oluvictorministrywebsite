import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-[#1E3A8A] text-white py-10'>
      <div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo Section */}
        <div>
          <h3 className='text-2xl md:text-xl lg:text-2xl font-bold mb-4'>
            OluVictorMinistry
          </h3>
          <p className='text-gray-400'>
            Helping you fulfill your destinies in Christ Jesus with a vision to
            lead God&apos;s people to their promised land.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className='text-xl font-semibold mb-4'>Quick Links</h4>
          <ul className='space-y-3'>
            <li>
              <Link href='/about-us' className='hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/devotionals' className='hover:underline'>
                Devotionals
              </Link>
            </li>
            <li>
              <Link href='/sermon' className='hover:underline'>
                Sermon
              </Link>
            </li>
            <li>
              <Link href='/give' className='hover:underline'>
                Giving
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:underline'>
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className='text-xl font-semibold mb-4'>Contact Us</h4>
          <p className='text-gray-400 mb-2'>
            Shikinah Plaza, 1 Samuel Ladoke Akintola Belouvard, Beside Garki Old
            Market, Garki, Abuja, Nigeria
          </p>
          <p className='text-gray-400 mb-2'>Phone: +234 706 355 8586</p>
          <p className='text-gray-400'>Email: oluvictorministry@gmail.com</p>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h4 className='text-xl font-semibold mb-4'>Connect with Us</h4>
          <div className='flex space-x-4'>
            <Link
              href='https://www.facebook.com/oluvictorministry'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-orangeColour'
            >
              <FaFacebookF size={24} />
            </Link>
            <Link
              href='https://wa.link/mq8bxa'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-orangeColour'
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link
              href='https://www.youtube.com/@oluvictorministry'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-orangeColour'
            >
              <FaYoutube size={24} />
            </Link>
            <Link
              href='https://www.instagram.com/oluvictorministry?igsh=dW15OHgydzI2NTQz&utm_source=qr'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-orangeColour'
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href='https://twitter.com/oluvictor_min'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-orangeColour'
            >
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='mt-10 border-t border-gray-700 pt-4'>
        <p className='text-center text-gray-500'>
          &copy; 2024 OluVictorMinistry. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
