import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";

const Crud = () => {
  const [notes, setNotes] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  const requestGet = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:7777/notes");
    request.responseType = "json";
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log(request.response);
        request.response.forEach(el => el)
      }
    };
  }

  const componentDidMount = () => {
    console.log("start");
    requestGet();
  };

  useEffect(componentDidMount, []);

  return <Form submit={submit} />;
};

function App() {
  return (
    <div className="App">
      <Crud />
    </div>
  );
}

export default App;
