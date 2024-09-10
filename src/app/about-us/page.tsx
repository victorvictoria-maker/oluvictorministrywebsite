import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <>
      {/* About Section */}
      <section className='bg-gray-100 py-16 mt-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>About Us</h2>
            <p className='text-lg text-gray-700'>
              We are a community-focused church dedicated to nurturing faith,
              promoting outreach, and enriching lives through our mission and
              services.
            </p>
          </div>

          {/* Beliefs and Mission */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-3xl font-bold text-gray-800 mb-4'>
                Our Beliefs
              </h3>
              <ul className='list-disc list-inside text-gray-700 space-y-2'>
                <li>Divine Reward through Service</li>
                <li>Divine Spread through Missions</li>
                <li>Divine Impact through Outreaches</li>
                <li>Divine Bonding through Fellowship</li>
                <li>Divine Atmosphere through Worship</li>
                <li>Divine Promotion through Ministry</li>
                <li>Divine Encounter through the Word of God</li>
                <li>Divine Empowerment through the Holy Spirit</li>
                <li>Divine Leading through Prophecy and Revelations</li>
              </ul>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h3 className='text-3xl font-bold text-gray-800 mb-4'>
                Mission & Vision
              </h3>
              <p className='text-lg text-gray-700 mb-4'>
                <span className='font-semibold'>VISION:</span> TAKING YOU TO
                YOUR PROMISED LAND (Deuteronomy 6:23).
              </p>
              <p className='text-lg text-gray-700 mb-4'>
                <span className='font-semibold'>MISSION:</span> HELPING YOU
                FULFILL YOUR DESTINY IN CHRIST JESUS Through: Teachings,
                Trainings, Preaching, Empowerment activities, missions, and
                Demonstrations of the power of God.
              </p>
              <p className='text-lg text-gray-700'>
                <span className='font-semibold'>OUR CORE VALUES:</span>{" "}
                Excellence, Love, Eternity, Goodnews (WORD), Anointing, New
                Life, Commitment, and Expression.
              </p>
            </div>
          </div>

          {/* Church Branches Section */}
          <section className='mb-16'>
            <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
              Our Church Branches
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Branch
                title='Shekinah Plaza'
                location='1 Samuel Ladoke Akintola Belouvard Garki FCT, Abuja'
                mapLink='https://maps.app.goo.gl/zD1ufXnVk8Vd9JR98'
              />
              <Branch
                title='Papa Alajiki, Randa'
                location='1, Williams Ojediran Close, Ogbomosho, Oyo State'
                mapLink='https://goo.gl/maps/cmAabwrWjEt8CdbPA'
              />
              <Branch
                title='Epe-Lagos Road'
                location='Pilgrim Progress Building, Plywood Junction, Epe, Lagos State'
                mapLink='https://goo.gl/maps/njB99fiMR9wDwpat7'
              />
              <Branch
                title='Iwo, Osun State'
                location='1st Floor, Cicu Building, Opposite Aipate Baptist Grammar School, Iwo, Osun State'
                mapLink='https://goo.gl/maps/4gi6QkXwtXeCJsyw5'
              />
              <Branch
                title='Accra, Ghana'
                location='Mandela Street-Weija, Weija District, Accra, Ghana'
                mapLink='https://goo.gl/maps/Eeeaq3DUmRBGTPGJ7'
              />
              <Branch
                title='Osogbo, Osun State'
                location='20, Oketunji Street, Alekuwodo, Osogbo, Osun State'
                mapLink='https://goo.gl/maps/chWQxwnD4o59k84d8'
              />
            </div>
          </section>

          {/* Our Services Section */}
          <section className='mb-16'>
            <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Service
                title='Goodnews Service'
                time='Sunday - 8:00 AM to 10:00 AM'
                description='Join us for a powerful service filled with worship and inspiring messages.'
              />
              <Service
                title='Solution & Prophetic Service'
                time='Wednesday - 5:30 PM to 7:00 PM'
                description="Experience prophetic insights and solutions to life's challenges."
              />
              <Service
                title='Nothing Is Wrong With You Conference'
                time='3rd Saturdays - 8:00 AM to 10:30 AM'
                description='A conference dedicated to affirming your worth and potential in Christ.'
              />
              <Service
                title='Ultimate Power Night'
                time='Every Friday - 12:00 AM to 01:00 AM'
                description='A night of intense prayer and supernatural encounters.'
              />
              <Service
                title="Single's Word"
                time='Last Sundays (Bimonthly) - 3:00 PM to 5:30 PM'
                description='A special session addressing the unique needs of singles in the faith.'
              />
            </div>
          </section>

          {/* Meet Our Senior Pastors Section */}
          <section className='bg-gray-100 py-16 mb-16'>
            <div className='container mx-auto px-6 text-center'>
              <h2 className='text-4xl font-bold text-gray-800 mb-8'>
                Meet Our Senior Pastors
              </h2>
              <div className='flex flex-col md:flex-row md:space-x-8 justify-center'>
                <Pastor
                  name='Pastor Bunmi Adaranijo'
                  branch='Shekinah Plaza, Abuja'
                />
                <Pastor
                  name='Pastor Eyitayo Ajani'
                  branch='Papa Alajiki, Randa, Ogbomosho'
                />
                <Pastor
                  name='Pastor Seun Abayomi'
                  branch='Epe-Lagos Road, Lagos State'
                />
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section className='py-16'>
            <div className='container mx-auto px-6'>
              <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
                Contact Us
              </h2>
              <div className='flex flex-col md:flex-row md:space-x-8'>
                <ContactDetail
                  icon={<FaPhoneAlt className='text-4xl text-blue-600' />}
                  title='Phone'
                  detail='+2349038938745'
                />
                <ContactDetail
                  icon={<FaEnvelope className='text-4xl text-blue-600' />}
                  title='Email'
                  detail='jaas@gmail.com'
                />
                <ContactDetail
                  icon={<FaMapMarkerAlt className='text-4xl text-blue-600' />}
                  title='Address'
                  detail='Shekinah plaza, Abuja'
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

// Branch Component
const Branch = ({
  title,
  location,
  mapLink,
}: {
  title: string;
  location: string;
  mapLink: string;
}) => (
  <div className='bg-white p-6 rounded-lg shadow-lg'>
    <h4 className='text-2xl font-bold text-gray-800 mb-2'>{title}</h4>
    <p className='text-lg text-gray-700 mb-4'>{location}</p>
    <a
      href={mapLink}
      target='_blank'
      rel='noopener noreferrer'
      className='text-blue-600 hover:underline'
    >
      View on Map
    </a>
  </div>
);

// Service Component
const Service = ({
  title,
  time,
  description,
}: {
  title: string;
  time: string;
  description: string;
}) => (
  <div className='bg-white p-6 rounded-lg shadow-lg'>
    <h4 className='text-2xl font-bold text-gray-800 mb-2'>{title}</h4>
    <p className='text-lg text-gray-700 mb-4'>{time}</p>
    <p className='text-gray-600'>{description}</p>
  </div>
);

// Pastor Component
const Pastor = ({ name, branch }: { name: string; branch: string }) => (
  <div className='bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-0'>
    <h4 className='text-2xl font-bold text-gray-800 mb-2'>{name}</h4>
    <p className='text-lg text-gray-700'>{branch}</p>
  </div>
);

// Contact Detail Component
const ContactDetail = ({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) => (
  <div className='bg-white p-6 rounded-lg shadow-lg flex items-center mb-8 md:mb-0'>
    <div className='mr-6'>{icon}</div>
    <div>
      <h4 className='text-2xl font-bold text-gray-800 mb-1'>{title}</h4>
      <p className='text-lg text-gray-700'>{detail}</p>
    </div>
  </div>
);

export default AboutPage;
