import React, { useState } from 'react';

function NewItem(props){
    const [itemText, setItemText] = useState("");

    return (
        <div className="Container">
            Add New Item
            <div>
                <input className="TodoItem-InputText" type="text" onChange={e => setItemText(e.target.value)} maxLength="512"/>
                <button className="TodoItem-Button" onClick={() => props.onClick(itemText)} disabled={itemText === undefined || itemText === ""}>Add Item</button>
            </div>
        </div>
    );
}

export default NewItem;