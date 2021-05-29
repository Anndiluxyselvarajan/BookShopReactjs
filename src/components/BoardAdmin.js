import React, { Component } from "react";

import UserService from "../services/user.service";
// import Container from "./Container";
import "../App.css";
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// const root= {
//   flexGrow: 1 
// },

//   const paperex= {
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// },

// const tableStyle={
//   align: 'center',
//   border: '8px solid gray',
//  }


export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      // <Container content={this.state.content}/>
    // <div style={root} style ={{padding : 40}}>
          <div  style ={{padding : 40}}>
<Paper>
        {/* <Paper  style={tableStyle}  > */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper style={paperex} style = {{backgroundColor:"darkgray"}}> */}
          <Paper style = {{backgroundColor:"#61dafb"}}>

              <h1><center>Welcome to the  Books Admin Board</center></h1>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper style={paperex} style = {{backgroundColor:"#dde4e6"}}> */}
          <Paper  style = {{backgroundColor:"#61dafb"}}>

          <h3><center>Books Details</center></h3>
                                    <br/><center>
                                    <Button  color="primary" align = "right" href = "/admin/add-books">Add Book</Button>
                                    <Button  color="primary" align = "left" href = "/admin/books">List Book</Button>
                                    </center>
              </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper  style = {{backgroundColor:"#61dafb"}}>

          {/* <Paper style={paperex} style = {{backgroundColor:"#dde4e6"}}>                                     */}
          <h3><center>Users Details</center></h3>
                                    <br/>
                                    <center>
                                    <Button  color="primary" align = "right" href = "/admin/add-users">Add User</Button>
                                    <Button  color="primary" align = "left" href = "/admin/users">List user</Button>
                                    </center>
        </Paper>
        </Grid>
       
         </Grid>
      </Paper>
    </div>
 
    );
  }
}
