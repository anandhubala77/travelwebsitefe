"use server";
import nodemailer from "nodemailer";
// Deleted the empty import line that was causing the crash

export const submitContactForm = async (formData: any) => {
  try {
    // It is better to check the ENV here so you see it in the terminal
    console.log("Checking ENV:", process.env.EMAIL_USER ? "Loaded ✅" : "Not Loaded ❌");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    });

    return { success: true }; 

  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "Failed to send" };
  }
};