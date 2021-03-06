import "./App.css";
import ImageList from "./components/ImageList";
import MainHeading from "./components/MainHeading";
import MainText from "./components/MainText";
import SubTitle from "./components/SubTitle";
import TravelList from './components/TravelList';

function App() {
  return (
    <div className='App'>
        <div className='container'>
        <MainHeading />
        <SubTitle />
        <MainText />
        <ImageList />
        </div>
        <TravelList />
      </div>
  );
}

export default App;
