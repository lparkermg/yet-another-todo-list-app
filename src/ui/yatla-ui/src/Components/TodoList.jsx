import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    buildItem(item){
        return (<TodoItem key={item.id} itemId={item.id} createdAt={item.createdAt} data={item.data} markAsDone={this.props.markAsDone}/>);
    }
    render(){
        const items = this.props.listItems.map(i => {
            const row = [this.buildItem(i)];
            return row;
        })
        return (
            <div className="Container">
                <table className="TodoList-Table">
                    <thead>
                        <tr className="TodoList-Table__Header">
                            <th>Created At</th>
                            <th>Todo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length === 0 ? (
                            <tr className="TodoItem-Row-Empty" >
                                <td colSpan="2">No items</td>
                            </tr>
                        ) :
                        (<>{[].concat.apply([], items)}</>)}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;