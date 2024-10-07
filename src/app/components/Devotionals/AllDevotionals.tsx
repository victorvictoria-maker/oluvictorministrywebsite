"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDateWithDay, generateSlug } from "@/utils/functions";
import DevotionalsGrid from "../Skeletons/devotionalsGrid";

interface Devotional {
  id: string;
  title: string;
  date: Date;
  bibleVerse: string;
  content: string;
  declaration: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
}

interface AllDevotionalsProps {
  allDevotionals: Omit<Devotional, "slug">[];
}

const AllDevotionals: React.FC<AllDevotionalsProps> = ({ allDevotionals }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [devotionals, setDevotionals] = useState<Devotional[]>([]);
  const [filteredDevotionals, setFilteredDevotionals] = useState<Devotional[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  //   const [filterDate, setFilterDate] = useState("");

  const devotionalsPerPage = 6;

  useEffect(() => {
    const devotionalsWithSlugs = allDevotionals.map((devotional) => ({
      ...devotional,
      slug: generateSlug(new Date(devotional.date)), // Generate slug based on the date
    }));
    setDevotionals(devotionalsWithSlugs);
    setFilteredDevotionals(devotionalsWithSlugs);
  }, [allDevotionals]);

  useEffect(() => {
    const searchedDevotionals = devotionals.filter((devotional) =>
      devotional.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDevotionals(searchedDevotionals);
  }, [searchTerm, devotionals]);

  // Handle filter by date
  //   useEffect(() => {
  //     if (filterDate) {
  //       const dateFilteredDevotionals = devotionals.filter(
  //         (devotional) => devotional.date === filterDate
  //       );
  //       setFilteredDevotionals(dateFilteredDevotionals);
  //     } else {
  //       setFilteredDevotionals(devotionals);
  //     }
  //   }, [filterDate, devotionals]);

  // Pagination logic
  const indexOfLastDevotional = currentPage * devotionalsPerPage;
  const indexOfFirstDevotional = indexOfLastDevotional - devotionalsPerPage;
  const currentDevotionals = filteredDevotionals.slice(
    indexOfFirstDevotional,
    indexOfLastDevotional
  );

  const totalPages = Math.ceil(filteredDevotionals.length / devotionalsPerPage);

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
    <>
      {/* Search and Filter Inputs */}
      <div className='flex justify-between items-center mb-6'>
        <input
          type='text'
          placeholder='Search for a devotional by topic'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border border-gray-300 p-2 rounded-md w-full md:w-1/2'
        />
        {/* <input
          type='date'
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className='border border-gray-300 p-2 rounded-md'
        /> */}
      </div>

      {/* Devotionals Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {currentDevotionals.length <= 0 && <DevotionalsGrid />}
        {currentDevotionals.length > 0 && (
          <>
            {currentDevotionals.map((devotional) => (
              <div key={devotional.id} className='shadow-lg rounded-lg p-4'>
                <Image
                  src={devotional.imageUrl}
                  alt='Devotional Image'
                  width={700}
                  height={600}
                  className='w-full mt-6 h-56 object-cover rounded-md  '
                  priority
                />
                <h2 className='text-lg lg:text-xl font-semibold mt-4 md:min-h-20 '>
                  {devotional.title}
                </h2>
                <p className='text-gray-600 mt-2'>
                  {formatDateWithDay(devotional.date)}
                  {/* {new Date(devotional.date).toLocaleDateString("en-GB")} */}
                </p>
                <Link href={`/devotionals/${devotional.slug}`}>
                  <button className='bg-secondaryColour-90 text-white px-6 py-3 rounded-md font-openSans hover:bg-secondaryColour w-full'>
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </>
        )}
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
    </>
  );
};

export default AllDevotionals;
