import React, { Component } from 'react';
import './App.css';
import PersonList from "./PersonList";
import PersonEdit from "./PersonEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
          {firstName: "Alan", lastName:"Turing"},
          {firstName: "Alanzo", lastName:"Church"},
          {firstName: "Grace", lastName:"Hopper"}
      ],
      currIndex: -1
    };
    this.state.editing = null;
    this.onEdit = this.onEdit.bind(this);
    this.displayMode = this.displayMode.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  onEdit(person, index) {
      // person.enableEdit();
      this.setState( {editing : person,currIndex:index});

  }


    updateFirstName(event){
        let person = this.state.editing;
        person.firstName = event.target.value;
        this.setState( {editing: person})
    }

    updateLastName(event){
        let person = this.state.editing;
        person.lastName = event.target.value;
        this.setState( {editing: person})
    }

    updatePerson(person){
      let people = this.state.people;
      let index = this.state.currIndex;
      people[index] = person;

      this.setState( {people: people, editing: null})
    }

    cancelUpdate(){
      console.log(this.state.people)
      let people = this.state.people;
      let index = this.state.currIndex;
      console.log(people[index])
      let person = people[index];
      let edit = this.state.editing;
      edit.firstName = person.firstName;
      edit.lastName = person.lastName;
      this.setState( {editing : edit})
    }



  displayMode() {
      if(this.state.editing === null) {
          return (<PersonList people={this.state.people} onEdit={this.onEdit}/>)
      } else {
          return (
              <PersonEdit submitAction={this.updatePerson}
                          reverseAction={this.cancelUpdate}
                          editMode={false} person={this.state.editing}
                          updateFirstName={this.updateFirstName}
                          updateLastName={this.updateLastName}/>
          )
      }
  }

  render() {
    return (
      <div className="App">
          {this.displayMode()}

      </div>
    );
  }
}

export default App;
