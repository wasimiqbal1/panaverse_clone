import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import Quarterbox from "@/components/shared/QuarterBox";

const CoreTracksData = [
  {
    header: "Quarter I",
    discription: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    discription:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13, TailwindCSS, and Serverless PostgreSQL Databases",
    number: 2,
  },
  {
    header: "Quarter III",
    discription:
      "$-301: Dollar Making Bootcamp - Full-Stack Template, API, and Product Development. W3-301: Developing Web 3.0 DApps using Solidity, Ethers.js, Hardhat, and Account Abstraction",
    number: 3,
  },
];

const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* Content*/}
        <div className="max-w-screen-sm  ">
          <h4 className="text-teal-500 font-bold text-lg text-justify">
            Programe of Studies
          </h4>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3 ">
            Core Courses <br />
            (Common in All Specializations)
          </h2>
          <p className="mt-6 text-slate-600 mr-5 text-lg text-justify ">
            Every participant of the program will start by completing the
            following three core courses
          </p>
          <div>
            <Button text="learn More" />
          </div>
        </div>
        {/* {Boxes} */}

        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6 ">
          {CoreTracksData.map((item, i) => (
            <Quarterbox
              key={item.number}
              discription={item.discription}
              header={item.header}
              number={i + 1}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
export default CoreTracks;
