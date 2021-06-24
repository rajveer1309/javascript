function validateAge() {
  var age = parseInt(document.getElementById("number").value);
  if (age > 18 && age < 56) {
    alert("Success");
  } else {
    alert("Age fail");
  }
}
