import React, { Component } from 'react';
import './App.css';
import FilmForm from './FilmForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                poster: '',
                comment: ''
          }
          this.submitNewFilm = this.submitNewFilm.bind(this);
          this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    submitNewFilm(e) {
        const config = {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(this.state),
        };
        const url = "http://92.175.11.66:3001/api/quests/movies/";

        fetch(url, config)
        .then(result => result.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(`Film ajouté ${data} !`);
            }
        })
        .catch(e => {
        console.error(e);
        alert('Erreur lors de l\'envoi du film');
        });

        e.preventDefault();
    }

    render() { 
        return ( 
            <div className="App">
                <FilmForm name = {this.state.name} comment = {this.state.comment} poster = {this.state.poster}handleFormChange = {this.handleFormChange} submitNewFilm = {this.submitNewFilm} />
            </div>
        )
    }
}

export default App;
