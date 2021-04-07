import "./App.css";
import TopBar from "./TopBar";
import { ReactComponent as Logo } from "./logo.svg";
function App() {
  return (
    <div className="App">
      {/* <TopBar /> */}
      <Logo />
      <header className="App-header"></header>
      <header className="App-header">Some content about Dani</header>
    </div>
  );
}

export default App;
