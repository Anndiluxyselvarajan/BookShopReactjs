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
import { Paper } from '@material-ui/core';
// import {connect} from 'react-redux';
// import {deleteBook} from '../../services/index';
import BookService from './BookService';
import MyAlert from './MyAlert';



const style ={
    display: 'flex',
    justifyContent: 'center'
}
const tableStyle={
    align: 'center',
    border: '8px solid darkgray',
    badding:'10px'
    }
class ListBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            show: false,
            message: '' 
            
        }
    }
    
    componentDidMount() {
        BookService.fetchBooks()
            .then((res) => {
                this.setState({books: res.data})
            });
      }

      

    deleteBook = (bookId) => {
        BookService.deleteBook(bookId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'book deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                    books: this.state.books.filter(book => book.id !== bookId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }
    editBook = (id) => {
        this.props.history.push('/admin/edit-books/'+ id);
    }

    addBook = () => {
        this.props.history.push('/admin/add-books');
    }

    render() {
        const {books} = this.state;

        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Paper style={tableStyle} style ={{padding : 40}}>
                <Typography variant="h4" style={style}>Books Details</Typography>
                <Button variant="contained" color="dark" onClick={() => this.addBook()}>
                    Add Books
                </Button>
                <Table style={tableStyle}>
                    <TableHead>
                        <TableRow>
                             
                            
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">CoverPhoto</TableCell>
                            <TableCell align="left">author</TableCell>
                            <TableCell align="left">IsbnNumber</TableCell>
                            <TableCell align="left">Price</TableCell>

                            <TableCell align="left">Language</TableCell>
                            <TableCell align="left">Genre</TableCell>
                            <TableCell align="left">Edit</TableCell>
                        <TableCell align="left">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        books.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Books Available.</TableCell>
                        </TableRow> 
                        :
                        books.map(row => (
                            <TableRow key={row.id}>
                               
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left"><img src={row.coverPhotoURL} alt= "avatar" width="150" height="150" /></TableCell>
                                <TableCell align="left">{row.author}</TableCell>
                                <TableCell align="left">{row.isbnNumber}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left">{row.language}</TableCell>
                                <TableCell align="left">{row.genre}</TableCell>
                                <TableCell align="left" onClick={() => this.editBook(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="left" onClick={() => this.deleteBook(row.id)}><DeleteIcon /></TableCell>
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

export default ListBook;