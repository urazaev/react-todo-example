import React, {Component} from 'react';
import './todo-list.css'


export default class TodoList extends Component {
    render() {
        return (
            <ul className={'todo-list list-group list-group-numbered'}>
                {this.props.items.map(item => (
                    <li className={'list-group-item list-group-item-action'} key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}
