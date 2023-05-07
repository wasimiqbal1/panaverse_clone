import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Quarterbox from "./QuarterBox";

const SpecializedTrack = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3 ">
            Specialized Tracks:
          </h2>
          <p className="mt-6 text-slate-600 mr-5 text-lg text-justify ">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
<div className="mt-10 flex gap-x-6 gap-y-8">
      {/* Content Left */}
      <div className="shadow-xl rounded-xl border border-slate-200 py-8 px-8 basis-8/12 ">
  <h4 className="text-teal-700 text-lg ">Specialized Program</h4>
  <h3 className="text-2xl font-bold mt-1">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
  <p className="text-lg text-slate-600 mt-2 ">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</p>
<button className="text-teal-700 text-xl mt-4 underline flex items-center gap-x-1.5 ">Learn More <svg width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>
</button>
<div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
  <Quarterbox
    discription="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
    header="Quarter IV"
    number={4}
    haveBorder={false}
  />
    <Quarterbox
    discription="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
    header="Quarter V"
    number={5}
  />
</div>
</div>
        {/* Content Right */}
        <div className=" px-4 py-6 bg-slate-200 basis-4/12 ">
          <div className=" flex gap-x-4 items-center">
          <div>
            <div className="w-20 h-16 rounded bg-red-300  "></div>
          </div>
          <div>
            <h4 className="text-primary font-medium">Specialized Program</h4>
            <h3 className="text-xl font-semibold ">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
          </div>
          </div>
        
        </div>
  
</div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;
