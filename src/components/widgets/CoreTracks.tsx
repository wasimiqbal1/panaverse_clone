import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

const CoreTracks = () => {
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
         {/* Content*/}
        <div className="max-w-screen-sm  ">
          <h4 className="text-teal-500 font-bold text-lg text-justify">Programe of Studies</h4>
          <h2 className="text-4xl font-semibold text-gray-900 mt-3 ">Core Courses <br />(Common in All Specializations)</h2>
          <p className="mt-6 text-slate-600 mr-5 text-lg text-justify ">
            Every participant of the program will start by completing the
            following three core courses
          </p>
          <div>
            <Button text="learn More" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default CoreTracks;
