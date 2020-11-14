import React from 'react';

function TodoItem(props) {
    return (
    <>
        <tr className="TodoItem-Row" onClick={() => props.markAsDone(props.id)}>
            <td>{new Date(props.createdAt).toLocaleString('en-gb')}</td>
            <td className="TodoList-Table__Cell_Large">{props.data}</td>
        </tr>
    </>
    );
}

export default TodoItem;