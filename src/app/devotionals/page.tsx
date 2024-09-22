import { fetchAllDevotionals } from "../../../serveractions/devotional";
import AllDevotionals from "../components/Devotionals/AllDevotionals";
import AllDevotionalsSkeleton from "../components/Skeletons/allDevotionalsSkeleton";

export default async function DevotionalsPage() {
  const allDevotionals = await fetchAllDevotionals();

  if (!Array.isArray(allDevotionals)) {
    console.error(allDevotionals.error);
    return <AllDevotionalsSkeleton />;
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
