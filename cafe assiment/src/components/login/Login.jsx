////////10 sep code 1 for login//////////
// export default function Login(props) {
//   return (
//     <div>
//       <h1>Login page</h1>
//     </div>
//   );
// }
/////////11 sep code 1 for login//////////

// export default function Login(props) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event.target.username.value);
//   }
//   return (
//     <div>
//       <h1>Login Form</h1>
//       <form onSubmit={handleSubmit}>
//         UserName: <input type="text" name="username" id="username" />
//         <br />
//         Password: <input type="password" name="password" id="password" />
//         <br />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login(props) {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    let user = {
      userName: event.target.username.value,
      password: event.target.password.value,
    };

    let url = "http://localhost:3200/login";
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    };

    let response = await fetch(url, options);
    let responseData = await response.json();
    if (responseData.flag == true) {
      navigate("/cafe");
    } else {
      alert(responseData.msg);
    }
  }
  return (
    <div className="main-pg">
      <h1 className="heading">Login Form</h1>

      <form onSubmit={handleSubmit}>
        <h1 className="formstyle"> UserName: </h1>
        <div className="formstyle">
          <input type="text" name="username" id="username" />
        </div>

        <h1 className="formstyle">Password:</h1>
        <div className="formstyle">
          <input type="password" name="password" id="password" />
        </div>

        <div className="btncenter">
          <input className="btn" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
