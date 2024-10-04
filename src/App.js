import "./App.css";
import Controller from "./Components/Controller";
import Header from "./Components/Header";
import TrackList from "./Components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
