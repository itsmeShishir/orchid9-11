import {useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState(null);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("img", img);
        try{
            await axios.post("http://127.0.0.1:8000/allCategory", 
            formData,{  headers: {
        "Content-Type": "multipart/form-data",
      }});
      toast("Category add successfully");
      navigate('/allCategory')
        }catch(e){
            toast(e.message);
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
            name="img"  onChange={(e)=> setImg(e.target.files[0])}/>
        </div>
        
        <button type="submit">Add Category</button>
      </form>
    </div>
  )
}

export default AddCategory
