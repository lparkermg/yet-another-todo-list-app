import React, { useState } from 'react';

function TodoItem(props) {
    const [isHidden, setHidden] = useState(false);
    function handleMarkAsDone(id){
        props.markAsDone(id);
        setHidden(true);
    }

    return (
    <>
        <tr className="TodoItem-Row" onClick={() => handleMarkAsDone(props.itemId)} hidden={isHidden}>
            <td>{new Date(props.createdAt).toLocaleString('en-gb')}</td>
            <td className="TodoList-Table__Cell_Large">{props.data}</td>
        </tr>
    </>
    );
}

export default TodoItem;