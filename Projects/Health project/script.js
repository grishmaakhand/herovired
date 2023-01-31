function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
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
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 20) {
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

//API code
const storeApiUrl = "./data.json";

const apiCreate = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  show(data);
};

apiCreate(storeApiUrl);

// const showOnHtml = () => {
//   for (let i = 0; i < data.length; i++) {}
// };
function show(data) {
  let tab = `<tr>
		<th>name</th>
		<th>location</th>
		<th>experience</th>
		<th>organizations</th>
		</tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr>
	<td>${r.name} </td>
	<td>${r.location}</td>
	<td>${r.experience}</td>
	<td>${r.organizations}</td>		
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("phone").innerHTML = tab;
}
