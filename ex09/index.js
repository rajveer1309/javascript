function operation() {
  var first_number = parseInt(document.getElementById("text1").value);
  var second_number = parseInt(document.getElementById("text2").value);
  var text = document.getElementById("text3").value;
  if (text == "add") {
    alert(first_number + second_number);
  } else if (text == "sub") {
    alert(first_number - second_number);
  }
}

function practice(){
	for (let i = 0; i < 10; i++) {
		console.log(i+2);
		
	}
}