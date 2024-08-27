import { useEffect, useState } from 'react'
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      const fetchData = async() =>{
        try{
          let data = await axios.get("http://127.0.0.1:8000/allCategory")
          setData(data.data);
        }catch(e){
          console.log(e.message)
        }
      }
      fetchData();
  },[]);

  return (
    <div>
     {
      data.map((items) => 
         <>
          <div key={items.id}>
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <img src={items.img} alt={items.title} />
          </div>
        </>
      )
     }
    </div>
    
  )
}

export default Home
