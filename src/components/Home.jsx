import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Awards from "./Awards";
import Publications from "./Publications";
import ConferencePresentations from "./ConferencePresentations";
import AreaOfInterest from "./AreaOfInterest";
import PersonalProfile from "./PersonalProfile";
import RolesAndResponsibilities from "./RolesAndResponsibilities";
import Header from "./Header";
import CoreValues from "./CoreValues";

function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
    
      <About />
      <PersonalProfile />
      <CoreValues/>
      <Education />
      <Awards />
      <Experience />
      <ConferencePresentations />
      <AreaOfInterest />
      <RolesAndResponsibilities />
      <Publications />
    </div>
  );
}

export default Home;
