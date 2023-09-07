import Header from "./components/Header.jsx";
import Home from "./components/Home";
import Couple from "./components/Couple";
import Story from "./components/Story";
import Ceremony from "./components/Ceremony.jsx";
import TimeLine from "./components/TimeLine.jsx";
import Menu from "./components/Menu";
import Events from "./components/Events.jsx";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Couple/>
      <Story/>
      <Ceremony/>
      <TimeLine/>
      <Menu/>
      <Events/>
      <RSVP/>
      <Footer/>
    </div>
  );
}

export default App;
