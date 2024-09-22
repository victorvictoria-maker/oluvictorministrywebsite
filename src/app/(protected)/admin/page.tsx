"use client";

import { useState } from "react";
import { createDevotional } from "../../../../serveractions/devotional";
import { createClient } from "@/utils/supabase/client";
// import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [bibleVerse, setBibleVerse] = useState("");
  const [content, setContent] = useState("");
  const [declaration, setDeclaration] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ title, date, bibleVerse, content, declaration, image });
    // console.log("hi");

    try {
      setLoading(true);

      let imageUrl = "";
      if (image) {
        const { data, error } = await supabase.storage
          .from("devotional-images")
          .upload(`devotionals/${image.name}`, image);

        if (error) throw error;

        const { data: urlData } = supabase.storage
          .from("devotional-images")
          .getPublicUrl(data.path);

        imageUrl = urlData.publicUrl;
      }

      // console.log("Uploaded Image URL:", imageUrl);

      const devotionalData = {
        title,
        date: new Date(date).toISOString(),
        bibleVerse,
        content,
        declaration,
        imageUrl,
      };

      const result = await createDevotional(devotionalData);

      if (result.data) {
        console.log("Successfully created!");
        toast.success("Devotional uploaded successfully!");

        setTitle("");
        setDate("");
        setBibleVerse("");
        setContent("");
        setDeclaration("");
        setImage(null);
        // router.push(`/devotionals/${result.data.id}`);
      }
    } catch (error) {
      console.error("Error creating devotional:", error);

      if (error && typeof error === "object" && "message" in error) {
        const errorMessage = error.message;

        if (errorMessage === "The resource already exists") {
          console.error("Error: The resource already exists.");
          toast.error("The image exists in storage already.");
        } else if (
          errorMessage ===
          "Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported."
        ) {
          toast.error("Your network is bad, try again.");
        } else {
          console.error("Unexpected Error:", errorMessage);
        }
      } else {
        console.error("Unknown Error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-8 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>Create New Devotional</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block font-semibold'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='w-full border px-4 py-2 rounded'
          />
        </div>

        <div>
          <label className='block font-semibold'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className='w-full border px-4 py-2 rounded'
          />
        </div>

        <div>
          <label className='block font-semibold'>Bible Verse</label>
          <input
            type='text'
            value={bibleVerse}
            onChange={(e) => setBibleVerse(e.target.value)}
            required
            className='w-full border px-4 py-2 rounded'
          />
        </div>

        <div>
          <label className='block font-semibold'>Content (Markdown)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className='w-full border px-4 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block font-semibold'>Declaration</label>
          <textarea
            value={declaration}
            onChange={(e) => setDeclaration(e.target.value)}
            rows={4}
            className='w-full border px-4 py-2 rounded'
            required
          />
        </div>

        <div>
          <label className='block font-semibold'>Upload Image</label>
          <input
            type='file'
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className='w-full border px-4 py-2 rounded'
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
        >
          {loading ? "Submitting..." : "Create Devotional"}
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
