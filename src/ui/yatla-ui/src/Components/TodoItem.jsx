import React, { useState } from 'react';

function TodoItem(props) {
    const [isHidden, setHidden] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [editText, setEditText] = useState("");

    function handleMarkAsDone(id){
        props.markAsDone(id);
        setHidden(true);
    }



    return (
    <>
        <tr className="TodoItem-Row" onClick={() => handleMarkAsDone(props.itemId)} hidden={isHidden}>
            <td>{new Date(props.createdAt).toLocaleString('en-gb')}</td>
            <td className="TodoList-Table__Cell_Large">{props.data}</td>
                <td><button onClick={() => setEditing(!isEditing)}>Edit</button></td>
        </tr>
            {isEditing ?? (
                <tr className="TodoItem-Row" hidden={isHidden}>
                    <td colSpan="3">
                        <input type="text" />
                        <button>Save</button>
                        <button>Cancel</button>
                    </td>
                </tr>
        )}    
    </>
    );
}

export default TodoItem;