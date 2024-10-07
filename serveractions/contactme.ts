"use server";

interface FormData {
  fullName: string;
  phoneNo: string;
  email: string;
  message: string;
}

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactMe = async (formData: FormData) => {
  try {
    const { fullName, phoneNo, email, message } = formData;

    if (!message || typeof message !== "string") {
      return { error: "Invalid messsage" };
    }

    const { error } = await resend.emails.send({
      from: "Olu Victor Ministry Contact Form <onboarding@resend.dev>",
      to: "victorvictoria0001@gmail.com",
      subject: `Message from ${fullName} with phone number ${phoneNo} - ${email} `,
      replyTo: email,
      text: message,
    });

    if (error) {
      console.log(error);
      return { error: "Error sending messsage. Please, try again." };
    }

    return { success: "Message sent. We would reach out to you shortly." };
  } catch (error) {
    console.log(error);
    return { error: "Error sending messsage. Please, try again." };
  }
};
