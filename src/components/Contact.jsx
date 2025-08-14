import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwrnpdv");

  if (state.succeeded) {
    return (
      <section id="contact" className="mt-20 px-4 md:px-0 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Message Sent ✅</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Thanks for reaching out. I’ll get back to you soon!
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="mt-20 px-4 md:px-0">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-center text-white mb-4 font-sans">
        LET’S WORK <br />
        <span className="text-gray-600 dark:text-gray-400">TOGETHER</span>
      </h2>

      {/* Form Wrapper - Center Aligned */}
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="grid gap-5 w-full max-w-xl">
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md 
                       placeholder:text-gray-400 dark:placeholder:text-gray-500 
                       text-gray-900 dark:text-gray-100 text-sm w-full"
          />

          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md 
                       placeholder:text-gray-400 dark:placeholder:text-gray-500 
                       text-gray-900 dark:text-gray-100 text-sm w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md 
                       placeholder:text-gray-400 dark:placeholder:text-gray-500 
                       text-gray-900 dark:text-gray-100 text-sm w-full resize-none"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="!bg-orange-500 text-white border border-orange-600 shadow-md font-semibold py-2.5 px-6 rounded-full transition-all duration-300 disabled:opacity-60 dark:!bg-orange-500"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
