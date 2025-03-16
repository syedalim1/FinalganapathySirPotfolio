import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Awards from "./Awards";
import Publications from "./Publications";
import ConferencePresentations from "./ConferencePresentations";
import AreaOfInterest from "./AreaOfInterest";
import RolesAndResponsibilities from "./RolesAndResponsibilities";
import CoreValues from "./CoreValues";

function Home() {
  return (
    <div className=" ">
    
      <About />
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
