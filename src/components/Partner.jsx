import styles from "../style";
import partner from "../assets/partner.png";

const Partner = () => (
  <section
    className={`${styles.partnerSection} overflow-hidden relative w-full`}
  >
    {/* Heading Section */}
    <div className="relative z-20 flex flex-col left-0 md:left-[3rem] text-black px-4 md:px-8 pb-10 mt-10 md:mt-20 bg-white">
      <h1 className={`${styles.heading2}`}>
        You prepare the food, we handle the rest
      </h1>
    </div>

    {/* Background Image */}
    <div className="relative w-full h-72 md:h-[32rem] overflow-hidden">
      <img
        src={partner}
        alt="Chef in kitchen"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Card Section */}
    <div className="relative z-30 flex justify-center md:justify-start left-0 md:left-[5rem] -mt-24 md:-mt-[12rem] mb-8">
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg max-w-full md:max-w-[636px] mx-4 md:mx-6">
        <h2 className="font-Montserrat text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-7 font-semibold mb-4">
          List your restaurant or shop on foodpanda
        </h2>
        <div className="w-full md:w-[560px] text-[14px] md:text-[16px] text-black">
          <p className="open mb-4">
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we!
          </p>
          <p className="open mb-4">
            It's simple: we list your menu and product lists online, help you
            process orders, pick them up, and deliver them to hungry pandas – in
            a heartbeat!
          </p>
          <p className="open mb-4">
            Interested? Let's start our partnership today!
          </p>
        </div>
        <button className={`${styles.buttonstyle} my-3`}>Get started</button>
      </div>
    </div>
  </section>
);

export default Partner;
