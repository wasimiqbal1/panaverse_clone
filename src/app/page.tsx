import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTrack from "@/components/widgets/SpecializedTrack";

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
      </main>
    </>
  )
}
