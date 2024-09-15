import AboutChurch from "./components/LandingPage/AboutChurch";
import Devotional from "./components/LandingPage/Devotional";
import HeroSection from "./components/LandingPage/HeroSection";
import MeetOurSeniorPastor from "./components/LandingPage/MeetOurSeniorPastor";
import UpcomingProgram from "./components/LandingPage/UpcomingProgram";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MeetOurSeniorPastor />
      <AboutChurch />
      <Devotional />
      <UpcomingProgram />
    </main>
  );
}
