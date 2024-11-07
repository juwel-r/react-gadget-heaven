import React, { useEffect } from "react";
import bannerVR from "../../assets/banner.jpg";

const Banner = () => {
document.title="Home | Gadget Heaven"

  return (
    <div className="border-r border-l border-b rounded-b-3xl border-primary/50 bg-white backdrop-blur-lg p-1 pt-0 relative w-11/12 mx-auto">
      <div className="pt-4 md:pt-12 pb-24 md:pb-48 lg:pb-60 bg-primary text-center text-white rounded-b-3xl ">
        <div className="w-4/5 mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="font-thin my-4 md:my-6 text-sm">
            Explore the latest gadgets that will take your experience to the{" "}
            <br className="hidden md:block" />
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-primary border-none rounded-full font-bold text-xl">
            Shop Now
          </button>
        </div>
        <div className="w-9/12 rounded-3xl border-2 p-2 bg-white/50 absolute top-[77%] md:top-[65%] lg:top-[60%] right-[12%] backdrop-blur-sm">
          <img className="rounded-3xl h-full w-full" src={bannerVR} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
