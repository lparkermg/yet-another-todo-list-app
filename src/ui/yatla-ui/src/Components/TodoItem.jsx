import React from 'react';

function TodoItem(props) {
    return (
    <>
        <tr>
            <td>{props.createdAt}</td>
            <td className="TodoList-Table__Cell_Large">{props.data}</td>
            <td className="TodoList-Table__Vell_Small">{props.done}</td>
        </tr>
    </>
    );
}

export default TodoItem;