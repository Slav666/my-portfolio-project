import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7fHPSau7h0gR6uIViG3Ohag&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-white">
                56 Drummohr Gardens <br />
                Wallyford, Scotland
              </p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            You can contact me via LinkedIn or email, or from right here in the
            contact form. I look forward to hearing from you. You can contact me
            via LinkedIn or email, or from right here in the contact form. I
            look forward to hearing from you. You can contact me via LinkedIn or
            email, or from right here in the contact form. I look forward to
            hearing from you.
          </p>
          <div className="relative mb-4">
            <a href="mailto:slawomirdyk@gmail.com">Send Email</a>
          </div>
          <div className="relative mb-4">
            <a href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/">
              Send me message by link
            </a>
          </div>
          <div className="relative mb-4">My phone number: 94949499494</div>
        </form>
      </div>
    </section>
  );
}
