function operation() {
  var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {

      // Response
      var response = this.responseText; 
      response = JSON.parse(response)
      for(let i = 0 ; i < response.length; i++){
        console.log(response[i].title);
    }
   }
};
xhttp.send();
}
