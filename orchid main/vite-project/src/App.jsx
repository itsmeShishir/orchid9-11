import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddCategory from './AddCategory'
const App = () => {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/addCategory' element={<AddCategory />}/>
    </Routes>
  )
}

export default App
