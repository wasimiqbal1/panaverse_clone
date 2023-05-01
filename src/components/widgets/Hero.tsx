import Wrapper from "@/components/shared/Wrapper";
import Heroposter from "@/assets/Images/hero-poster.jpg";
import Image from "next/image";
//Components
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* {Left side} */}
          <div className="flex-1 px-1 ">
            <h4 className="text-teal-500 font-bold text-lg text-justify">
              Presidential Initiative for Artificial Intelligence & Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl font-semibold text-gray-900 mt-3">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <div className="mt-6 text-slate-600 mr-5 text-lg text-justify">
              <p>
                One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet
              </p>
              <p className="mt-5">
                {" "}
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </p>
            </div>
            <div>
              <Button text={"Enroll Now"} />
            </div>
          </div>
          {/* {Right side} */}
          <div className="flex-1 px-1">
            <Image src={Heroposter} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
