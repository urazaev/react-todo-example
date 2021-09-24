import React, {Component} from 'react';

import TodoList from '../todo-list/todo-list';

import './todo-app.css'

export default class TodoApp extends Component {

    //  TODO: should use state for current input txt and an array for todos

    handleChange = (e) => {
        // TODO: save data
    };

    handleSubmit = (e) => {

        // TODO: prevent default behaviour

        // TODO: need to check that txt for new entry is not empty

        // TODO: need to create a new object entry
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        // TODO: need to update data and reset txt value
    }

    render() {
        return (
            <div className={'todo-app'}>
                <h1 className={'h3 mb-3 fw-normal'}>TODO</h1>

                {/* should render list */}

                <form onSubmit={this.handleSubmit}>
                    <div className="form-floating">

                        <input
                            type="text"
                            className="form-control todo-list__input"
                            placeholder=" What needs to be done?"
                            id="new-todo"
                        />
                        <label htmlFor="floatingInput"> What needs to be done?</label>
                    </div>


                    <button className={'w-100 btn btn-lg btn-primary'}>
                        Add # 123
                    </button>
                </form>
            </div>
        );
    }

}