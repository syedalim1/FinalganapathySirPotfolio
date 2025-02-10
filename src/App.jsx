import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Awards from "./components/Awards";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import ConferencePresentations from "./components/ConferencePresentations";
import AreaOfInterest from "./components/AreaOfInterest";
import RolesAndResponsibilities from "./components/RolesAndResponsibilities";
import Home from "./components/Home";
import CoreValues from "./components/CoreValues";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/experience" element={<Experience />} />
        <Route
          path="/conferencePresentations"
          element={<ConferencePresentations />}
        />
        <Route path="/areaOfInterest" element={<AreaOfInterest />} />
        <Route
          path="/rolesAndResponsibilities"
          element={<RolesAndResponsibilities />}
        />
        <Route path="/publications" element={<Publications />} />
        <Route path="/corevalues" element={<CoreValues />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
