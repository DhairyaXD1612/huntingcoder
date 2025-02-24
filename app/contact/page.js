import React from "react";

function Page() {
  return (
    <section className="bg-white  text-black flex items-center justify-center">
      <div className="py-8 lg:py-16 px-6 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              aria-label="Your email"
              className="shadow-sm bg-white border border-gray-500 text-black text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>

          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              aria-label="Subject"
              className="block p-3 w-full text-sm bg-white border border-gray-500 text-black rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              aria-label="Your message"
              className="block p-2.5 w-full text-sm bg-white border border-gray-500 text-black rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-black bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-500"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Page;
