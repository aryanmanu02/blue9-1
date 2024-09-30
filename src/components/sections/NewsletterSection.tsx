import React from "react";
import Header from "../common/Header";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section className="mt-[9rem]">
      <Header title="Contact us" subtitle="LinkedIn Instagram" />
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-[3.31rem]">
        <div>
          <img
            src="/images/newsletter_large_icon.png"
            alt="large envelope image"
            className="w-[10rem] md:w-full"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
            Pin down your Email and Connect with us to work!!
          </p>

          {/* Form Wrapper */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-4"
            />
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full"
              />
            </div>
            <Input type="hidden" name="access_key" value="1201c3cf-8a6a-421a-9a08-7422173cc4f7" />
            <div className="mt-[3.12rem]">
              <MainButton
                text="Submit!! We will connect with you shortly"
                width="full_width"
                isSubmitable={true}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
