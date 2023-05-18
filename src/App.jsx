import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <div className='App'>
      <h1>Motos Shop</h1>
      
      <NavBar BackColor="gainsboro" 
      ColorText="black"/>
      
      <ItemListContainer greeting="Bienvenidos a Motos Shop" />
    </div>
  )
}

export default App
