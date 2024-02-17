import { useState } from 'react';
import './App.css';
import CreateNotes from './Components/CreateNotes';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Notes from './Components/Notes';
function App() {
  const[addItem,setAddItem]=useState([])
  const addNote=(note)=>{
    // alert("clicked")
    setAddItem((oldData)=>{
      return [...oldData,note]
    });
    console.log(note)
  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>
      oldData.filter((currData,indx)=>{
        return indx !==id;
      })
    )
  }
  return (
    <>
      <Header />
      <CreateNotes  passNote={addNote}/>
      {/* <Notes /> */}

    {addItem.map((val,index)=>{
      return <Notes 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
      />
    })}

      <Footer />
    </>
  );
}

export default App;
