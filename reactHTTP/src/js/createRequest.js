export const requestDelete = (id) => {
  let request = new XMLHttpRequest();
  request.open('DELETE', `http://localhost:7777/notes/${id}`);
  request.send();
  request.onreadystatechange = function () {
    if (request.readyState === request.DONE) {
      requestGet()
    }
  };
}

export const requestPost = (form, text) => {
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

export const requestGet = () => {
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