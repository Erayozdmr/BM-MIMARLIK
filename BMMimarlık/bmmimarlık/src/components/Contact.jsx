import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Card from "../imagess/kart.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    const serviceId = "YOUR-ID";
    const templateId = "YOUR-ID";
    const publicKey = "YOUR-ID";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSuccessMessage("Mesajınız başarıyla gönderildi!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage(
        "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      id="iletisim"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto mb-10 p-4"
    >
      <Helmet>
        <meta
          name="description"
          content="BM Mimarlık ile iletişime geçin. Projeleriniz için profesyonel destek alın."
        />
        <meta
          name="keywords"
          content="İletişim, BM Mimarlık, Mimarlık, İç Mimarlık, Projeler, Telefon, Email"
        />
      </Helmet>

      <div className="flex justify-center mb-10">
        <h1 className="relative text-3xl md:text-5xl text-black font-bold p-2 text-center">
          <span className="absolute bottom-[3px] left-1/2 transform -translate-x-1/2 text-black/20 -z-10">
            İLETİŞİM
          </span>
          İLETİŞİM
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start gap-10">
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">
          <img
            src={Card}
            className="max-w-[400px] lg:max-w-full rounded-lg shadow-md"
            alt="İletişim Kartı"
          />
        </div>

        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="font-semibold block">
                İsim
              </label>
              <input
                id="name"
                className="border border-gray-300 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Adınızı giriniz"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold block">
                E-Mail
              </label>
              <input
                id="email"
                className="border border-gray-300 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="email"
                placeholder="E-posta adresinizi giriniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="font-semibold block">
                Mesajınız
              </label>
              <textarea
                id="message"
                className="border border-gray-300 w-full rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Mesajınızı buraya yazınız"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer disabled:opacity-50"
                disabled={isSending}
              >
                {isSending ? "Gönderiliyor..." : "Gönder"}
              </button>
            </div>

            {/* Başarı ve Hata Mesajları */}
            {successMessage && (
              <p className="text-green-600 font-semibold mt-2">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 font-semibold mt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
