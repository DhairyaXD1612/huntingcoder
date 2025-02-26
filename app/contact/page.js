import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-serif text-3xl m-5 underline underline-offset-[16px]">
        Contact Us!
      </h1>
      <form action="#" method="post" className="flex flex-col items-left">
        <label className="underline underline-offset-8 mt-5" htmlFor="email">
          Enter Your Email ID {`->`}
        </label>
        <input
          placeholder="123@example.com"
          type="email"
          name="email:"
          id="email"
          className="border-l-4 border-black border-b-4 mt-5 border-t-[0.5px] py-1 pl-5 w-[80vw] border-r-[0.5px] font-mono"
        />
        <label className="underline underline-offset-8 mt-5" htmlFor="name">
          Enter Your Name {`->`}
        </label>
        <input
          placeholder="John Doe"
          type="name"
          name="name:"
          id="name"
          className="border-l-4 border-black font-mono border-b-4 mt-5 border-t-[0.5px] py-1 pl-5 w-[80vw] border-r-[0.5px]"
        />
		<label className="underline underline-offset-8 mt-5" htmlFor="message">
          Enter a message {`->`}
        </label>
        <input
          placeholder="lorem ipsum dolor sit amet .."
          type="message"
          name="message:"
          id="message"
          className="border-l-4 border-black font-mono border-b-4 mt-5 border-t-[0.5px] py-1 pl-5 w-[80vw] border-r-[0.5px]"
        />

		<button id="submit" className="bg-yellow-200 w-[25%] border-l-4 border-black border-b-4 mt-5 border-t-[0.5px] py-1 px-2  border-r-[0.5px] font-mono">Submit Now!</button>
      </form>
    </div>
  );
};

export default Contact;
