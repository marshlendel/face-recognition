import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageForm from "./components/ImageForm/ImageForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#ffffff" type="cobweb" num={100} bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageForm />
    </div>
  );
}

export default App;
