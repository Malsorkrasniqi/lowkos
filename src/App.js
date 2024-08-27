import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import Hero from './Components/hero';
import Services from './Components/services.js';
import AboutUs from './Components/aboutUs';
import Years from './Components/years';
import OurPracticeArea from './Components/OurPracticeArea';
import AngelofVictory from './Components/AngelofVictory';
import TeamSection from './Components/TeamSection';
import Testimonial from './Components/Testimonial.js';
import GridLayout from './Components/GridLayout.js';
import Footer from './Components/footer.js';


function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <AboutUs />
      <Years />
      <OurPracticeArea />
      <AngelofVictory />
      <TeamSection />
      <Testimonial />
      <GridLayout />
      <Footer />
    </>
  );
}

export default App;
