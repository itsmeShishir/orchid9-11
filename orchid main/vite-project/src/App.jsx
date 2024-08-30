import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddCategory from './AddCategory'
import AllCategory from './AllCategory'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCategory from './UpdateCategory';

const App = () => {
  return (
   <>
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/addCategory' element={<AddCategory />}/>
      <Route path='/allCategory' element={<AllCategory />}/>
      <Route path='/updateCategory/:id' element={<UpdateCategory />}/>
    </Routes>
    <ToastContainer />
   </>
  )
}

export default App
