import React, {Component} from 'react';

import TodoApp from '../todo-app/'

import './app.css';

export default class App extends Component {

    render() {
        return (
            <div className='app'>
               <TodoApp/>
            </div>
        );
    }
}

