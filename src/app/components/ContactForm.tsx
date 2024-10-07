"use client";

import { useState, useTransition } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        // const result = await contactMe(formData);
        // if (result.success) {
        //   toast.success(result.success);
        //   setFormData({
        //     fullName: "",
        //     phoneNo: "",
        //     email: "",
        //     message: "",
        //   });
        // } else {
        //   toast.error(result.error);
        // }

        console.log(formData);
        toast.success("Thank you. We would reach out to you shortly.");
      } catch (error) {
        toast.error(
          "Something went wrong while trying to contact, please try again."
        );
      }
    });
  };
  return (
    // <form >
    <div className='bg-white p-8 shadow-lg rounded-lg'>
      <h3 className='text-3xl font-bold mb-4 text-black text-center'>
        Contact Form
      </h3>
      <form onSubmit={handleSubmit}>
        {isPending && <p>Submitting...</p>}
        <div className='mb-4'>
          <label
            htmlFor='fullName'
            className='block text-lg font-semibold text-gray-700'
          >
            Full Name
          </label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-orangeColour outline-none'
            placeholder='Your full name'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor=' phoneNo'
            className='block text-lg font-semibold text-gray-700'
          >
            Phone Number
          </label>
          <input
            type='text'
            id=' phoneNo'
            name='phoneNo'
            value={formData.phoneNo}
            onChange={handleChange}
            className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-orangeColour outline-none'
            placeholder='Your phone number'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-lg font-semibold text-gray-700'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-orangeColour outline-none'
            placeholder='Your email address'
            required
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block text-lg font-semibold text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring focus:ring-orangeColour outline-none'
            rows={4}
            placeholder='Type your message here...'
            required
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full bg-primaryColour text-white px-6 py-4 rounded-md font-openSans hover:bg-primaryColour/90 transition duration-300'
        >
          Send Message
        </button>
      </form>
    </div>
    // </form>
  );
};

export default ContactForm;
