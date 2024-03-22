import NavigationBar from "./Components/NavigationBar";
import PageFooter from "./Components/Footer";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#28282b] h-lvh w-full object-cover -z-10" />
      <NavigationBar />
      <MainContent />
      <PageFooter />
    </section>
  );
}

export default App;
