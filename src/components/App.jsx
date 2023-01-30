import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setitems] = useState([])

  function additem(note){
    setitems(prevItems => {
     return ([...prevItems, note]); 
  })
  console.log(item)
  }

  function removeitem(id){
     setitems(prevItems => {
      return prevItems.filter((eachitem, index) => {
        return index!==id;
      });
     });
  }

  return (
    <div>
      <Header />
      <CreateArea toadd={additem}/>
  {/* this thing down here is a bit cautious, eachitem, index order change aynandhuku chala maaripoindhi, be careful*/}
  {    item.map((eachitem, index) => {
     return(
      <Note 
        id = {index}
        key = {index}
        title={eachitem.title} 
        content={eachitem.content}
        delitem={removeitem} />
  );
  })}
      <Footer />
    </div>
  );
}

export default App;
   
