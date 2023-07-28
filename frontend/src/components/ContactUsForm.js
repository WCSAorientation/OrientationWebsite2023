import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vumi9cq",
        "template_zyncr77",
        form.current,
        "5jrc7bEYkHuuZ45VE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center">
      <div className="w-96">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-between items-center"
        >
          <label className="mt-4 text-2xl font-semibold text-white">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full h-9 p-2 outline-none rounded-md border border-gray-300 focus:border-green-500"
          />
          <label className="mt-4 text-2xl font-semibold text-white">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full h-9 p-2 outline-none rounded-md border border-gray-300 focus:border-green-500"
          />
          <label className="mt-4 text-2xl font-semibold text-white">Message</label>
          <textarea
            name="message"
            className="w-full h-24 p-2 outline-none rounded-md border border-gray-300 focus:border-green-500"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="text-center mt-5 py-2 mx-auto w-2/4 relative bg-[#F0D8A6] rounded-[30px] tracking-[.05em] text-[#182e2e]  font-bold text-lg cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
