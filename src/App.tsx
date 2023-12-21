import Benefits from "./components/Benefits";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OurClasses from "./components/OurClasses";
import PageContextProvider from "./context/PageContextProvider";

function App() {
  return (
    <div className="app bg-gray-20">
      <PageContextProvider>
        <Navbar />
        <Home />
        <Benefits />
        <OurClasses />
        <ContactUs />
        <Footer />
      </PageContextProvider>
    </div>
  );
}

export default App;
