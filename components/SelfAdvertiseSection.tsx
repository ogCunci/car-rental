import Image from "next/image";
import React, { Fragment } from "react";

const SelfAdvertiseSection = () => {  
  return (
    <div className="flex flex-col gap-5 relative z-0 max-w-[1440px] mx-auto pt-24">
      <h1 className="sm:text-5xl text-4xl font-extrabold">Why Choose Us?</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 w-full gap-8 px-2 mb-16 mt-4">
        <div className="flex-row max-w-xs text-center justify-center">
          <div className="flex justify-center">
            <Image
              src="/car.png"
              alt="car"
              width={75}
              height={75}
              className="object-contain"
            />
          </div>
          <h3 className="text-black sm:text-3xl text-2xl font-black mt-2">
            Unbeatable Variety
          </h3>
          <p className="sm:text-lg text-base mt-2">
            Whether you're in the mood for a sleek sedan, a rugged SUV, or a
            spacious minivan, you'll find it here. From economy to luxury, we
            have a car for every occasion.
          </p>
        </div>
        <div className="flex-row max-w-xs text-center justify-center align-center">
          <div className="flex justify-center">
            <Image
              src="/customer-support.png"
              alt="customer support"
              width={75}
              height={75}
              className="object-contain"
            />
          </div>
          <h3 className="text-black sm:text-3xl text-2xl font-black mt-2">
            24/7 Support
          </h3>
          <p className="sm:text-lg text-base mt-2">
            Need assistance at any point during your rental? Our dedicated
            customer support team is available around the clock to assist you.
          </p>
        </div>
        <div className="flex-row max-w-xs text-center justify-center align-center">
          <div className="flex justify-center">
            <Image
              src="/handshake.png"
              alt="handshake"
              width={75}
              height={75}
              className="object-contain"
            />
          </div>
          <h3 className="text-black sm:text-3xl text-2xl font-black mt-2">
            Trusted Partners
          </h3>
          <p className="sm:text-lg text-base mt-2">
            We've partnered with leading car rental agencies to bring you the
            most reliable and well-maintained vehicles. Your safety and
            satisfaction are our top priorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfAdvertiseSection;
