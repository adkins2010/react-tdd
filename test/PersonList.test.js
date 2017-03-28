"use strict";
import React from 'react';
import {shallow} from 'enzyme';
import PersonList from '../src/PersonList';
import sinon from 'sinon';

describe('PersonList', () => {
    it('should render people', () =>{
        const expected =[
            {firstName: 'Alan', lastName: 'Turing'},
            {firstName: 'Alanzo', lastName: 'Church'},
            {firstName: 'Grace', lastName: 'Hopper'}
        ]
        const div = document.createElement('div');
        const personList = shallow(<PersonList people={expected}/>, div);
        const actual = personList.find('li');
        expect(actual).toHaveLength(3);

    });

    it("has clickable people", () => {
        const people =[
            {firstName: 'Alan', lastName: 'Turing'}
            /*,
            {firstName: 'Alanzo', lastName: 'Church'},
            {firstName: 'Grace', lastName: 'Hopper'}
            */
        ];
        const div = document.createElement('div');
        const onEdit = sinon.stub();
        const personList = shallow(<PersonList people={people} onEdit={onEdit}/>, div);

        expect(personList.find('a')).toHaveLength(1);
        personList.find('a').simulate('click');
        expect(onEdit.calledOnce).toBe(true)
    });

});
