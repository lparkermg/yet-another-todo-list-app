import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render(){
        return (
            <div className="TodoList-Container">
                Todo List Coming Soon...
                <table className="TodoList-Table">
                    <thead>
                        <tr>
                            <th>Created At</th>
                            <th>Todo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <TodoItem createdAt="Date Time" data="This is some test data" done="No"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;