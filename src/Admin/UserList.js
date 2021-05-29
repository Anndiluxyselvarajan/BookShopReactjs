import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'
import UserSService from './UserService';
import { Paper } from '@material-ui/core';

const style ={
    display: 'flex',
    justifyContent: 'center'
}
const tableStyle={
    align: 'center',
    border: '8px solid gray',
   }
class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            show: false,
            message: ''
        }
    }
    componentDidMount() {
        UserSService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser = (userId) => {
        console.log(userId);
        UserSService.deleteUser(userId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'User deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    users: this.state.users.filter(user => user.id !== userId)
                });
            } else {
                this.setState({"show":false});
            }
        })
 }

 editUser = (id) => {
     this.props.history.push('/admin/edit-users/'+ id);
 }

 addUser = () => {
     this.props.history.push('/admin/add-users');
 }

 render() {
     const {users} = this.state;
     return (
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
            </div>
            <Paper style={tableStyle} style ={{padding : 40}}>

            <Typography variant="h4" style={style}>User Details</Typography>
            <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                Add User
            </Button>

            <Table style={tableStyle}>
                <TableHead>
                    <TableRow>
                        {/* <TableCell align="right">Id</TableCell> */}
                        <TableCell align="left">UserName</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Edit</TableCell>
                        <TableCell align="left">Delete</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    users.length === 0 ?
                    <TableRow>
                    <TableCell colSpan="6" align="center">No Users Available.</TableCell>
                </TableRow> 
                :
                users.map(row => (
                    <TableRow key={row.id}>
                        {/* <TableCell align="right">
                            {row.id}
                        </TableCell> */}
                        <TableCell align="left">{row.username}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                        <TableCell align="left" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>
                    </TableRow>
                ))
            }
            </TableBody>
        </Table>
        </Paper>

    </div>
);
}

}

export default ListUserComponent;
