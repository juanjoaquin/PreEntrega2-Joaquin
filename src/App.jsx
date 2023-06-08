import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HomePage from './components/HomePage'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        
        <NavBar />
        <Routes>
          <Route path ="/" element={<HomePage />} /> 
          <Route path="/catalogo" element={<ItemListContainer />} /> 
          <Route path="/category/:id" element={<ItemDetailContainer />} />
          <Route path="/catalogo/:categoria" element={<ItemListContainer />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App
