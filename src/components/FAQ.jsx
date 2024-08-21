import React from "react";
import { Check } from "lucide-react";
import { checklistItems, faqItems } from "../constants";
import styles from "../style";

const FAQ = () => {
  return (
    <section className="md:p-[5rem] border-b m-4">
      <div className="">
        <div className="">
          <h2 className={`${styles.heading2}`}>
            Order food and groceries online from the best restaurants and shops
            on foodpanda
          </h2>
          <p className="open pt-4 text-[18.5px] font-light text-grayfp">
            Are you hungry? Did you have a long and stressful day? Interested in
            getting a cheesy pizza delivered to your office or looking to avoid
            the weekly shop? Then foodpanda Pakistan is the right destination
            for you! foodpanda offers you a long and detailed list of the best
            restaurants and shops near you to help make your every day easier.
          </p>
        </div>
        <div className=" border-b pb-4">
          <h2 className={`${styles.heading2} pt-4`}>What's new?</h2>
          <div className="pt-4 w-full md:w-[50%] lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex ">
                <div className="text-foodP justify-center items-center ">
                  <Check className="p-1" />
                </div>
                <div className="">
                  <p className="open md:w-[100%] text-[18px] leading-6 font-light text-grayfp">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQS */}
      <div className="">
        <div className={`${styles.heading3} pt-4`}>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="pt-4 w-full">
          {faqItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="">
                <h5 className={`${styles.Question}`}>{item.question}</h5>
              </div>
              <div className="">
                <p className="open md:w-[100%] text-[18px] leading-6 font-light text-grayfp">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="open my-[1rem] text-grayfp text-[16px] font-[700] leading-[24px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[32px] ">
          Order food and groceries online with foodpanda now and enjoy a great
          dining experience!
        </p>
      </div>
    </section>
  );
};

export default FAQ;
