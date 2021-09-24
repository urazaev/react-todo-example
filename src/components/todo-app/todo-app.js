import React, {Component} from 'react';

import TodoList from '../todo-list/todo-list';

import './todo-app.css'

export default class TodoApp extends Component {

    state = {
        items: [],
        text: ''
    };

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit = (e) => {

        e.preventDefault();

        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: [...state.items, newItem],
            // items: state.items.concat(newItem),

            text: ''
        }));
    }

    render() {
        return (
            <div className={'todo-app'}>
                <h1 className={'h3 mb-3 fw-normal'}>TODO</h1>

                <TodoList items={this.state.items}/>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-floating">

                        <input
                            type="text"
                            className="form-control todo-list__input"
                            placeholder=" What needs to be done?"
                            id="new-todo"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <label htmlFor="floatingInput"> What needs to be done?</label>
                    </div>


                        <button className={'w-100 btn btn-lg btn-primary'}>
                            Add #{this.state.items.length + 1}
                        </button>
                </form>
            </div>
        );
    }

}