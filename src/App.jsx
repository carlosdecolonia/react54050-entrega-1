import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const saludo = "Bienvenidos a mi Tienda 2.0"
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={saludo}/>} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
