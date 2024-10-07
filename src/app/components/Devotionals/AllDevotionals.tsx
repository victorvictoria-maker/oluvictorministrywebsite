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

  const downloadImage = (imageUrl: string, imageName: string) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${imageName}.jpg`); // Set the filename here
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up the object URL
      })
      .catch((error) => console.error("Error downloading the image", error));
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
      {currentDevotionals.length <= 0 && <DevotionalsGrid />}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {currentDevotionals.length > 0 && (
          <>
            {currentDevotionals.map((devotional) => (
              <div
                key={devotional.id}
                className=' relative shadow-lg rounded-lg p-4'
              >
                <Image
                  src={devotional.imageUrl}
                  alt='Devotional Image'
                  width={700}
                  height={600}
                  className='w-full mt-6 h-56 object-cover rounded-md  '
                  priority
                />
                <button
                  onClick={() =>
                    downloadImage(devotional.imageUrl, devotional.title)
                  }
                  className='absolute top-8 right-2 border border-secondaryColour bg-white p-[6px] rounded-full shadow hover:bg-opacity-90 transition'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-gray-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                    />
                  </svg>
                </button>

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
