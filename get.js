function load() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("etorma").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", " https://jsonplaceholder.typicode.com/todos ", true);
  xhttp.send();
}