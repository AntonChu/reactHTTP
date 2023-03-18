import { useEffect, useState } from "react";
import "./App.css";
import { RenderNote } from "./components/RenderNote";
import { createRequest } from "./js/createRequest";

const Crud = () => {
  const [notes, setNotes] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const text = event.target[0].value;
    const form = document.getElementById('form');
    requestPost(text)
    requestGet();
  };
 
  const requestDelete = (id) => {
    let formData = new FormData()
    let request = new XMLHttpRequest();
    request.open('DELETE', `http://localhost:7777/notes/${id}`);
    request.responseType = "json";
    request.send(formData);
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log('deleted');
      }
    };
  }

  const requestPost = (text) => {
    const form = document.getElementById('form');
    let formData = new FormData(form);
    formData.append('text', text);
    let request = new XMLHttpRequest();
    request.open('POST', "http://localhost:7777/notes");
    request.send(formData);
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log(request.response);
        setNotes(request.response);
      }
    }
  }

  const requestGet = () => {
    let formData = new FormData()
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:7777/notes");
    request.responseType = "json";
    request.send(formData);
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log(request.response);
        setNotes(request.response);
      }
    };
  }

  const componentDidMount = () => {
    requestGet();
  };

  useEffect(componentDidMount, []);

  return (
    <div className="wrapper">
      <RenderNote notes={notes} requestDelete={requestDelete} />
      <form id="form" onSubmit={submit} className="form">
        <label>
          <p>New Note</p>
          <textarea className="textarea"></textarea>
        </label>
        <button className="submit-button">OK</button>
      </form>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Crud />
    </div>
  );
}

export default App;
