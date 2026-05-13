"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
// 1. We don't need axios if we use Server Actions
import { submitContactForm } from "../app/actions/contact"; 

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const result = await submitContactForm(formData);

    // Use optional chaining (?.) to prevent the "undefined" crash
    if (result?.success) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      console.error("Server returned failure:", result?.error);
      setStatus("error");
    }
  } catch (error) {
    console.error("Action call failed:", error);
    setStatus("error");
  }
};

  const contactInfo = [
    { icon: <Phone className="text-blue-600" />, label: "Call Us", detail: "+91 9605447242" },
    { icon: <Mail className="text-blue-600" />, label: "Email", detail: "travelwithsiby@gmail.com" },
    // { icon: <MapPin className="text-blue-600" />, label: "Office", detail: "MG Road, Kochi, Kerala" },
  ];

  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            Get In <span className="text-blue-600">Touch</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Ready to start your adventure? Send us a message and our travel experts will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                  <div className="flex justify-center mb-3">{info.icon}</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-1">{info.label}</p>
                  <p className="text-sm text-gray-600 font-medium">{info.detail}</p>
                </div>
              ))}
            </div>

            <div className="w-full h-[350px] rounded-3xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.123456789!2d76.28!3d9.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMDAuMCJOIDc2wrAxNic0OC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            <a 
              href="https://wa.me/+919605447242" 
              target="_blank" 
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-green-100"
            >
              <MessageSquare size={20} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your travel plans..."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                  status === "success" ? "bg-green-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100"
                }`}
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-500 text-center text-sm font-medium mt-2">
                  Oops! Email service failed. Check your App Password.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}