"use client";

import { useState } from "react";
import Link from "next/link";
import { mockDevotionals } from "../../../data/mockDevotional";
import Image from "next/image";
// import { mockDevotionals } from "@/data/mockDevotionals";

export default function DevotionalsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const devotionalsPerPage = 6;

  // Calculate the displayed devotionals based on the current page
  const indexOfLastDevotional = currentPage * devotionalsPerPage;
  const indexOfFirstDevotional = indexOfLastDevotional - devotionalsPerPage;
  const currentDevotionals = mockDevotionals.slice(
    indexOfFirstDevotional,
    indexOfLastDevotional
  );

  const totalPages = Math.ceil(mockDevotionals.length / devotionalsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Daily Devotionals</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentDevotionals.map((devotional) => (
          <div
            key={devotional.id}
            className='shadow-lg rounded-lg p-4 border-2 border-secondaryColour'
          >
            <Image
              src={devotional.imageUrl}
              alt={devotional.title}
              width={700}
              height={600}
              className='w-full h-40 object-cover rounded-md'
            />
            <h2 className='text-xl font-semibold mt-4'>{devotional.title}</h2>
            <p className='text-gray-600 mt-2'>{devotional.date}</p>
            <Link href={`/devotionals/${devotional.slug}`}>
              <button className='bg-primaryColour text-white px-6 py-3 rounded-md font-openSans hover:bg-primaryColour-90'>
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center items-center mt-8 space-x-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md bg-gray-300 ${
            currentPage === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <p className='text-lg'>
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md bg-gray-300 ${
            currentPage === totalPages ? "cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
