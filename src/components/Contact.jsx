import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-400 text-sm mb-6">
        Have a project, collaboration idea, or just want to say hi? Drop me a message below!
      </p>

      <form
        action="https://formspree.io/f/xqkrvnok" // Replace with your form endpoint or custom handler
        method="POST"
        className="grid gap-4 max-w-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
