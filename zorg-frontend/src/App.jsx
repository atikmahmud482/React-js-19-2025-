import FooterSection from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InsightSection from "./components/InsightSection";
import NavBar from "./components/Navbar";
import ServiceSection from "./components/ServiceSection";
import WorkSection from "./components/WorkSection";
import WorksSection from "./components/WorksSection";

function App() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Header /> */} //don't using this i face some issue thats why i am
      using navBar.
      <NavBar />
      <HeroSection />
      <WorksSection />
      <ServiceSection />
      <WorkSection />
      <InsightSection />
      <FooterSection />
    </div>
  );
}

export default App;
