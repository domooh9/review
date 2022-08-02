import React, {useState, useEffect} from 'react';
import "./About.css";


const UrL = ("http://localhost:8004/docs")

function Fetch() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [docs, setItems] = useState([]);
    const [info, setDocs] = useState("");
    const [data, setData] = useState ("")

    useEffect(() => {
        fetch(UrL)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
           
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
  
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        const handleSubmit = (e) => {
          e.preventDefault();
          fetch(UrL, {
             method: 'POST',
             body: JSON.stringify({
                info: info,
                data: data
               
                
             }),
             headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
             },
          })
             .then((res) => res.text())
             .then((doc) => {
                setItems((docs) => [doc, ...docs]);
                setDocs("");
                setData("");
             })
             .catch((err) => {
              console.log(err.message);
           });
       };
      
      

  return ( 
    <>
      <div className="abt">
       <form onSubmit={handleSubmit}>
        <input onChange={(e) => setData(e.target.value)} className="int" placeholder="name.." value={data} />
  <input onChange={(e) => setDocs(e.target.value)} className='inpt' placeholder="add comment.." value={info} />
    <button  className='btn'
        type="submit" 
        > Add your comment</button>
      
</form>

  </div>
        
{docs.map(doc => (
          <p className='inputs' key={doc.id}>
          {doc.Name} :  {doc.content}    
 </p>          
))}

   </>
    
 

 );
}
}

export default Fetch;
