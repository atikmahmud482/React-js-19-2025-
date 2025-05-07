import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import WorkSection from "./components/WorkSection";
import WorksSection from "./components/WorksSection";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <WorksSection />
      <ServiceSection />
      <WorkSection />
    </div>
  );
}

export default App;
