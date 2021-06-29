function operation() {
  var x = document.getElementsByClassName("text");
   var sum = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i].value) {
      sum = sum + parseInt(x[i].value);
    }
  }
  alert(sum);
}
