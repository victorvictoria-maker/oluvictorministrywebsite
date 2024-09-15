"use client";

import { useParams } from "next/navigation";
import { mockDevotionals } from "../../../../data/mockDevotional";
import Image from "next/image";

export default function DevotionalPage() {
  const { slug } = useParams();

  const devotional = mockDevotionals.find(
    (devotional) => devotional.slug === slug
  );

  console.log(devotional);

  if (!devotional) {
    return <p>Devotional not found!</p>;
  }

  return (
    <div className='p-8 max-w-3xl mx-auto'>
      <Image
        src={devotional.imageUrl}
        alt={devotional.title}
        width={300}
        height={300}
        className='w-full h-60 object-cover rounded-md mb-6'
      />
      <h1 className='text-3xl font-bold mb-4'>{devotional.title}</h1>
      <p className='text-gray-600 mb-4'>{devotional.date}</p>

      {/* Bible Text */}
      <h2 className='text-xl font-semibold mt-6'>Bible Verse:</h2>
      <p className='italic text-gray-700 mb-6'>{devotional.bibleText}</p>

      {/* Main Content */}
      <h2 className='text-xl font-semibold mt-6'>Devotional Content:</h2>
      <p className='text-gray-700 mb-6'>{devotional.content}</p>

      {/* Declaration */}
      <h2 className='text-xl font-semibold mt-6'>Declaration:</h2>
      <p className='text-gray-700 mb-6'>{devotional.declaration}</p>
    </div>
  );
}
