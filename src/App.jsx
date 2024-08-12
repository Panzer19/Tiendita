


import Carrusel from './components/Content/Carrusel.jsx'
import ItemListContainer from './components/Content/ItemsListContainer.jsx'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ItemDetailContainer } from './components/Content/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          <Route path='/*' element={<h1>No se que hiciste pero Rompiste Todo</h1>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
