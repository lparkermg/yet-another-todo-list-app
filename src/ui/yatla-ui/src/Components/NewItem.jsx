import React, { useState } from 'react';

function NewItem(props){
    const [itemText, setItemText] = useState("");


    function handleClearOnSubmit(text){
        props.onClick(text);
        setItemText("");
    }

    return (
        <div className="Container">
            <div>
                <textarea className="TodoItem-InputText" type="text" onChange={e => setItemText(e.target.value)} value={ itemText }maxLength="256"/>
                <button className="TodoItem-Button" onClick={() => handleClearOnSubmit(itemText)} disabled={itemText === undefined || itemText === ""}>Add Item</button>
            </div>
        </div>
    );
}

export default NewItem;