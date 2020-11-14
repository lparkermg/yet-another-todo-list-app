import React from 'react';

function TodoItem(props) {
    return (
    <>
        <tr>
            <td>{new Date(props.createdAt).toLocaleString('en-gb')}</td>
            <td className="TodoList-Table__Cell_Large">{props.data}</td>
            <td className="TodoList-Table__Vell_Small"></td>
        </tr>
    </>
    );
}

export default TodoItem;