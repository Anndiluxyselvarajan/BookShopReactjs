// import React, { Component } from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// export default class Login extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           username: "",
//           password: "",
//           loading: false,
//           message: ""
//         };
//       }
//       onChangeUsername = (e) => {
//         this.setState({
//           username: e.target.value
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
//                 <h3>Login to Bookshop</h3>

//                 <div className="form-group">
//                     <label>User Name</label>
//                     <input type="text" className="form-control" placeholder=" UserName" value={this.state.username}
//                             onChange={this.onChangeUsername} />
//                 </div>
//                 <p> Please Enter Username</p>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder=" Enter password"  value={this.state.password}
//                             onChange={this.onChangePassword}/>
//                 </div>
//                 <p> Please Enter Password</p>

//                 <button type="submit" className="btn btn-primary btn-block">Submit</button>
//                 {/* <p className="forgot-password text-right">
//                     <a href="#">password?</a>
//                 </p> */}
//             </form>
//         );
//     }
// }