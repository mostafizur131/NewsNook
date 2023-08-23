import React from "react";

const Contact = () => {
  return (
    <section className="p-6 text-gray-100 h-screen flex justify-center items-center">
      <form
        novalidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900"
      >
        <h2 className="w-full text-3xl font-bold ">Contact us</h2>
        <div>
          <label for="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          />
        </div>
        <div>
          <label for="website" className="block mb-1 ml-1">
            Website
          </label>
          <input
            id="website"
            type="website"
            placeholder="Your website"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          />
        </div>
        <div>
          <label for="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-red-400 focus:ri hover:ri text-gray-100"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
