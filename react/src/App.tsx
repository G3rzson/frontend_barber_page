import Barbers from "./components/Barbers";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Opening from "./components/Opening";
import ScrollUpBtn from "./components/ScrollUpBtn";
import Services from "./components/Services";
import Works from "./components/Works";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Barbers />
      <Works />
      <Opening />
      <Contacts />
      <Info />
      <ScrollUpBtn />
      <Footer />
    </>
  );
}
