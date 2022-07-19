import React from "react";
import Image from "next/future/image";
type Props = {};

function FirstView({}: Props) {
  return (
    <section className="flex min-h-screen flex-col items-center bg-primary-50 pb-10 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
      <nav className="flex justify-between sm:px-6  md:px-[120px] py-5 w-full border-b sm:flex-col">
        <div className="flex gap-8 text-md text-gray-500 ">
          <Image
            alt="logo"
            width={40}
            height={40}
            className="w-10 h-10"
            src={"/apple-touch-icon.png"}
          />
          <div className="flex md:flex-row md:items-center md:gap-8 sm:flex-col sm:gap-1 sm:items-start whitespace-nowrap">
            <a href="#" className="whitespace-nowrap">
              Voce Social Components
            </a>
            <a href="https://voce.chat" target={"_blank"} rel="noopener noreferrer" className="li">
              Voce Private Hosting
            </a>
            <a href="#" className="li">
              Pricing
            </a>
          </div>
        </div>
        {/* login */}
        <ul className="right">
          <li></li>
        </ul>
      </nav>
      <h2 className="font-semibold md:text-6xl sm:text-4xl text-primary-900 tracking-tight text-center flex flex-col gap-4">
        <span>Add a Social Element</span>
        <span>Get More Engagement</span>
      </h2>
      <p className="text-xl w-[768px] sm:w-[90%] text-center text-primary-700 mt-6 mb-16 mx-4">
        Add a posting section or a channel chat to your website. Make it more interactive, make it
        more attractive.
      </p>
    </section>
  );
}

export default FirstView;
