// "use client";

import Wrapper from "../shared/Wrapper";
import outcome from "@/assets/Images/outcome.jpg";
import Image from "next/image";

const outcomePoints = ["Product Ownership", "Freelacing", "Global Marketing by DAO", "Boosting Economy."
]

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex gap-8">
          {/* Left Image */}
          <div className="flex-1">
            <Image src={outcome} alt="Program" />
          </div>
          {/* Right Content */}
          <div className="flex-1">
            <h2 className="font-bold text-5xl">The Outcome for Participants of the Program</h2>
            <p className="mt-4 text-slate-600, text-lg ">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
