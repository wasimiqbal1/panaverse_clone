import Wrapper from "@/components/shared/Wrapper"
import Heroposter from "@/assets/Images/hero-poster.jpg"
import Image from "next/image"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center">
          {/* {Left side} */}
          <div className="flex-1 px-1 ">
            <h4 className="text-teal-500 font-semibold text-lg">
              Presidential Initiative for Artificial Intelligence &
              Computing(PIAIC)
            </h4>
            <h1 className="text-5xl font-semibold mt-2 ">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="mt-4 text-slate-600  text-lg ">
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program beginning. It resembles a
              cross between a corporate venture and an educational project.
            </p>
            <button className="mt-6 text-bold h-10 px-5 text-white transition-colors duration-150 bg-teal-600	 rounded-full focus:shadow-outline hover:bg-teal-800">Learn More</button>
          </div>
          {/* {Right side} */}
            <div className="flex-1 px-1">
            <Image src={Heroposter} alt="Hero Poster" />
            </div>          
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
