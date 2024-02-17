import React from "react";
import "./Notes.css"

const Notes =(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return<>
<div className="notes">
<h3>{props.title}</h3><br/>
<p>{props.content}</p>
<button onClick={deleteNote}>
<span className="bi bi-trash"></span>
</button>
</div>
    </>
}
export default Notes;