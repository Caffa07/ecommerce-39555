import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {

  
  return (
    <BrowserRouter>
      
    <NavBar />

    <Routes>
      <Route exact path="/" element={<ItemListContainer greeting="W4 Store" />}/>
      <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer />}/>
      <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>

  <Footer />
  
  </BrowserRouter>
  )
}

export default App
