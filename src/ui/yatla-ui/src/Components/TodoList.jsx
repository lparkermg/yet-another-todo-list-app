import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    buildItem(item){
        return (<TodoItem createdAt={item.createdAt} data={item.data} />);
    }
    render(){
        console.log(this.props);
        const items = this.props.listItems.map(i => {
            const row = [this.buildItem(i)];
            return row;
        })
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
                        {[].concat.apply([], items)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;