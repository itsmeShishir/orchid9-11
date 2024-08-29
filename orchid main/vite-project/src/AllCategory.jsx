import { useEffect, useState } from 'react'
import axios from "axios";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from 'react-router-dom';

const AllCategory = () => {
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
    <>
     
<div className="container mx-auto relative overflow-x-auto">
    <Link to="/addCategory" className='rounded-xl px-3 py-2 text-xl bg-green-600 text-white'>Add Category</Link>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Category name
                </th>
                <th scope="col" className="px-6 py-3">
                    Desc
                </th>
                <th scope="col" className="px-6 py-3">
                    Images
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map(items=> 
                    <tr key={items.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {items.title}
                </th>
                <td className="px-6 py-4">
                    {items.description}
                </td>
                <td className="px-6 py-4">
                    <img src={items.img} alt="" className='w-[100px] h-auto'/>
                </td>
                <td className="px-6 py-4 w-3">
                    <div className='rounded-xl px-3 py-2 text-xl bg-yellow-600 text-white'><CiEdit  /></div>
                    <div className='rounded-xl px-3 py-2 text-xl bg-red-600 text-white'><CiTrash  /></div>
                </td>
            </tr>
                )
            }
            
        </tbody>
    </table>
</div>

    </>
    
  )
}

export default AllCategory
