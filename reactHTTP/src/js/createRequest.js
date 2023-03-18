export const createRequest = (options, target, form) => {
  const request = new XMLHttpRequest();
  request.responseType = "json";
  let url = "http://localhost:7777/notes";
  let formData = new FormData();
  // request.method = options.method;

  if (options === "POST") {
    const form = document.getElementById('form');
    formData = new FormData(form)
    formData.append('item', target);
    console.log(formData);
  }

  request.open(options, url);
  request.send(formData);
  request.onload = function () {
    // options.callback(null, request.response);
    console.log(request.response)
  };

  request.onerror = function (error) {
    options.callback(request.error, null);
  };
};
