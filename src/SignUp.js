// import React, { Component } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// export default class SignUp extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           username: "",
//           email: "",
//           password: "",
//           successful: false,
//           message: ""
//         };
//       }
//       onChangeUsername = (e) => {
//         this.setState({
//           username: e.target.value
//         });
//       }
    
//       onChangeEmail = (e) => {
//         this.setState({
//           email: e.target.value
//         });
//       }
//       onChangePassword = (e) => {
//         this.setState({
//           password: e.target.value
//         });
//       }
    

//     render() {
//         return (
//             <form>
//                 <h3>Register Account at Books Shop</h3>

                

//                 <div className="form-group">
                  
//                     <label>Username </label>
//                     <input type="text" className="form-control" placeholder="User name"  value={this.state.username}
//                     onChange={this.onChangeUsername}/>
//                     <p> Please Enter Username</p>
//                 </div>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" value={this.state.email}
//                     onChange={this.onChangeEmail} />
//                     <p> Please Enter Email</p>
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" value={this.state.password}
//                             onChange={this.onChangePassword}/> 
//                 </div>
// <br/>
//                 <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="/sign-in"> Login?</a>
//                 </p>
//             </form>
//         );
//     }
// }