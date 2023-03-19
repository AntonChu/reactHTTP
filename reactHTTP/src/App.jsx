import { useEffect, useState } from "react";
import "./App.css";
import { RenderNote } from "./components/RenderNote";
import { RenderRenew } from "./components/RenderRenew";
import { requestDelete, requestPost } from "./js/createRequest";

const Crud = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  const submit = (event) => {
    event.preventDefault();
    const text = event.target[0].value;
    const form = document.getElementById('form');
    requestPost(form, text)
    event.target[0].value = ''
  };
 
  const requestDelete = (id) => {
    let request = new XMLHttpRequest();
    request.open('DELETE', `http://localhost:7777/notes/${id}`);
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet()
      }
    };
  }

  const requestPost = (form, text) => {
    let formData = new FormData(form);
    console.log(formData);
    console.log(text)
    formData.append("text", text);
    console.log(formData.has('text'));
    let request = new XMLHttpRequest();
    request.open('POST', "http://localhost:7777/notes");
    request.send(formData);
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet()
      }
    }
  }

  const requestGet = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:7777/notes");
    request.responseType = "json";
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log(`GET ${request.response}`);
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
      <RenderRenew requestGet={requestGet} />
      <RenderNote notes={notes} requestDelete={requestDelete} requestGet={requestGet}/>
      <form id="form" onSubmit={submit} className="form">
        <label>
          <p>New Note</p>
          <input className="textarea"></input>
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
