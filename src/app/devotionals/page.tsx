import { generateSlug } from "@/utils/functions";
import { fetchAllDevotionals } from "../../../serveractions/devotional";
import AllDevotionals from "../components/Devotionals/AllDevotionals";
import AllDevotionalsSkeleton from "../components/Skeletons/allDevotionalsSkeleton";

// Define a type for fetched devotionals that do not yet contain the slug
interface FetchedDevotional {
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

// Define the type for the full Devotional object, which includes slug
interface Devotional extends FetchedDevotional {
  slug: string;
}

export default async function DevotionalsPage() {
  let allDevotionals = await fetchAllDevotionals();

  if (Array.isArray(allDevotionals)) {
    allDevotionals = allDevotionals.map(
      (devotional: FetchedDevotional): Devotional => ({
        ...devotional,
        slug: generateSlug(new Date(devotional.date)),
      })
    );
  } else {
    console.error(allDevotionals.error);
    return (
      // <div className='w-full max-w-7xl mx-auto'>
      //   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
      <AllDevotionalsSkeleton />
      //   </div>
      // </div>
    );
  }

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center mt-20'>
        Daily Devotionals
      </h1>
      <AllDevotionals allDevotionals={allDevotionals} />
    </div>
  );
}
