// import logo from './logo.svg';
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// // import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from './Login';
// import SignUp from './SignUp';
// import Home from './HomePage';
// import Profile from './Profile';
// import UserForm from './UserSignUp';



// function App() {
//   return (
    
    // <Router>
    // <div className="App">
    //   <nav className="navbar navbar-expand-lg navbar-light fixed-top" >
    //     <div className="container">
    //       <Link className="navbar-brand" to={"/sign-in"}></Link>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //         <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
              
    //           <Link className="nav-link" to={"/"}><h3>Books Shop</h3></Link>
    //         </li>
    //         <li className="nav-item">

    //             <Link className="nav-link" to={"/"}>HOME</Link>
    //           </li>
    //           <li className="nav-item text-right">
    //             <Link className="nav-link " to={"/sign-in"}  >LOGIN</Link>
    //           </li>
    //           {/* <li className="nav-item">
    //             <Link className="nav-link text-right" to={"/sign-up"}>SIGNUP</Link>
    //           </li> */}
      //         <li className="nav-item">
      //           <Link className="nav-link text-right" to={"/sign-up"}>SIGNUP</Link>
      //         </li>
              
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      
      //   <div className="auth-wrapper">
      //   <div className="auth-inner">
      //     <Switch>
      //       <Route exact path='/' component={Home} />
      //       <Route path="/sign-in" component={Login} />
      //       {/* <Route path="/sign-up" component={SignUp} /> */}
    //         <Route path="/sign-up" component={UserForm} />
    //         <Route path="/profile" component={Profile} />

    //       </Switch>
    //     </div>
    //   </div>
    // </div>
    // <div>
    
    //   {/* <Profile/> */}
    // </div>
    // </Router>
    
//   );
// }

// export default App;




import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import AuthService from "./services/auth.service";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert'
import Login from "./components/Login";
import Register from "./components/Register";
// import Home from "./components/Home";
import Profile from "./components/Profile";
// import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle } from "@material-ui/icons";
import Footer from "./components/Footer";
import Home1 from "./HomePage"
import AddUserComponent from "./Admin/UserAdd";
import EditUserComponent from "./Admin/UserEdit";
import ListUserComponent from "./Admin/UserList";
import ListBook from "./Admin/BookList";
import AddBook from "./Admin/BookAdd";
import EditBook from "./Admin/BookEdit";
const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: '#1a237e',
    color: '#c5cae9'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "#1a237e"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      value: 0
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
                <IconButton edge="start" style={style.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Button href="/" color='inherit'>
                  <Typography><strong>Books Shop</strong></Typography>
                </Button>
                <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button>
                {showModeratorBoard && (
                  <Button href="/mod" color='inherit'>
                    <strong>Moderator Board</strong>
                  </Button>
                )}
                
                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Admin Board</strong>
                  </Button>
                )}
                {/* {currentUser && (
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )} */}
              </Paper>
              
              {currentUser ? (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9'}} elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home1} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              {/* <Route exact path="/user" component={BoardUser} /> */}
              <Route exact path="/mod" component={BoardModerator} />
              <Route   path="/admin/add-users" component={AddUserComponent} />
              {/* <Route  path="/admin/edit-users/:id" component={EditUserComponent} /> */}
              <Route  path="/admin/users" component={ListUserComponent} />
              <Route   path="/admin/books" component={ListBook} />
              <Route  path="/admin/add-books" component={AddBook} />
              <Route  path="/admin/edit-books/:id" component={EditBook} />
              <Route exact path="/admin" component={BoardAdmin} />
              <Route path="/admin/edit-users/:id" component={EditUserComponent} />


            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;