"use client"

import { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import Quarterbox from "@/components/shared/QuarterBox";
import Image from "next/image";
//Images 
import Web3Img  from "@/assets/images/web 3.webp";


export const programsData = [
  {
    slug : "wmd",
    headers: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: Web3Img,
      quarters: [
      {
        discription:
          "W3-351: Developing Advanced Smart Contracts and Oracles and Planet-Scale Web 3.0 DApps",
        header: "Quarter IV",
        number: 4,
      },
      {
        discription:
          "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        header: "Quarter V",
        number: 5,
      },
    ],
  },
  {
    slug : "ai",
    headers: "II.	Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image: Web3Img,

      quarters: [
      {
        discription:
          "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        header: "Quarter IV",
        number: 4,
      },
      {
        discription:
          "AI-361: Deep Learning and MLOps",
        header: "Quarter V",
        number: 5,
      },
    ],
  },
  
];

const SpecializedTrack = () => {

  const [selectedItem, setSelectedItem] = useState("wmd"); 
  const selectedItemDate = programsData.find((item) => item.slug === selectedItem)

  return (  
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3 ">
            Specialized Tracks:
          </h2>
          <p className="mt-6 text-slate-600 mr-5 text-lg text-justify max-w-screen-sm ">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
         </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="shadow-xl rounded-xl border border-slate-200 py-8 px-8 basis-8/12 ">
            <h4 className="text-primary text-lg font-medium  ">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold mt-1 ">
              {selectedItemDate?.headers}
            </h3>
            <p className="text-lg text-slate-600 mt-2 ">
              {selectedItemDate?.description}
            </p>
            <button className="text-primary text-xl mt-4 underline flex items-center gap-x-1.5 ">
              Learn More{" "}
              <svg
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
            {/* my-20 flex flex-col md:flex-row gap-x-8 gap-y-6 */}

            {
              selectedItemDate?.quarters.map((item)=>(
                <Quarterbox
                key={item.number}
                discription={item.discription}
                header={item.header}
                number={item.number}
                haveBorder={false}
              />

              ))
            }
            </div>
          </div>
          {/* Content Right */}
          <div className=" px-4 py-6 space-y-4 bg-slate-200 basis-4/12 flex-1 ">
            {
              programsData.map((item, i)=>(
                <div onClick={()=>setSelectedItem(item.slug) } key={item.slug} className=" flex gap-x-4 items-center cursor-pointer">
                <div className="flex-shrink-0 h-24 w-36">
                 <Image src={item.image} alt={item.headers} className="h-24  object-cover"/> 
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold ">
                    {item.headers}
                  </h3>
                </div>
              </div>
                 
              ))
            }

          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;
