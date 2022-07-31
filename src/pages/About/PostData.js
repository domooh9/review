import React, {useState} from "react";
import "./About.css";


const UrL = ("http://localhost:8004/docs")

function PostData({addData}) {
    const [info, setDocs] = useState("");

    function addData(newData){
      const updatedData = [...info, newData]
      setDocs(updatedData);
    
    }
   
    const handleSubmit = (e) => {
      e.preventDefault()
      const docsObj = {
          docs: {
           content: info
          }
      }
      fetch(UrL, {
        method: "POST",
        headers: {
          "context-Type": "application/json"
        },
        body: JSON.stringify(docsObj)
      })
      .then(r => r.json())
      .then(data => addData(data.docs))
    }
    

  return (
  <div className="abt">
       <form onSubmit={handleSubmit}>
  <input onChange={(e) => setDocs(e.target.value)} className='inpt' value={info} />
    <button className='btn'
        type="submit" 
        > Add your comment</button>
      
</form>

  </div>
  );
  }

export default PostData;
