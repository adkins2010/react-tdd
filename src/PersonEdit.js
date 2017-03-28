import React, { Component } from 'react';

export default class PersonEdit extends Component{

    // constructor(props) {
    //     super(props);
    //     this.formClass = this.formClass.bind(this)
    //     this.disableEdit = this.disableEdit.bind(this)
    // }
    //
    //
    // enableEdit(){
    //     this.props.editMode = true;
    // }
    //
    // get editMode() {
    //     return this.props.editMode ;
    // }
    //
    // disableEdit(){
    //     this.props.editMode = false;
    // }
    //
    // formClass() {
    //     return (this.props.person !== null? "show" : "hide");
    // }
    //
    //
    // get person(){
    //     return this.props.person
    // }

    render(){
        return(
            <form >
                <label >First Name : </label> &nbsp;
                <input name="first-name" defaultValue={this.props.person.firstName}
                       onKeyUp={
                           this.props.updateFirstName
                       }
                /><br/>
                <label >Last Name : </label>&nbsp;
                <input name="last-name" defaultValue={this.props.person.lastName}
                       onKeyUp={
                           this.props.updateLastName
                       }
                /><br/>
                <button onClick={() => {
                    return this.props.submitAction(this.props.person)
                }} type="button"> Submit </button>

                <button type="reset" onClick={() => {
                    return this.props.reverseAction()
                }}> Cancel </button>
            </form>
        );

    }

}