import React from 'react';
import './FilmForm.css'

const FilmForm = (props) => 
    <form className = 'FormFilm' onSubmit = {props.submitNewFilm} >
        <fieldset>
            <h1>What's your favorite film ?</h1> 
            <div className="form-data">
                <label htmlFor="name">Film name</label>
                <input
                    onChange = {props.handleFormChange}
                    id = 'name'
                    name = 'name'
                    type ='text'
                    value ={props.name}
                    placeholder = 'Paris, Texas'
                />
            </div>
            <div className="form-data">
                <label htmlFor="poster">Poster url</label>
                <br />
                <input
                    onChange = {props.handleFormChange}
                    id = 'poster'
                    name = 'poster'
                    type = 'text'
                    value = {props.poster} 
                    placeholder = 'http://.../paris-texas-poster.jpeg' 
                />
            </div>

            <div className="form-data">
                <label htmlFor="comment">
                    Comment
                </label>
                <textarea
                    name = 'comment'
                    onChange = {props.handleFormChange}
                    type ='text'
                    value ={props.comment}
                    placeholder = 'I love this film because ...'
                />
            </div>

            <div className="form-data" >
                <input type = 'submit' value = 'Submit' />
            </div>
            
        </fieldset>
    </form>
;

export default FilmForm ;