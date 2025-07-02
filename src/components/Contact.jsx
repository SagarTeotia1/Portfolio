import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwrnpdv");

  if (state.succeeded) {
    return (
      <section id="contact" className="mt-20 px-4 md:px-0 text-center">
        <h2 className="text-3xl font-bold mb-4">Message Sent ✅</h2>
        <p className="text-gray-500 dark:text-gray-400">Thanks for reaching out. I’ll get back to you soon!</p>
      </section>
    );
  }

  return (
    <section id="contact" className="mt-20 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 max-w-lg">
        Have a project, collaboration idea, or just want to say hi? Drop me a message below!
      </p>

      <form onSubmit={handleSubmit} className="grid gap-5 max-w-xl">
        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm w-full"
        />

        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm w-full"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          required
          rows="5"
          placeholder="Your Message"
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm w-full resize-none"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-full transition-all duration-300 disabled:opacity-60"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
