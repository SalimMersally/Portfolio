import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
  const firstRef = useRef();
  const lastRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const params = {
      first: firstRef.current.value,
      last: lastRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    firstRef.current.value = "";
    lastRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
    emailjs
      .send(
        "service_3o4feuo",
        "template_e0xnsgl",
        params,
        "user_KLWtY2hVuNAqLpvosjCPj"
      )
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="flex flex-col md:px-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold m-5">Contact Me</h1>
      </div>
      <form
        className="flex flex-wrap justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex w-10/12 justify-between flex-wrap">
          <div className="md:w-5/12 w-full">
            <label for="FirstName">First Name:</label>
            <div className="flex rounded-md border-2 border-blue-500 w-full my-2">
              <div className="flex-grow mx-2 py-1">
                <input
                  type="text"
                  id="FirstName"
                  className="w-full bg-transparent"
                  placeholder="First Name"
                  ref={firstRef}
                />
              </div>
            </div>
          </div>
          <div className="md:w-5/12 w-full">
            <label for="LastName">Last Name:</label>
            <div className="flex rounded-md border-2 border-blue-500 w-full my-2">
              <div className="flex-grow mx-2 py-1">
                <input
                  type="text"
                  id="LastName"
                  className="w-full bg-transparent"
                  placeholder="Last Name"
                  ref={lastRef}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <label for="Subject">Subject:</label>
          <div className="flex rounded-md border-2 border-blue-500 w-full my-2">
            <div className="flex-grow mx-2 py-1">
              <input
                type="text"
                id="Subject"
                className="w-full bg-transparent"
                placeholder="Subject"
                ref={subjectRef}
              />
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <label for="Message">Message:</label>
          <div className="flex rounded-md border-2 border-blue-500 w-full my-2">
            <div className="flex-grow mx-2 py-1">
              <textarea
                id="Message"
                className="w-full h-full bg-transparent"
                placeholder="Message"
                ref={messageRef}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-blue-500 hover:bg-gray-500 py-2 px-4 text-white text-lg font-medium m-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
