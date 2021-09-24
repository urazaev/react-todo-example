import React, {Component} from 'react';
import './todo-list.css'


export default class TodoList extends Component {
    render() {
        return (
            <ul className={'todo-list list-group list-group-numbered'}>
                    <li className={'list-group-item list-group-item-action'} key='123'>Text</li>
            </ul>
        );
    }
}
