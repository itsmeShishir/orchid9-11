import {useState } from "react";
import axios from "axios";

const AddCategory = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState(null);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post("http://127.0.0.1:8000/allCategory",{
                title : title,
                description :description,
                img: img[0]
            });
        }catch(e){
            console.log(e.message);
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Title" name="title"
            value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea type="text"
            placeholder="Description" name="description" 
            value={description} onChange={(e)=> setDescription(e.target.value)}/> 
        </div>
        <div>
            <label htmlFor="img">img</label>
            <input type="file" placeholder="upload image" 
            name="img" value={img} onChange={(e)=> setImg(e.target.value)}/>
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  )
}

export default AddCategory
