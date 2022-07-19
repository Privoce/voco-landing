import React, { useState, useRef, FormEvent } from "react";
import { PopupModal, InlineWidget } from "react-calendly";
import Modal from "./Modal";
const Booking = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [opened, setOpened] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!emailRef.current?.checkValidity()) {
      return;
    }
    const emailVal = evt.currentTarget.email.value;
    setEmail(emailVal);
    setOpened(true);
  };
  return (
    <section className="flex flex-col items-center py-24">
      <h3 className="font-semibold text-4xl sm:text-5xl md:text-4xl tracking-tight text-gray-900 w-[768px] sm:w-[80%] md:w-[768px] text-center flex flex-col">
        <span>Want an expert to upgrade your site?</span>
        <span>Book a meeting with us:</span>
      </h3>
      <p className="w-192 text-center text-xl text-gray-500 mt-5 mb-16 ">
        Projects prices mostly range from 500 to 3000 USD
      </p>
      <form
        action="#"
        className="flex gap-4 sm:flex-col sm:items-center md:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          required
          name="email"
          ref={emailRef}
          className="rounded-md outline-none border border-gray-300 px-4 py-3 w-[360px] sm:text-xl md:text-md  focus:invalid:border-red-300 focus:valid:border-green-300 "
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit" className="btn-primary">
          Book an expert session
        </button>
      </form>
      {opened && (
        <Modal>
          <div className="sm:w-full md:w-[600px] relative">
            <InlineWidget url="https://calendly.com/hansu" prefill={{ email }} />
            <button className="btn-primary-small absolute -bottom-20 left-[50%] translate-x-[-50%]">
              Close
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Booking;
