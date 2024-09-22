"use server";

import { db } from "@/lib/db";
import { parse } from "date-fns";
import { Devotional } from "@/utils/types";

export const createDevotional = async (devotionalData: Devotional) => {
  // console.log("Devotional Data:", devotionalData);

  const { title, date, bibleVerse, content, declaration, imageUrl } =
    devotionalData;

  try {
    if (
      !title ||
      !date ||
      !bibleVerse ||
      !content ||
      !declaration ||
      !imageUrl
    ) {
      return { error: "All fields needs to be filled!" };
    }

    const data = await db.devotionals.create({
      data: {
        title,
        date: new Date(date),
        bibleVerse,
        content,
        declaration,
        imageUrl,
      },
    });

    const serializedData = {
      ...data,
      date: data.date.toISOString(),
    };

    console.log("Created Devotional:", data);
    return { data: serializedData };
  } catch (error) {
    console.error("Error creating devotional:", error);
    return { error };
  }
};

export const fetchAllDevotionals = async () => {
  try {
    const today = new Date();

    const devotionals = await db.devotionals.findMany({
      where: {
        date: {
          lte: today, // Fetch only devotionals for today and earlier
        },
      },
      orderBy: {
        date: "desc", // Sort them by date, descending (latest first)
      },
    });

    if (!devotionals || devotionals.length === 0) {
      return { error: "No devotionals found" };
    }

    return devotionals;
  } catch (error) {
    return { error };
  }
};

export const fetchDevotionalBySlug = async (slug: string) => {
  // console.log(slug);
  try {
    const parsedDate = parse(slug, "dd-MM-yyyy", new Date());

    if (isNaN(parsedDate.getTime())) {
      return { error: "Invalid date format" };
    }

    const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));

    const devotional = await db.devotionals.findFirst({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (!devotional) {
      return { error: "Devotional not found" };
    }

    // console.log(devotional);
    return devotional;
  } catch (error) {
    console.error("Error fetching devotional by slug:", error);
    return { error: "An error occurred while fetching the devotional" };
  }
};

export const fetchTodaysDevotional = async () => {
  try {
    const today = new Date();

    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59
    );

    const devotional = await db.devotionals.findFirst({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (!devotional) {
      return { error: "No devotional found for today" };
    }

    return devotional;
  } catch (error) {
    return { error: "Error fetching today's devotional" };
  }
};
