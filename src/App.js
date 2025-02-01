import './App.css';
import Lander from './acrements/Lander';
import Navbar from './acrements/Navbar';
import AboutUs from './acrements/AboutUs';
import "./index.css";
import ThirdSec from './acrements/ThirdSec';
import VisionMission from './acrements/VisionMission';
import WhyUs from './acrements/WhyUs';
import GetInTouch from './acrements/GetInTouch';
import ContactUs from './acrements/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Lander/>
      <AboutUs/>
      <ThirdSec/>
      <VisionMission/>
      <WhyUs/>
      <GetInTouch/>
      <ContactUs/>
    </div>
  );
}

export default App;
