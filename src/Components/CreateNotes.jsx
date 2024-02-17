import React, { useState } from "react";
import "./CreateNotes.css"
const CreateNotes =(props)=>{
    const [expand,setExpand]=useState(false)
    const[note,setNote] = useState(
        {
        title:"",
        content:""
    }
    );
    const addEvent=()=>{
       
        props.passNote(note);
        setNote(
            {
            title:"",
            content:""
        }
        )
    }
    const InputEvent=(event)=>{
        // const value = event.target.value;
        // const name = event.target.name;
        const{name,value}= event.target;
        setNote((oldData)=>{
            return({
                ...oldData,
                [name]:value,
            })
        })
        
        console.log(note)
    }

const expandIt=()=>{
    setExpand(true);
}

    return<>
<div className="createnotes">
<form className="form-container">
{expand?
    <input 
    type="text" name="title" 
    value={note.title} 
    onChange={InputEvent} 
    placeholder='Title'
     autoComplete='off' />: null}
     
     <br />
    <textarea
     row='2' name="content" 
     value={note.content}  
     onChange={InputEvent} 
     placeholder="Write a note..." 
        onClick={expandIt}
     />
     {expand?
  <p onClick={addEvent}
   className="btn">+</p>: null}
</form>
</div>
    </>
}
export default CreateNotes;