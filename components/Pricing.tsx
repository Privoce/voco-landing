import React, { useState } from "react";
import Image from "next/future/image";

type PriceInfo = {
  billingType: "month" | "annual";
  smallSite?: boolean;
  type?: "Freemium" | "Pro" | "Supreme";
  price?: number;
  priceIntro?: string;
  paymentLink: string;
  chatLink: string;
  features?: {
    description: string;
    list: string[];
  };
};

const Col = ({
  billingType,
  smallSite = false,
  type = "Freemium",
  price = 0,
  paymentLink,
  chatLink,
  features = {
    description: "Everything is free to use:",
    list: [
      "Access to basic components",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "200MB dedicated data storage",
      "Basic service support"
    ]
  },
  priceIntro = "Basic features for up to 10 users."
}: PriceInfo) => {
  return (
    <li className="rounded-2xl border border-gray-200 text-md text-gray-500 shadow-md flex flex-col relative w-96">
      {smallSite && (
        <span className="absolute top-8 right-8 text-primary-700 text-sm bg-primary-50 rounded-2xl px-3 py-1">
          Small Site’s Choice
        </span>
      )}
      <div className="p-8 border-b">
        <span className="text-gray-500 text-lg">{type} </span>
        <h3 className="text-6xl text-gray-900 font-semibold my-4">
          ${price}
          <i className="ml-1 text-md font-normal text-gray-500 not-italic">
            per {billingType == "month" ? `month` : `year`}
          </i>
        </h3>
        <p className="">{priceIntro}</p>
        <div className="flex flex-col gap-3 mt-8">
          <a href={paymentLink} className="btn-primary text-center">
            Get started
          </a>
          <a href={chatLink} className="btn-primary btn-ghost text-center">
            Chat to sales
          </a>
        </div>
      </div>
      <div className="p-8">
        <h4 className="text-gray-900 font-semibold">FEATURES</h4>
        <p className="mt-1 mb-6">{features.description}</p>
        <ul className="flex flex-col gap-4">
          {features.list.map((desc) => {
            return (
              <li
                key={desc}
                className="pl-9 bg-[url('/img/check.svg')] bg-[length:24px_24px]] bg-no-repeat"
              >
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
function Pricing() {
  const [billingType, setBillingType] = useState<"month" | "annual">("month");
  const handleChangeBilling = (type: "month" | "annual") => {
    setBillingType(type);
  };
  return (
    <section className="flex flex-col items-center pt-24">
      <span className="text-primary-600 font-semibold">Pricing</span>
      <h2 className="font-semibold text-5xl text-gray-900 mb-6 text-center">
        Simple, transparent pricing
      </h2>
      <p className="w-192 text-center text-xl text-gray-500 ">
        We believe our components should empower all customers.
      </p>
      <div className="flex gap-2 bg-gray-50 border border-gray-100 p-1.5 mt-10 mb-24 rounded-lg">
        <button
          onClick={handleChangeBilling.bind(null, "month")}
          className={`py-2.5 px-3.5 rounded-md ${billingType == "month" ? "shadow bg-white" : ""}`}
        >
          Monthly billing
        </button>
        <button
          onClick={handleChangeBilling.bind(null, "annual")}
          className={`py-2.5 px-3.5 rounded-md ${billingType == "annual" ? "shadow bg-white" : ""}`}
        >
          Annual billing
        </button>
      </div>
      <ul className="flex gap-8 pb-24 border-b">
        <Col billingType={billingType} smallSite paymentLink="#" chatLink="#" />
        <Col
          billingType={billingType}
          paymentLink="#"
          chatLink="#"
          type="Pro"
          price={billingType === "month" ? 12 : 120}
          priceIntro="Premium features for up to 100 users."
          features={{
            description: "Everything in Freemium plus....",
            list: [
              "Advanced components",
              "Advanced reporting and analytics",
              "Up to 100 individual users",
              "1GB dedicated data storage",
              "Priority chat and email support"
            ]
          }}
        />
        <Col
          billingType={billingType}
          paymentLink="#"
          chatLink="#"
          type="Supreme"
          price={billingType === "month" ? 99 : 1099}
          priceIntro="Advanced features + unlimited users."
          features={{
            description: "Everything in Pro plus....",
            list: [
              "Advanced customizable fields",
              "Unlimited components",
              "Unlimited individual users",
              "10GB dedicated data storage",
              "Personalized+priotity service"
            ]
          }}
        />
      </ul>
    </section>
  );
}

export default Pricing;
