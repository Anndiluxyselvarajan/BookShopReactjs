import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import MyAlert from './MyAlert';
import BookService from './BookService';

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}
const tableStyle={
    align: 'center',
    border: '8px solid gray',
   }

class AddBook extends Component{
    constructor(props){
        super(props);
        this.state ={
            
            title:'',
            coverPhotoUrl:'',
            author:'',
            isbnNumber:'',
            price:'',
            language:'',
            genre:'',
            message: '',
            show: false
        }
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {
           
            title: this.state.title, 
            coverPhotoURL: this.state.coverPhotoURL, 
            author: this.state.author, 
            isbnNumber: this.state.isbnNumber, 
            price:this.state.price,
            language:this.state.language,
            genre:this.state.genre,
            

        };

        BookService.addBook(book)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Book added successfully.'});
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

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });

    onFileChangeHandler = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
        let reader = new FileReader()
        reader.readAsDataURL(files[i])
        reader.onload = (e) => {
        console.log("ImageUrl",e.target.result)
        elements.push(e.target.result)
        this.setState({coverPhotoURL:elements[0]})
        }
        console.log(elements)
    }
}


    render() {
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Paper  style={tableStyle} style ={{padding : 40}} >

                <Typography variant="h4" style={style}>Add Book</Typography>
                <form style={formContainer} style={tableStyle}  >
                {/* <TextField placeholder="Id" fullWidth margin="normal" name="id" value={this.state.id} onChange={this.onChange}/> */}
                <TextField placeholder="  Title" fullWidth margin="title" name="title" value={this.state.title} onChange={this.onChange}/>
                <TextField placeholder="  coverPhotoURL " fullWidth margin="normal" name="coverPhotoURL" value={this.state.coverPhotoURL} onChange={this.onChange}/>
                <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.coverPhotoURL}/>
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

export default AddBook;