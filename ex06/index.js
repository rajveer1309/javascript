function print() {
  var str = parseInt(document.getElementById("demo").value);

  if (str > 10) {
    alert("error");
  } else {
    for (var i = 0; i < str; i++) {
      alert("hello");
    }
  }
}
