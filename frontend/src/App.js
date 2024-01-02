import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const handleSeachSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
};

const App = () => {
  const [world, setWorld] = useState('');

  return (

    <div className="App">
      <Header title="Images Gallery" />
      <Search world={world} setWorld={setWorld}  handleSubmit={handleSeachSubmit} />
    </div>
  );
};

export default App;
