import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTrack from "@/components/widgets/SpecializedTrack";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";

export default function Home() {
  return (
    <>
      <main>
        {/* {Hero Section} */}
        <Hero />
        {/* {Core Tracks Section} */}
        <CoreTracks />
        {/* Specialized Track */}
        <SpecializedTrack />
        {/* Outcome Section */}
        <ProgramOutcome />
        
      </main>
    </>
  )
}
