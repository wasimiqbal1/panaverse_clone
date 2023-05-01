import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

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
        <div className="my-20 flex gap-x-4">
          <div className="border rounded-md w-4/12 px-8 py-12 relative">
            <h4 className="font-bold text-lg ">Quarter I</h4>
            <p className="mt-2 text-slate-800">CS-101: Object-Oriented Programming using TypeScript</p>
            <span className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200">1</span>
          </div>
          <div className="border rounded-md w-4/12 px-8 py-12 relative">
            <h4 className="font-bold text-lg ">Quarter II</h4>
            <p className="mt-2 text-slate-800">CS-101: Object-Oriented Programming using TypeScript</p>
            <span className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200">2</span>
          </div>
          <div className="border rounded-md w-4/12 px-8 py-12 relative">
            <h4 className="font-bold text-lg ">Quarter III</h4>
            <p className="mt-2 text-slate-800">CS-101: Object-Oriented Programming using TypeScript</p>
            <span className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200">3</span>
          </div>

        </div>
      </Wrapper>
    </section>
  );
};
export default CoreTracks;
