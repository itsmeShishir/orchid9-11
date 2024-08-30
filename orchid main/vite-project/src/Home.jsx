import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
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
    <Link to="/allCategory" 
    className='px-6 py-4 bg-red-500 
    text-white'
    >All Category</Link>
     {
      data.map((items) => 
         <>
          <Link to={`/updateCategory/${items.id}`} key={items.id}>
            <h1>{items.title}</h1>
            <p>{items.description}</p>
            <img src={items.img} alt={items.title} />
          </Link>
        </>
      )
     }
    </div>
    
  )
}

export default Home
