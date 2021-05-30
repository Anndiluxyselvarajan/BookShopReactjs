import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import BookService from './BookService';
import MyAlert from './MyAlert';

const style ={
    display: 'flex',
    justifyContent: 'center'
}
const tableStyle={
    align: 'center',
    border: '8px solid black',
    badding:'10px'
    }

class EditBook extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title:'',
            coverPhotoUrl:'',
            author:'',
            isbnNumber:'',
            price:'',
            language:'',
            genre:'',

            message: '',
            show: false,
        }
    }

    componentDidMount() {
        console.log("hiiiiii");


        const bookId = this.props.match.params.id;
        console.log(bookId);
            
        BookService.fetchBookById(bookId)
        
            .then((res) => {
                let book = res.data;
                this.setState({
                    id: book.id,
                    title:book.title,
                    coverPhotoURL:book.coverPhotoURL,
                    author:book.author,
                    isbnNumber:book.isbnNumber,
                    price:book.price,
                    language:book.language,
                    genre:book.genre
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveBook = (e) => {
        e.preventDefault();
        let book = {
            id: this.state.id,
           title:this.state.title,
            coverPhotoURL: this.state.coverPhotoURL, 
            author: this.state.author, 
            isbnNumber: this.state.isbnNumber, 
            price:this.state.price,
            language:this.state.language,
            genre:this.state.genre,
};
        BookService.editBook(book)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Book Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.bookList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    bookList = () => {
        return this.props.history.push('/admin/books');
    }

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Paper style={tableStyle} style ={{padding : 40}}>

                <Typography variant="h4" style={style}>Edit Admin-Books</Typography>
                <form  style={tableStyle}>
                <TextField placeholder="  Title" fullWidth margin="title" name="title" value={this.state.title} onChange={this.onChange}/>
                <TextField placeholder="  coverPhotoURL " fullWidth margin="normal" name="coverPhotoURL" value={this.state.coverPhotoURL} onChange={this.onChange}/>
                <TextField placeholder="  Author" fullWidth margin="normal" name="author" value={this.state.author} onChange={this.onChange}/>
                <TextField placeholder="  IsbnNumber" fullWidth margin="normal" name="isbnNumber" value={this.state.isbnNumber} onChange={this.onChange}/>

                <TextField placeholder="  Price" fullWidth margin="normal" name="price" value={this.state.price} onChange={this.onChange}/>

                <TextField placeholder="  Language " fullWidth margin="normal" name="language" value={this.state.language} onChange={this.onChange}/>
                <TextField placeholder="  Genre" fullWidth margin="normal" name="genre" value={this.state.genre} onChange={this.onChange}/>
                        <Button variant="contained" color="primary" onClick={this.saveBook}>Save</Button>
                </form>
                </Paper>
            </div>
        );
    }
}

export default EditBook;