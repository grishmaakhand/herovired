function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var doctorName = document.getElementById("doctorName").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(date)) {
    text = "Please Enter valid Date";
    error_message.innerHTML = text;
    return false;
  }
  if (doctorName.length <= 10) {
    text = "Please Enter Doctor Name";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

//API code for doctor list
//take 2
