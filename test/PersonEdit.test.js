"use strict";
import React from 'react';
import {shallow} from 'enzyme';
import PersonEdit from '../src/PersonEdit';

describe('Person Edit ', () => {

    it('has person ', () => {
        const person = {firstName: 'Alan', lastName: 'Turing'};
        const div = document.createElement('div');
        const personEdit = shallow(<PersonEdit person={person}/>, div);
        expect(personEdit).toBeDefined();
    })

    it('is in edit mode', ()=>{
        const person = {firstName: 'Alan', lastName: 'Turing'};
        const div = document.createElement('div');
        const personEdit = shallow(<PersonEdit person={person}/>, div);
        const actual = personEdit.find('form');
        expect(actual).toHaveLength(1)
    });
});
