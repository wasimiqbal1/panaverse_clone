// "use client";

import Wrapper from "../shared/Wrapper";
import outcome from "@/assets/Images/outcome.jpg";
import Image from "next/image";

const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex gap-8">
            {/* Left Image */ }
            <div className="flex-1">
            <Image src={outcome} alt="Program"/>
            </div>
            {/* Right Content */}
            <div>
              
            </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
