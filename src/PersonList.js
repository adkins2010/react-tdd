import React, { Component } from 'react';

export default class PersonList extends Component{

    get people(){

        return this.props.people.map( (person, i) => {
            return (
            <li key={i}>
                {person.firstName} {person.lastName}
                &nbsp; <a href="#" onClick={() => {

                    return (this.props.onEdit(person, i))}}>edit</a>
            </li>)
        })
    }

    render(){
        return(
            <ul>
                {this.people}
            </ul>
        );
    }
}