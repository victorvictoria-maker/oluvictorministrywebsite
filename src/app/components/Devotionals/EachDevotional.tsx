"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchDevotionalBySlug } from "../../../../serveractions/devotional";
import ReactMarkdown from "react-markdown";
import { formatDateWithDay } from "@/utils/functions";
import EachDevotionalDetailSkeleton from "../Skeletons/eachDevotionalSkeleton";
import Link from "next/link";

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
}

export default function DevotionalPage() {
  const { slug } = useParams();
  const [devotional, setDevotional] = useState<Devotional | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDevotional = async () => {
      if (slug && typeof slug === "string") {
        try {
          const fetchedDevotional = await fetchDevotionalBySlug(slug);

          if ("error" in fetchedDevotional) {
            setError(fetchedDevotional.error);
            return <EachDevotionalDetailSkeleton />;
          } else {
            setDevotional(fetchedDevotional);
          }
        } catch (error) {
          console.error("Error fetching devotional:", error);
          setError("Error fetching devotional");
        }
        setLoading(false);
      }
    };

    getDevotional();
  }, [slug]);

  if (loading) {
    return <EachDevotionalDetailSkeleton />;
  }

  if (error) {
    return <p className='mt-20'>{error}</p>;
  }

  return (
    <>
      {!devotional && <EachDevotionalDetailSkeleton />}
      {devotional && (
        <div className='p-8 max-w-3xl mx-auto mt-20'>
          <Image
            src={devotional.imageUrl}
            alt={devotional.title}
            width={300}
            height={300}
            className='w-full h-full object-cover rounded-md mb-6'
            priority
          />

          <h1 className='text-3xl font-bold mb-4'>{devotional.title}</h1>

          <p className='text-gray-600 mb-4'>
            {formatDateWithDay(devotional.date)}
          </p>

          <h2 className='text-xl font-semibold mt-6'>Bible Verse:</h2>
          <p className='italic text-gray-700 mb-6'>{devotional.bibleVerse}</p>

          <h2 className='text-xl font-semibold mt-6'>Devotional Content:</h2>
          <div className='text-gray-700 mb-6'>
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => {
                  const isFirstParagraph = node?.position?.start.line === 1;

                  return (
                    <p
                      className={isFirstParagraph ? "mt-0" : "mt-4 "}
                      {...props}
                    />
                  );
                },
              }}
            >
              {devotional.content}
            </ReactMarkdown>
            <p className='mt-2 font-bold'>
              NOTHING IS WRONG WITH YOU IN CHRIST JESUS.
            </p>
          </div>

          <h2 className='text-xl font-semibold mt-6'>Declaration:</h2>
          <p className='text-gray-700 mb-6'>{devotional.declaration}</p>

          <Link href='/devotionals'>
            <button className='px-4 py-2 rounded-md bg-orangeColour-80'>
              See all devotionals
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
