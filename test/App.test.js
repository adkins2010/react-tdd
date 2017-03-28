import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';
import PersonList from '../src/PersonList';
import PersonEdit from '../src/PersonEdit';

describe("App", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);

        expect(app.state().people).toHaveLength(3);
    });

    it("passes people the state", () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);

        const personList = app.find(PersonList.name);
        expect(personList.props().people).toHaveLength(3);
    });

    it('has editable people', () => {
        const div = document.createElement('div');
        const app = shallow(<App />, div);
        app.node._self.onEdit(app.state().people[0],0);
        const personEdit = app.find(PersonEdit.name);

        expect(app.state().editing).toBe(app.state().people[0]);
        expect(personEdit.props().person).toBe(app.state().people[0]);

    })
    // it('is in list mode', ()=>{
    //     const div = document.createElement('div');
    //     const app = shallow(<App />, div);
    //     // app.node._self.onEdit(app.state().people[0]);
    //     // const personEdit = app.find(PersonEdit.name);
    //     // console.log(app.node.props.children);
    //     // const actual = app.find('li');
    //     // expect(actual).toHaveLength(3)
    // });
    // it('is in edit mode', ()=>{
    //     const div = document.createElement('div');
    //     const app = shallow(<App />, div);
    //     // console.log(app.node.props);
    //     app.node._self.onEdit(app.state().people[0]);
    //     // const personEdit = app.find(PersonEdit.name);
    //     const actual = app.find('form');
    //     // expect(actual).toHaveLength(1)
    // });
});