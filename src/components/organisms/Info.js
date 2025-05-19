import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaClipboardList,
  FaCalendarCheck,
  FaProjectDiagram,
} from 'react-icons/fa';

export default function InfoSection() {
  const services = [
    {
      icon: <FaLaptopCode className='text-3xl text-blue-600' />,
      title: dataSite.info[0].title,
      description: dataSite.info[0].description,
    },
    {
      icon: <FaClipboardList className='text-3xl text-blue-600' />,
      title: dataSite.info[1].title,
      description: dataSite.info[1].description,
    },
    {
      icon: <FaCalendarCheck className='text-3xl text-blue-600' />,
      title: dataSite.info[2].title,
      description: dataSite.info[2].description,
    },
    {
      icon: <FaProjectDiagram className='text-3xl text-blue-600' />,
      title: dataSite.info[3].title,
      description: dataSite.info[3].description,
    },
  ];

  return (
    <section className='max-w-7xl mx-auto px-6 py-16'>
      <div className='grid md:grid-cols-2 gap-8 items-center mb-12'>
        <div>
          <h4 className='text-blue-600 uppercase tracking-wide mb-2'>
            Services
          </h4>
          <h2 className='text-4xl font-bold mb-4'>
            Professional IT Consulting Services
          </h2>
          <p className='text-white mb-6'>
            Whether you&#39;re looking to optimize operations, implement new
            technologies, or ensure long-term digital success, our expert
            consultants are here to guide you.
          </p>
          {/* <button className='border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition'>
            View All Services
          </button> */}
        </div>
        <motion.img
          src={dataSite.services[0].image}
          alt='Consulting'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='rounded-lg shadow-md'
        />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            className='bg-blue-50 p-6 rounded-lg text-center shadow-sm'
          >
            <div className='mb-4 flex justify-center'>{service.icon}</div>
            <h3 className='font-semibold text-black text-lg mb-2'>
              {service.title}
            </h3>
            <p className='text-gray-600 text-sm'>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
