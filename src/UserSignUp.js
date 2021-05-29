


// import React, { Component } from "react";

// const regExp = RegExp(
//     /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// )
// const formValid = ({ isError, ...rest }) => {
//     let isValid = false;

//     Object.values(isError).forEach(val => {
//         if (val.length > 0) {
//             isValid = false
//         } else {
//             isValid = true
//         }
//     });

//     Object.values(rest).forEach(val => {
//         if (val === null) {
//             isValid = false
//         } else {
//             isValid = true
//         }
//     });

//     return isValid;
// };
// export default class UserForm extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             username: '',
//             email: '',
//             password: '',
//             isError: {
//                 username: '',
//                 email: '',
//                 password: ''
//             }
//         }
//     }


//     onSubmit = e => {
//         e.preventDefault();

//         if (formValid(this.state)) {
//             console.log(this.state)
//         } else {
//             console.log("Form is invalid!");
//         }
//     };


//     formValChange = e => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         let isError = { ...this.state.isError };

//         switch (name) {
//             case "username":
//                 isError.username =
//                     value.length < 4 ? "Atleast 4 characaters required" : "";
//                 break;
//             case "email":
//                 isError.email = regExp.test(value)
//                     ? ""
//                     : "Email address is invalid";
//                 break;
//             case "password":
//                 isError.password =
//                     value.length < 6 ? "Atleast 6 characaters required" : "";
//                 break;
//             default:
//                 break;
//         }

//         this.setState({
//             isError,
//             [name]: value
//         })
//     };

//     render() {
//         const { isError } = this.state;

//         return (
//             <div>
//             <form onSubmit={this.onSubmit} noValidate>
//                  <h3>Register Account at Books Shop</h3>
//                 <div className="form-group">
//                     <label>User Name</label>
//                     <input
//                         type="text"
//                         className={isError.username.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="username"
//                         // value={this.state.username}
//                         onChange={this.formValChange}
//                     />
//                     {isError.username.length > 0 && (
//                         <span className="invalid-feedback">{isError.username}</span>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="email"
//                         // value={this.state.email}
//                         onChange={this.formValChange}
//                     />
//                      <p> Please Enter Email</p>
//                     {isError.email.length > 0 && (
//                         <span className="invalid-feedback">{isError.email}</span>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="password"
//                         // value={this.state.password}
//                         onChange={this.formValChange}
//                     />
//                     {isError.password.length > 0 && (
//                         <span className="invalid-feedback">{isError.password}</span>
//                     )}
//                 </div>
// <br/>
//                 <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
//             </form>
//             </div>
//         );
//     }
// }