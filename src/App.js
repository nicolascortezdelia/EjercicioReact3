import { useState } from "react";
import Titulo from "./components/Titulo"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [stateChange, setStateChange] = useState("(from changed state)")

  return (
    <Titulo  hellomyfriend = "hello my friend!">
    </Titulo>
  );
}

export default App;
