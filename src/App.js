import "./App.css";
import Header from "./components/Header";
import FetchData from "./components/FetchData";
import SAC from "./components/SAC";
import ListData from "./components/ListData";
import ViewData from "./components/ViewData";
import DelData from "./components/DelData";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <FetchData />
      <br />
      <ListData />
      <DelData />
      <SAC />
      <ViewData />
      <SAC />
      <Form />
    </div>
  );
}

export default App;
