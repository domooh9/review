import React, {useState, useEffect} from 'react';


const UrL = ("http://localhost:8004/docs")

function Fetch() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [docs, setItems] = useState([]);

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
    


  return ( 
    <div >
        
{docs.map(doc => (
          <p className='inputs' key={doc.id}>
           comment: {doc.comment} {doc.content} 
            </p>
            
          
))}

   </div>
    
 

 );
}
}

export default Fetch;
